import React from "react";
import StructurePage from "../../../components/StateStructure";
import { jaipurData } from "../../../components/Data/states/jaipurData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const JaipurPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Jaipur - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-jaipur"
                />
            </Helmet>

            <StructurePage data={jaipurData} />;
        </>

    )

};
export default JaipurPage;