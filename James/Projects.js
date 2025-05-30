document.addEventListener("DOMContentLoaded", () => {
    // Add the fade-in class on page load
    document.body.classList.add("fade");

    // Handle link clicks
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Check if the link points to the current page
            const currentUrl = window.location.href.split('#')[0]; // Remove hash for comparison
            const targetUrl = link.href.split('#')[0];
            
            if (currentUrl === targetUrl) {
                event.preventDefault(); // Prevent any action if it's the same page
                return;
            }

            // Trigger fade-out for navigation
            event.preventDefault(); // Prevent immediate navigation
            const href = link.href;

            // Remove the fade-in class to trigger fade-out
            document.body.classList.remove("fade");

            // Wait for the animation to complete, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the CSS transition duration
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");

    // Show the loading screen on page load
    setTimeout(() => {
        loadingScreen.classList.remove("show");
    }, 500); // Delay to allow for fade-out effect

    // Handle link clicks
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            // Ensure it's an internal link (ends with .html)
            if (href.endsWith(".html")) {
                event.preventDefault(); // Prevent immediate navigation

                // Show loading screen
                loadingScreen.classList.add("show");

                // Wait for the loading animation, then navigate
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Adjust this to match the fade-out duration
            }
        });
    });
});
const projects = [
    {
        name: "Project Alpha",
        image: "Image Icon.jpg",
        details: "Details about Project Alpha. This project involves X, Y, and Z."
    },
    {
        name: "Project Beta",
        image: "james.jfif",
        details: "Details about Project Beta. This project focuses on A, B, and C."
    },
    {
        name: "Project Gamma",
        image: "Sean.jfif",
        details: "Details about Project Gamma. This is an innovative approach to D, E, and F."
    }
];

let currentIndex = 0;

function updateProject() {
    const project = projects[currentIndex];
    document.getElementById("projectName").innerText = project.name;
    document.getElementById("projectImage").querySelector("img").src = project.image;
    document.getElementById("detailsSection").innerText = project.details;
}

function previousProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject();
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject();
}

// Initialize the first project
updateProject();