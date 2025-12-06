import React from "react";
import StructurePage from "../../../components/StateStructure";
import { coimbatoreData } from "../../../components/Data/states/coimbatoreData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const CoimbatorePage = () => {

    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Coimbatore - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-coimbatore"
                />
            </Helmet>
            <StructurePage data={coimbatoreData} />;
        </>

    )
};

export default CoimbatorePage;