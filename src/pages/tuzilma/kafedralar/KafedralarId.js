import { getKafedraId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import HodimlarCard from "@/components/tuzilma/HodimlarCard";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/layout/Layout";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const KafedralarId = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["facultet-id", id],
    queryFn: () => getKafedraId(id),
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <BigFotoBack
        img={
          "https://cachizer1.2gis.com/reviews-photos/d6263c8d-a67e-40dc-ab35-d31d1acfbe20.jpg?w=1920"
        }
        text={data?.data?.data?.kafedra?.menu}
      />
      <CustomTitle name={data?.data?.data?.kafedra?.menu} my={true} />
      <div className="container">
        <RektorCard
          img={data?.data?.data.kafedradirector?.[0]?.director_img}
          time={data?.data?.data.kafedradirector?.[0]?.acceptance}
          degree={data?.data?.data.kafedradirector?.[0]?.degree}
          position={data?.data?.data.kafedradirector?.[0]?.position}
          name={data?.data?.data.kafedradirector?.[0]?.directorname}
          address={data?.data?.data.kafedradirector?.[0]?.email}
          phone={data?.data?.data.kafedradirector?.[0]?.phone}
        />
      </div>
      <HodimlarCard link={false} data={data?.data?.data?.kafedramember} />
      <CustomTitle name={"Kafedra haqida"} my={true} />
      <div className="container">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data?.data?.kaferdaabout?.[0]?.text,
          }}
        />
      </div>
    </Layout>
  );
};

export default KafedralarId;
