import React from "react";
import StructurePage from "../../../components/StateStructure";
import { haryanaData } from "../../../components/Data/states/haryanaData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const haryanaPage = () => {
    return (
        <>

            <Helmet>
                <title>Pilot Training Institute in Haryana - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-haryana"
                />
            </Helmet>

            <StructurePage data={haryanaData} />;
        </>
    )

};

export default haryanaPage;