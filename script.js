// Add event listener to learn more button
document.querySelector('#home button').addEventListener('click', () => {
    // Scroll to about section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});