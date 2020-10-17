import React from 'react';

type Props = {
  message: string;
};

export const AlertNotification = ({ message }: Props) => (
  <div>
    <div>
      <p>{message}</p>
    </div>
  </div>
);

export default AlertNotification;
