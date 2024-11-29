

// Increases or decreases profile picture when clicked
function imageSizeUp() {
    var img = document.getElementById("profPic");
    if (img.style.width === "300px") {
        img.style.width = "650px";  // Increases image size
    } else {
        img.style.width = "300px";  // Resets image to original size
    }
}

//Contact Form
document.getElementById("inquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formInfo = {
        Name: document.getElementById("Name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        inquiry: document.querySelector('input[name="inquiry"]:checked').value,
        statement: document.getElementById("statement").value
    };

    localStorage.setItem("userFormData", JSON.stringify(formInfo));
    document.getElementById("output").textContent = "Form submitted successfully!";
});

function formReset() {
    // clear localStorage 
    localStorage.removeItem("userFormData");
    
    document.getElementById("output").textContent = "Reset";
}
 
//Accessibility button
function increaseSize() {
    document.body.classList.toggle("access-txt");
    if (body.classList.contains("access-txt")) {
        body.classList.remove("access-txt"); 
    } else {
        body.classList.add("access-txt"); 
    }
}



