/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Characteristics from './Characteristics';

function RadioButton({ value, characteristic }) {
  return (
    <div>
      <input type="radio" name="recommend" value={value} id={`${characteristic}-${value}`} />
      {/* checked={} onChange={} */}
      <label htmlFor={value}>{value}</label>
    </div>
  );
}

export default function RadioRow({ characteristic }) {
  const radioButtons = [];
  const mapNumToOptionText = Characteristics[characteristic];

  for (let i = 5; i >= 1; i--) {
    radioButtons.push(<RadioButton
      characteristic={characteristic}
      value={mapNumToOptionText[i]}
      key={mapNumToOptionText[i]}
    />);
  }

  return (
    <fieldset>
      <legend>{characteristic}</legend>
      {radioButtons}
    </fieldset>
  );
}
