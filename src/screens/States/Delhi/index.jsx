import React from "react";
import StructurePage from "../../../components/StateStructure";
import { delhiData } from "../../../components/Data/states/delhiData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const DelhiPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Delhi - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-delhi"
                />
            </Helmet>

            <StructurePage data={delhiData} />
        </>


    )


};

export default DelhiPage;
