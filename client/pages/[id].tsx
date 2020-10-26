import React from 'react';
import RulesHero from 'app/rules/RulesHero';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getPostData, getAllPostIds } from 'posts/getPostsData';

type Props = {
  postData: PostData | null;
};

const RulesPage = ({ postData }: Props) => (
  <>
    <Head>
      <title>{postData?.title}</title>
    </Head>
    <RulesHero />
    <article
      className="px-5 py-5 mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-lg gridcol-text-2 sm:gap-4"
      dangerouslySetInnerHTML={{ __html: postData?.contentHtml || '' }}
    />
  </>
);

export default RulesPage;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
