
const toggler = document.getElementById('toggler');
const navbar = document.querySelector('.navbar');

toggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

//Add to Cart Alert
const cartButtons = document.querySelectorAll('.cart-btn');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item has been added to your cart!');
    });
});








const form = document.querySelector('form');
const inputs = document.querySelectorAll('.box');

form.addEventListener('submit', (e) => {
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            alert(`${input.placeholder} cannot be empty`);
        }
    });

    if (!valid) {
        e.preventDefault(); // Stop form submission if validation fails
    } else {
        alert('Your message has been sent successfully!');
    }
});


const productImages = document.querySelectorAll('.products .image img');

productImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

function updateTime() {
    const currentTimeSpan = document.getElementById("currentTime");
    const now = new Date();

    
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    currentTimeSpan.textContent = formattedTime;
}


setInterval(updateTime, 1000);


updateTime();