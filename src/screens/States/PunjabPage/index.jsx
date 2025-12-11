import React from "react";
import StructurePage from "../../../components/StateStructure";
import { punjabData } from "../../../components/Data/states/punjabData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const PunjabPage = () => {
    return (

        <>
            <Helmet>
                <title>Pilot Training Institute in Punjab - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-punjab"
                />
            </Helmet>
            <StructurePage data={punjabData} />;
        </>
    )

};

export default PunjabPage;