import React from "react";
import StructurePage from "../../../components/StateStructure";
import { goaData } from "../../../components/Data/states/goaData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const GoaPage = () => {
    return (
        <>

            <Helmet>
                <title>Pilot Training Institute in Goa - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-goa"
                />
            </Helmet>

            <StructurePage data={goaData} />;
        </>
    )
};

export default GoaPage;
