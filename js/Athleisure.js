let currentIndex = 0;

function displayImages() {
    const cardElements = document.querySelectorAll('.cards > div');
    const row = athleisureImages[currentIndex];

    // Update images for the cards
    cardElements.forEach((card, index) => {
        const currentImageIndex = index % row.length;
        card.style.backgroundImage = `url('${row[currentImageIndex]}')`;
        card.style.backgroundPosition = 'center';
        card.style.backgroundRepeat = 'no-repeat';
        card.style.backgroundSize = 'cover';

        // Add event listener to display details in c-view
        card.addEventListener('click', () => {
            const cView = document.getElementById('c-view');
            const cName = document.getElementById('name');
            const dex = document.getElementById('asd');
            const price = document.getElementById('c1Price');
            const mat = document.getElementById('c-materials');

            const currentDescription = Athdescriptions[currentImageIndex];

            cName.innerHTML = `<h3>Name:</h3><p>${currentDescription.name}</p>`;
            dex.innerHTML = `<h3>Description</h3><p>${currentDescription.description}</p>`;
            price.innerHTML = `<h3>Price:</h3><p>${currentDescription.price}</p>`;
            mat.innerHTML = `<h3>Materials</h3><p>${currentDescription.materials.join(", ")}</p>`;

            cView.style.backgroundImage = `url('${row[currentImageIndex]}')`;
            cView.style.backgroundPosition = 'center';
            cView.style.backgroundRepeat = 'no-repeat';
            cView.style.backgroundSize = 'cover';

            // Show overlay with details
            const overlay = document.getElementById('layer');
            overlay.style.display = 'block';
        });
    });



    // Update button states
    const prevButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    if (currentIndex === 0) {
        prevButton.style.backgroundColor = 'gray';
        prevButton.disabled = true;
    } else {
        prevButton.style.backgroundColor = '#1e1e1e';
        prevButton.disabled = false;
    }

    if (currentIndex === allImages.length - 1) {
        nextButton.style.backgroundColor = 'gray';
        nextButton.disabled = true;
    } else {
        nextButton.style.backgroundColor = 'gray';
        nextButton.disabled = false;
    }
}

function nextImage() {
    if (currentIndex < allImages.length - 1) {
        currentIndex++;
        displayImages();
    } else {
        alert('End of the pages');
    }
}

function previousImages() {
    if (currentIndex > 0) {
        currentIndex--;
        displayImages();
    }
}

function hideOverlay() {
    const overlay = document.getElementById('layer');
    overlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    displayImages(); // Initially set images for cards

    // Event listeners for buttons
    const nextButton = document.querySelector('.btn button[title="Next"]');
    nextButton.addEventListener('click', nextImage);

    const prevButton = document.querySelector('.btn button[title="Previous"]');
    prevButton.addEventListener('click', previousImages);

    // Close the overlay when the close button is clicked
    const closeButton = document.querySelector('.overlay img');
    closeButton.addEventListener('click', hideOverlay);

    document.querySelector('.btn button[title="Next"]').addEventListener('click', () => {
        if (currentIndex < allImages.length - 1) {
            currentIndex++;
            displayImages(allImages);
        } else {
            alert('End of the pages');
        }
    });

    document.querySelector('.btn button[title="Previous"]').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            displayImages(allImages);
        }
    });

    document.querySelector('.overlay img').addEventListener('click', hideOverlay);
});


const qwe = document.getElementById('bars');
const wer = document.getElementById('over');

qwe.addEventListener('click', (e) => {
    wer.style.display = wer.style.display === 'none' || wer.style.display === '' ? 'block' : 'none';
});
document.addEventListener('click', (e) => {
    // Check if the click is outside of 'wer' and 'qwe' elements
    if (!wer.contains(e.target) && e.target !== qwe) {
        wer.style.display = 'none';
    }
});