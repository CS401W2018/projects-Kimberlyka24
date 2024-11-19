document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup");
    const success = document.getElementById("success");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const datas = {
            user: document.getElementById("user").value,
            password: document.getElementById("pass").value,
            email: document.getElementById("email").value,
            birth: document.getElementById("birth").value,
            gender: document.querySelector('input[name="gender"]:checked')?.value || "",
            region: document.getElementById("region").value,
            feedback: document.getElementById("feedback").value,
            agree: document.getElementById("check").checked
        };

        console.log("Form Data:", datas);

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

        try {
            const response = await fetch("response.json", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            success.textContent = data.message;
            form.reset();

        } catch (error) {
            console.error("Error during form submission:", error);
            success.textContent = "An error occurred. Please try again.";
        }
    });
});