/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import characteristicsText from './characteristicsText';

function RadioButton({ rating, characteristic, chars, setChars }) {
  const mapNumToOptionText = characteristicsText[characteristic];
  const text = mapNumToOptionText[rating];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChars((prevChars) => ({
      ...prevChars,
      [name]: Number(value),
    }));
  };

  return (
    <div>
      <input
        type="radio"
        name={characteristic}
        value={rating}
        id={`${characteristic}-${rating}`}
        checked={chars[characteristic] === rating}
        onChange={handleChange}
      />
      <label htmlFor={`${characteristic}-${rating}`}>{text}</label>
    </div>
  );
}

export default function RadioRow({ characteristic, chars, setChars }) {
  const radioButtons = [];
  const mapNumToOptionText = characteristicsText[characteristic];

  for (let i = 5; i >= 1; i--) {
    radioButtons.push(<RadioButton
      characteristic={characteristic}
      rating={i}
      key={mapNumToOptionText[i]}
      chars={chars}
      setChars={setChars}
    />);
  }

  return (
    <fieldset>
      <legend>{characteristic}</legend>
      {radioButtons}
    </fieldset>
  );
}
