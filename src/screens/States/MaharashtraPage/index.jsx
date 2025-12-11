import React from "react";
import StructurePage from "../../../components/StateStructure";
import { maharashtraData } from "../../../components/Data/states/maharashtraData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const MaharashtraPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Maharashtra - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-maharashtra"
                />
            </Helmet>
            <StructurePage data={maharashtraData} />;
        </>

    )

};

export default MaharashtraPage;
