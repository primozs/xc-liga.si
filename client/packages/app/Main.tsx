import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Main({ children }: Props) {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  );
}

export default Main;
