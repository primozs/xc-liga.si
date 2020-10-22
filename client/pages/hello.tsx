import React from 'react';
import { GetServerSideProps } from 'next';
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

type Props = {
  name: string;
};

const HelloPage = ({ name }: Props) => {
  return <div className="HELLO">hello {name}</div>;
};

export default HelloPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      name: query.name || 'World',
    },
  };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// };
