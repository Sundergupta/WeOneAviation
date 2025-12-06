import React from "react";
import StructurePage from "../../../components/StateStructure";
import { gujaratData } from "../../../components/Data/states/gujaratData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const GujaratPage = () => {
    return (
        <>

            <Helmet>
                <title>Pilot Training Institute in Gujarat - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-gujarat"
                />
            </Helmet>

            <StructurePage data={gujaratData} />;

        </>
    )

};
export default GujaratPage;