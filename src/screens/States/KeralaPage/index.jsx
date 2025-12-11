import React from "react";
import StructurePage from "../../../components/StateStructure";
import { keralaData } from "../../../components/Data/states/keralaData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const KeralaPage = () => {
    return (
        <>

            <Helmet>
                <title>Pilot Training Institute in Kerala - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-andhra-pradeshm"
                />
            </Helmet>
            <StructurePage data={keralaData} />

        </>
    )

};

export default KeralaPage;