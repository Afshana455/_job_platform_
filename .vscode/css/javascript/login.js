document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:8080/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById("loginMessage").textContent = "உள்நுழைவு வெற்றி!";
            localStorage.setItem("username", data.name); // Store username
            setTimeout(() => { window.location.href = "index.html"; }, 2000); // Redirect to home page
        } else {
            document.getElementById("loginMessage").textContent = data.message;
        }
    } catch (error) {
        document.getElementById("loginMessage").textContent = "சர்வர் சிக்கல். மீண்டும் முயற்சிக்கவும்!";
    }
});
