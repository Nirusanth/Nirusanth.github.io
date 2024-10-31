document.getElementById("userForm").addEventListener("submit", function (e) {
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
    
    document.getElementById("output").textContent = "Form reset!";
}
