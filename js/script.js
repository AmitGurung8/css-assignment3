let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slideshow-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Call the showSlides function to start the slideshow

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}

document.getElementById("contact-form").onsubmit = validateForm; // Attach form validation function


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

    function displayImage() {
        console.log(currentImageIndex)
        pictureContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Snickers Picture ${currentImageIndex + 1}">`;
    }


    nextButton.addEventListener('click', function () {
        console.log('hi2')
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        displayImage();
    });
});

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Thank you for your feedback."); // Show alert after successful submission
    return true;
}
