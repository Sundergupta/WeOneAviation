import React from "react";
import StructurePage from "../../../components/StateStructure";
import { biharData } from "../../../components/Data/states/biharData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const biharPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Bihar - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-bihar"
                />
            </Helmet>
            <StructurePage data={biharData} />;
        </>
    )

};
export default biharPage;