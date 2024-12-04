let currentIndex = 0;
const cardElements = document.querySelectorAll('.cards > div');

function updateCards(row) {
    cardElements.forEach((card, index) => {
        const currentImageIndex = index % row.length;
        
        card.style.backgroundImage = `url('${row[currentImageIndex]}')`;
        card.style.backgroundPosition = 'center';
        card.style.backgroundRepeat = 'no-repeat';
        card.style.backgroundSize = 'cover';

        card.onclick = () => {
            const cView = document.getElementById('c-view');
            const cName = document.getElementById('name');
            const dex = document.getElementById('asd');
            const price = document.getElementById('c1Price');
            const mat = document.getElementById('c-materials');

            const descriptionIndex = currentIndex * row.length + currentImageIndex;
            const currentDescription = descriptions[descriptionIndex];

            cView.style.backgroundImage = `url('${row[currentImageIndex]}')`;
            cView.style.backgroundPosition = 'center';
            cView.style.backgroundRepeat = 'no-repeat';
            cView.style.backgroundSize = 'cover';

            if (currentDescription) {
                cName.innerHTML = `<h3>Name:</h3><p>${currentDescription.name}</p>`;
                dex.innerHTML = `<h3>Description</h3><p>${currentDescription.description}</p>`;
                price.innerHTML = `<h3>Price:</h3><p>${currentDescription.price}</p>`;
                mat.innerHTML = `<h3>Materials</h3><p>${currentDescription.materials.join(", ")}</p>`;
            }

            const overlay = document.getElementById('layer');
            overlay.style.display = 'block';

            scroll();
        };
    });
}

function updateNavigationButtons(rowLength) {
    const prevButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    prevButton.disabled = currentIndex === 0;
    prevButton.style.backgroundColor = currentIndex === 0 ? 'gray' : '#1e1e1e';

    nextButton.disabled = currentIndex === rowLength - 1;
    nextButton.style.backgroundColor = currentIndex === rowLength - 1 ? 'gray' : '#1e1e1e';
}

function displayImages(imageSet, categoryName = 'All') {
    const row = imageSet[currentIndex];
    updateCards(row);
    updateNavigationButtons(imageSet.length);
    scroll();
    document.querySelector('.container .catName p').innerHTML = categoryName;
    updateDescriptions(row);
}

function updateDescriptions(row) {
    row.forEach((imageUrl, index) => {
        const descriptionIndex = currentIndex * row.length + index;
        const description = descriptions[descriptionIndex];

        if (description) {
            const card = cardElements[index];
            card.dataset.description = JSON.stringify(description);
        }
    });
}

function hideOverlay() {
    document.getElementById('layer').style.display = 'none';
}

function scroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayImages(allImages);

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

    const categoryDisplays = {
        ath: athleisureImages,
        minim: minimalismImages,
        maxim: maximalismImages,
        street: streetImages,
        cottage: cottagecoreImages,
        y2k: y2kImages,
        echo: echofashionImages,
        gendless: genderlessImages,
        vint: vintageImages,
        acad: darkacademiaImages,
        all: allImages
    };

    // Object.keys(categoryDisplays).forEach(id => {
    //     document.getElementById(id).addEventListener('click', () => {
    //         currentIndex = 0;
    //         displayImages(categoryDisplays[id], id === 'all' ? 'All' : id.toUpperCase());
    //         document.getElementById('over').style.display = 'none';
    //     });
    // });
    Object.keys(categoryDisplays).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            currentIndex = 0;
            
            if (currentIndex === 0) {
                cName.innerHTML = `<h3>Name:</h3><p>${currentDescription.name}</p>`;
                dex.innerHTML = `<h3>Description</h3><p>${currentDescription.description}</p>`;
                price.innerHTML = `<h3>Price:</h3><p>${currentDescription.price}</p>`;
                mat.innerHTML = `<h3>Materials</h3><p>${currentDescription.materials.join(", ")}</p>`;
            }
        });
    });
});

const df = document.getElementById('bars');
const ddsf = document.getElementById('over');

df.addEventListener('click', (e) => {
    ddsf.style.display = ddsf.style.display === 'none' || ddsf.style.display === '' ? 'block' : 'none';
});

document.getElementById('download-link').addEventListener('click', function () {
    const image = document.getElementById('image-to-download');
    const imageUrl = image.src;
    this.href = imageUrl;
});
