import React from "react";
import StructurePage from "../../../components/StateStructure";
import puneData from "../../../components/Data/states/puneData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const PunePage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Pune - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-pune"
                />
            </Helmet>
            <StructurePage data={puneData} />;
        </>

    )
};

export default PunePage;