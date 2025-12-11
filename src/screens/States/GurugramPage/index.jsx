import React from "react";
import StructurePage from "../../../components/StateStructure";
import { gurugramData } from "../../../components/Data/states/gurugramData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const GurugramPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Gurugram - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-gurugram"
                />
            </Helmet>
            <StructurePage data={gurugramData} />;
        </>
    )


};
export default GurugramPage;