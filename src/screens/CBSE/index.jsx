// Example using React Helmet (requires installation: npm install react-helmet)
import React from "react";
import { Helmet } from 'react-helmet-async';// Import Helmet
import { cbseData } from "../../components/Data/cbseData";
import DynamicPage from "../full form";

const CbsePage = () => {
    return (
        <>
            <Helmet>
                <title>CBSE Full Form – What is CBSE? Meaning, Overview & Details</title>
                <meta name="description" content="Discover the full form of CBSE, its meaning, functions, and importance in the Indian education system. Simple explanation for students and parents." />
                <meta name="keywords" content="CBSE full form, what is CBSE, CBSE meaning, CBSE board details" />
                <link
                    rel="canonical"
                    href="https://weoneaviation.com/cbse-full-form"
                />
            </Helmet>
            <DynamicPage data={cbseData} />
        </>
    );
};

export default CbsePage;