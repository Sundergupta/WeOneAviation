import React from "react";
import StructurePage from "../../../components/StateStructure";
import { Helmet } from 'react-helmet-async';// Import Helmet

import { arunachalPradeshData } from "../../../components/Data/states/arunachalPradeshData";

const arunachalPradeshPage = () => {

    return (


        <>
            <Helmet>
                <title>Pilot Training Institute in Arunachal Pradesh - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-arunachal-pradesh"
                />
            </Helmet>
            <StructurePage data={arunachalPradeshData} />;
        </>
    )

};
export default arunachalPradeshPage;