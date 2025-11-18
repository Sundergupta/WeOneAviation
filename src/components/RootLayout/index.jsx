import { Outlet } from "react-router-dom"
import NavBar from "../NavBar";
import Footer from "../Footer";
import ContactUs from "../ContactUs";
import FloatingButtons from "../FloatingButtons";

const RootLayout = () => {

    return <>
        <NavBar />
        <Outlet />
        <ContactUs />
        <FloatingButtons />

        <Footer />
    </>
}
export default RootLayout;
