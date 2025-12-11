import React from "react";
import StructurePage from "../../../components/StateStructure";
import { himachalPradeshData } from "../../../components/Data/states/himachalPradeshData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const HimachalPradeshPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Himachal Pradesh - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-himachal-pradesh"
                />
            </Helmet>
            <StructurePage data={himachalPradeshData} />;
        </>
    )
};

export default HimachalPradeshPage;
