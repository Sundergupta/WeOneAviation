import React from "react";
import DynamicPage from "../../screens/Structure";
import { airNavigationData } from "../../components/Data/airNavigationData";

const AirNavigation = () => {
    return <DynamicPage data={airNavigationData} />;
};
export default AirNavigation;