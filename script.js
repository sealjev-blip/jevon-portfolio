// Welcome message

window.onload = function(){

    console.log("Welcome to Jevon's Portfolio Website!");

};



// Smooth scrolling effect

document.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', function(){

        console.log("Opening: " + this.href);

    });

});



// Current year update in footer

const year = new Date().getFullYear();

document.querySelectorAll("footer p").forEach(function(footer){

    footer.innerHTML = "© " + year + " Jevon Portfolio";

});




// =========================
// PROJECT DROPDOWN
// =========================

const projects = document.querySelectorAll(".project-title");


projects.forEach(project => {

    project.onclick = () => {

        project.parentElement.classList.toggle("active");

    };

});