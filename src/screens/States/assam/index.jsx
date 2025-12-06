import React from "react";
import StructurePage from "../../../components/StateStructure";
import { assamData } from "../../../components/Data/states/assamData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const AssamPage = () => {

    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Assam - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-assam"
                />
            </Helmet>
            <StructurePage data={assamData} />;
        </>
    )
};
export default AssamPage;