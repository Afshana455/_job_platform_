document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:8080/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById("signupMessage").textContent = "பதிவு வெற்றிகரமாக முடிந்தது!";
            setTimeout(() => { window.location.href = "login.html"; }, 2000); // Redirect to login page
        } else {
            document.getElementById("signupMessage").textContent = data.message;
        }
    } catch (error) {
        document.getElementById("signupMessage").textContent = "சர்வர் சிக்கல். மீண்டும் முயற்சிக்கவும்!";
    }
});