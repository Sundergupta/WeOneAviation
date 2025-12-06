import React from "react";
import StructurePage from "../../../components/StateStructure";
import { tamilNaduData } from "../../../components/Data/states/tamilNaduData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const TamilNaduPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Tamil Nadu - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-tamil-nadu"
                />
            </Helmet>

            < StructurePage data={tamilNaduData} />;
        </>
    )

};

export default TamilNaduPage;