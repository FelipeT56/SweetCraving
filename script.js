
/*
    BUSINESS INFORMATION
    Change these values to match your business.
*/

const business = {
    name: "Sweet Craving by Nenas",
    initials: "SC",
    description: "Find all our important links below.",
    email: "nenasmty1968@example.com"
};

/*
    BUSINESS LINKS
    Add, remove, or reorder links in this array.
*/

const links = [
    {
        title: "Facebook",
        description: "Contact me on Facebook,",
        url: "https://www.facebook.com/share/152b8QikXYz/?mibextid=wwXIfr"
    },
    {
        title: "Instagram",
        description: "Follow us on social media,",
        url: "https://instagram.com/sweetcravingbynenas?srtk=aHE3OGtvcjg2NXR6&utm_source=qr"
    },
    {
        title: "TikTok",
        description: "See what we are about.",
        url: "https://www.tiktok.com/@sweetcravingbynenas?_r=1&_t=ZP-9AYEpohngFi"
    },
   
];

/*
    UPDATE THE BUSINESS INFORMATION ON THE PAGE
*/

document.title = business.name + " | Link Hub";

document.getElementById("business-name").textContent =
    business.name;

document.getElementById("business-description").textContent =
    business.description;


document.getElementById("footer-name").textContent =
    business.name;

const emailLink = document.getElementById("email-link");

emailLink.href = "mailto:" + business.email;

/*
    CREATE THE LINK BUTTONS
*/

const linkList = document.getElementById("link-list");

links.forEach(function(link) {

    // Create a clickable link
    const button = document.createElement("a");

    button.className = "business-link";
    button.href = link.url;

    // Open website links in a new tab
    if (
        link.url.startsWith("https://") ||
        link.url.startsWith("http://")
    ) {
        button.target = "_blank";
        button.rel = "noopener noreferrer";
    }

    // Create the title and description
    const textContainer = document.createElement("span");

    const title = document.createElement("strong");
    title.textContent = link.title;

    const description = document.createElement("small");
    description.textContent = link.description;

    description.style.display = "block";
    description.style.color = "#77728a";
    description.style.marginTop = "4px";

    textContainer.appendChild(title);
    textContainer.appendChild(description);

    // Add a small arrow to the button
    const arrow = document.createElement("span");
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");

    // Put everything inside the clickable link
    button.appendChild(textContainer);
    button.appendChild(arrow);

    // Add the completed link to the page
    linkList.appendChild(button);

});
