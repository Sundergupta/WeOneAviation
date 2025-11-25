import { Outlet } from "react-router-dom"
import NavBar from "../NavBar";
import Footer from "../Footer";
import ContactUs from "../ContactUs";
import FloatingButtons from "../FloatingButtons";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {

    return <>
        <NavBar />
        <Outlet />
        <ContactUs />
        <FloatingButtons />
        <ScrollRestoration />

        <Footer />
    </>
}
export default RootLayout;
