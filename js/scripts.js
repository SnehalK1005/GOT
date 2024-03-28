/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



// Function to create HTML elements dynamically
function createFamilyCards() {
  const familyContainer = document.getElementById('familyContainer');
    console.log("Created")
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

// Call the function to create family cards when the page loads
window.onload = createFamilyCards;
