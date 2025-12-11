import React from "react";
import StructurePage from "../../../components/StateStructure";
import { rajasthanData } from "../../../components/Data/states/rajasthanData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const RajasthanPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Rajasthan - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-rajasthan"
                />
            </Helmet>
            <StructurePage data={rajasthanData} />;
        </>
    )
};

export default RajasthanPage;