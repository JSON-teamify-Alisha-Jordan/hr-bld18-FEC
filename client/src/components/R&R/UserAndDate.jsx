import React from 'react';
import dayjs from 'dayjs';

export default function UserAndDate({ user, date }) {
  const formattedDate = dayjs(date).format('MMMM D YYYY');

  return (
    <span className="rr-user-and-date">{user}, {formattedDate}</span>
  );
}
