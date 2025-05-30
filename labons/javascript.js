// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Apply styles when the element is in view
            entry.target.style.opacity = 1; // Set opacity to 1
            entry.target.style.transform = 'translateY(0)'; // Move to original position
            
            observer.unobserve(entry.target); // Stop observing the element after it becomes visible
        }
    });
});

// Select all inner divs you want to animate
const elementsToAnimate = document.querySelectorAll('#animation');
elementsToAnimate.forEach((element) => {
    observer.observe(element); // Start observing each inner div
});
const profileImage = document.getElementById("profileImage");
const profileWrapper = document.getElementById("profileWrapper");
const backBtn = document.getElementById("backBtn");
const profileDesc = document.getElementById("profileDesc");

profileImage.addEventListener("click", () => {
  profileWrapper.classList.add("active");
});

backBtn.addEventListener("click", () => {
  profileWrapper.classList.remove("active");
});
