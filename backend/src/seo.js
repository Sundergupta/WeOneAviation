export async function getSeoByUrl(url) {
    if (url === "/about-us" || url === "/about-Us") {
        return {
            title: "About Us | WeOne Aviation",
            description:
                "Learn about WeOne Aviation, India’s trusted pilot training institute."
        };
    }

    if (url === "/") {
        return {
            title: "Pilot Training Institute in India | WeOne Aviation",
            description:
                "DGCA-approved pilot training courses in India with expert instructors."
        };
    }

    return {
        title: "WeOne Aviation",
        description: "India’s leading aviation academy."
    };
}
