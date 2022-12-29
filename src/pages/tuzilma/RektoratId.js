import { getRectoratId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/layout/Layout";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const RektoratId = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getRectoratId(id),
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  let datas = data?.data?.data;
  return (
    <>
      <Layout>
        <BigFotoBack
          img={
            "https://st.hzcdn.com/simgs/pictures/home-offices/new-orleans-inspired-on-yarrow-point-kristi-spouse-interiors-img~90913ed1071c0b05_14-5020-1-7953493.jpg"
          }
          text={datas?.degree}
        />
        <CustomTitle name={data?.data?.data?.degree} />
        <div className="container">
          <RektorCard
            point={false}
            time={datas?.time}
            degree={datas?.degree}
            position={datas?.position}
            name={datas?.name}
            img={datas?.img}
            address={datas?.address}
            phone={datas?.phone}
          />
        </div>
        <CustomTitle my={true} />
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: datas?.text,
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default RektoratId;
