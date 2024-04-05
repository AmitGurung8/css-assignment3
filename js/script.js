let slideIndex = 0;

// Function to display slides in the slideshow
function showSlides() {
    let slides = document.getElementsByClassName("slideshow-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides(); // Start the slideshow

// Function to validate form inputs
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields."); // Alert if any field is empty
        return false; // Prevent form submission
    }

    return true; // Allow form submission if all fields are filled
}

// Attach form validation function to form submission event
document.getElementById("contact-form").onsubmit = validateForm;

// Event listener to handle image navigation
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        '../images/classic.png',
        '../images/peanutbutter.jpeg',
        '../images/eggs.webp',
        '../images/butter.webp'
    ];
    let currentImageIndex = 0;
    const pictureContainer = document.getElementById('picture-container');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    // Function to display the current image
    function displayImage() {
        pictureContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Snickers Picture ${currentImageIndex + 1}">`;
    }

    // Event listener for next button
    nextButton.addEventListener('click', function () {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++; // Move to the next image
        } else {
            currentImageIndex = 0; // Start from the first image if at the end
        }
        displayImage(); // Display the new image
    });
});

// Function to validate form inputs (repeated)
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields."); // Alert if any field is empty
        return false; // Prevent form submission
    }

    alert("Thank you for your feedback."); // Thank you message
    return true; // Allow form submission if all fields are filled
}
