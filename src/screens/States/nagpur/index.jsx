import React from "react";
import StructurePage from "../../../components/StateStructure";
import { nagpurData } from "../../../components/Data/states/nagpurData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const NagpurPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Nagpur - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-nagpur"
                />
            </Helmet>


            <StructurePage data={nagpurData} />;
        </>
    )
};

export default NagpurPage;
