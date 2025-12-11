import React from "react";
import StructurePage from "../../../components/StateStructure";
import { hyderabadData } from "../../../components/Data/states/hyderabadData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const hyderabadPage = () => {

    return (

        <>
            <Helmet>
                <title>Pilot Training Institute in Hyderabad - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-hyderabad"
                />
            </Helmet>
            <StructurePage data={hyderabadData} />;
        </>
    )
};

export default hyderabadPage;