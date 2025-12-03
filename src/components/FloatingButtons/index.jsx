import React from "react";
import "./style.css";
import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
    return (
        <>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919355611996"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn whatsapp-btn"
            >
                <MessageCircle size={26} color="white" />
            </a>

            {/* Call Button */}
            <a href="tel:+919667370747" className="floating-btn call-btn">
                <Phone size={26} color="white" />
            </a>
        </>
    );
};

export default FloatingButtons;
