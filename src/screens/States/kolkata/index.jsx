import React from "react";
import StructurePage from "../../../components/StateStructure";
import { kolkataData } from "../../../components/Data/states/kolkataData";
import { Helmet } from 'react-helmet-async';// Import Helmet

const KolkataPage = () => {
    return (


        <>
            <Helmet>
                <title>Pilot Training Institute in Kolkata - 2026</title>
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/pilot-training-in-kolkata"
                />
            </Helmet>
            <StructurePage data={kolkataData} />;
        </>
    )
};
export default KolkataPage;