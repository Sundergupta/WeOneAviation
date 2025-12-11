import React from "react";
import StructurePage from "../../../components/StateStructure";
import { noidaData } from "../../../components/Data/states/noidaData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const NoidaPage = () => {
    return (

        <>
            <Helmet>
                <title>Pilot Training Institute in Noida - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-noida"
                />
            </Helmet>
            <StructurePage data={noidaData} />;
        </>
    )

};

export default NoidaPage;
