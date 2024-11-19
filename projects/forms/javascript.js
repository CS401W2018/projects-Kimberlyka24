function handleFormSubmit(event) {

    event.preventDefault();

    const formData = {
        username: document.getElementById("user").value.trim(),
        password: document.getElementById("pass").value,
        confirmPassword: document.getElementById("pass2").value,
        email: document.getElementById("email").value.trim(),
        birthdate: document.getElementById("birth").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || "",
        region: document.getElementById("region").value,
        feedback: document.getElementById("feedback").value.trim(),
        agree: document.getElementById("check").checked
    };

    console.log("Form Data:", formData);

    if (!formData.username || !formData.password || !formData.email) {
        alert("Please fill in all required fields: Username, Password, and Email.");
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match. Please check and try again.");
        return;
    }

    if (formData.username.length < 5 || formData.username.length > 15) {
        alert("Username must be between 5 and 15 characters.");
        return;
    }

    const birthDate = new Date(formData.birthdate);
    const today = new Date();
    if (birthDate >= today) {
        alert("Birthdate must be a date in the past.");
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            const successMessageDiv = document.getElementById("success");
            successMessageDiv.textContent = response.message;

            
            document.querySelector("form").reset();
        }
    };

    const queryString = new URLSearchParams(formData).toString();
    xhr.send(queryString);
}