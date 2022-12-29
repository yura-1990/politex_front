import React from "react";
import Hr from "@/components/hr";
import {TitleWrapper} from "@/components/custom_title/style";

function CustomTitle({name, my = false}) {
    return (
        <TitleWrapper my={my}>
            <h3 className={"container"}>{name} </h3>
            <Hr/>
        </TitleWrapper>
    );
}

export default CustomTitle;
