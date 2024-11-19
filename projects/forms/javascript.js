document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup");
    const success = document.getElementById("success");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            user: document.getElementById("user").value,
            password: document.getElementById("pass").value,
            email: document.getElementById("email").value,
            birth: document.getElementById("birth").value,
            gender: document.querySelector('input[name="gender"]:checked')?.value || "",
            region: document.getElementById("region").value,
            feedback: document.getElementById("feedback").value,
            agree: document.getElementById("check").checked
        };

        console.log("Form Data:", formData);

        try {
            const response = await fetch("response.json");
            const data = await response.json();
            success.textContent = data.message;
            form.reset();

        } catch (error) {
            console.error("Error during form submission:", error);
            success.textContent = "An error occurred. Please try again.";
        }
    });
});