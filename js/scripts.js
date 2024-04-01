let houses = window.location.href;

// Function to create HTML elements dynamically
let createFamilyCards = () => {
    const familyContainer = document.getElementById('familyContainer');
   
    familyData.forEach(member => {
        // Create card container
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('col-lg-3', 'mb-5', 'h-100', 'container1');

        // Create card
        const card = document.createElement('div');
        card.classList.add('mb-3', 'card1');

        // Create link
        const link = document.createElement('a');
        link.href = member.link;

        // Create image
        const image = document.createElement('img');
        image.src = member.imageUrl;
        image.alt = member.name;
        image.style.width = '100%';

        // Create heading
        const heading = document.createElement('h2');
        heading.classList.add('got-font');
        heading.textContent = member.name;

        // Append elements
        link.appendChild(image);
        card.appendChild(link);
        card.appendChild(heading);
        cardContainer.appendChild(card);
        familyContainer.appendChild(cardContainer);
    });
}

if (houses.includes("houses")) {
    window.onload = createFamilyCards;
}
