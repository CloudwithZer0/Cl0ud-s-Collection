function greetUser () {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good Morning Fam!";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon Fam!";
    } else {
        greetingMessage = "Good Evening Fam!";
    }

    greetingElement.textContent = greetingMessage;
}
greetUser ();

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active'); 
    });
});

