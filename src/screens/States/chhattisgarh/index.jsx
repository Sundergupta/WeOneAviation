// screens/States/chhattisgarh.jsx
import React from "react";
import StructurePage from "../../../components/StateStructure";
import { chhattisgarhData } from "../../../components/Data/states/chhattisgarhData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const ChhattisgarhPage = () => {
    return (
        <>
            <Helmet>
                <title>Pilot Training Institute in Chhattisgarh - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-chhattisgarh"
                />
            </Helmet>
            <StructurePage data={chhattisgarhData} />;
        </>

    )
};

export default ChhattisgarhPage;
