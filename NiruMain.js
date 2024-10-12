// Gets user's name and displays it
function newUsername() {
    let userId = prompt("What is your name?");
    if (userId) {
        document.getElementById('welcomeMessage').innerHTML = " Welcome " + userId + "!";
    }
}

// Increases or decreases profile picture when clicked
function imageSizeUp() {
    var img = document.getElementById("profPic");
    if (img.style.width === "300px") {
        img.style.width = "650px";  // Increases image size
    } else {
        img.style.width = "300px";  // Resets image to original size
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */ 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
    

    // Close the dropdown menu if the user clicks outside of it 
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
    }
    }
    }



 //repeat of top code for second dropdown menu   
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    }
    
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
    }
    }
    }

//repeat of top code for third dropdown menu
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    }
    
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
    }
    }
    }



