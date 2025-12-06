import React from "react";
import StructurePage from "../../../components/StateStructure";
import { indiaData } from "../../../components/Data/states/indiaData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const IndiaPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in India - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-india"
                />
            </Helmet>

            <StructurePage data={indiaData} />;
        </>
    )
};

export default IndiaPage;