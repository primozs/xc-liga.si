import React from 'react';
import { format, formatISO } from 'date-fns';

type Props = {
  dateString?: string;
};

export default function DateView({ dateString }: Props) {
  if (!dateString) return null;

  const date = new Date(dateString);
  return (
    <time dateTime={formatISO(date)} className="text-sm">
      <span>{format(date, 'LLLL d, yyyy')}</span>
    </time>
  );
}
