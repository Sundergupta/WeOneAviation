import React from "react";
import StructurePage from "../../../components/StateStructure";
import { chennaiData } from "../../../components/Data/states/chennaiData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const ChenniPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Chenni - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-chennai"
                />
            </Helmet>
            <StructurePage data={chennaiData} />;
        </>
    )

};

export default ChenniPage;