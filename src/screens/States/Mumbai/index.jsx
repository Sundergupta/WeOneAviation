import React from "react";
import StructurePage from "../../../components/StateStructure";
import { mumbaiData } from "../../../components/Data/states/mumbaiData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const MumbaiPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Mumbai - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-mumbai"
                />
            </Helmet>
            <StructurePage data={mumbaiData} />;
        </>
    )
};

export default MumbaiPage;