import React from "react";
import StructurePage from "../../../components/StateStructure";
import { bangloreData } from "../../../components/Data/states/bangloreData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const banglorePage = () => {
    return (

        <>
            <Helmet>
                <title>Pilot Training Institute in Banglore - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-bangalore"
                />
            </Helmet>
            <StructurePage data={bangloreData} />;
        </>
    )
};
export default banglorePage;