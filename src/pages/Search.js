import { getSearch } from "@/api/general";
import CustomTitle from "@/components/custom_title";
import NewsCard from "@/components/home/news/NewsCard";
import { NewsPageWrapper } from "@/components/news/NewsPageWrapper";
import Layout from "@/layout/Layout";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Search = () => {
  const { id } = useParams();
  const { data } = useQuery("home-facts", getSearch);

  const datas = data?.data?.data?.filter((v) => {
    if (v?.title?.toLowerCase()?.includes(id?.toLowerCase())) {
      return v;
    }
  });
  return (
    <>
      <Layout>
        <CustomTitle name={id} my={true} />
        <NewsPageWrapper>
          <div className="container order-3">
            <div className="card-news">
              {datas?.map((v, i) => (
                <NewsCard
                  title={v?.title}
                  link={
                    v?.category == 1
                      ? `/news/${v?.id}`
                      : v?.category == 2
                      ? `/events/${v?.id}`
                      : v?.category == 3
                      ? `/announcements/${v?.id}`
                      : `/sport/${v?.id}`
                  }
                  img={v?.img}
                  text={v?.text}
                  time={v?.created_at}
                />
              ))}
            </div>
          </div>
        </NewsPageWrapper>
      </Layout>
    </>
  );
};

export default Search;
