import React from "react";
import StructurePage from "../../../components/StateStructure";
import { Helmet } from 'react-helmet-async';// Import Helmet

import { andhraPradeshData } from "../../../components/Data/states/andhraPradeshData";

const andhraPradeshPage = () => {
    return (

        <>

            <Helmet>
                <title>Pilot Training Institute in Andhra Pradesh - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-andhra-pradeshm"
                />
            </Helmet>

            <StructurePage data={andhraPradeshData} />;
        </>
    )

};
export default andhraPradeshPage;