import React from "react";
import StructurePage from "../../../components/StateStructure";
import { ghaziabadData } from "../../../components/Data/states/ghaziabadData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const GhaziabadPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Ghaziabad - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-ghaziabad"
                />
            </Helmet>

            <StructurePage data={ghaziabadData} />;
        </>

    )


};

export default GhaziabadPage;
