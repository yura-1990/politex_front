import {imgUrl} from "@/api/general";
import React from "react";
import {AlumniCardWrapper} from "./OurAlumniWrapper";

const AlumniCard = ({img, name, positions}) => {
    return (
        <AlumniCardWrapper>
            <img src={imgUrl + img} alt="our alumni" loading={"lazy"}/>
            <p>{name}</p>
            <p>{positions}</p>
        </AlumniCardWrapper>
    );
};

export default AlumniCard;
