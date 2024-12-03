document.getElementById("voteForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value,
        email: document.getElementById("email").value.trim(),
        favorite: document.getElementById("favorite").value,
    };

    if (!formData.name || !formData.age || !formData.email || !formData.favorite) {
        alert("Please fill in all required fields.");
        return;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Thank you, ${formData.name}! Your vote for ${formData.favorite} has been submitted.`;

    document.getElementById("voteForm").reset();
});