function sendMessage() {
    let inputField = document.getElementById("userInput");
    let chatbox = document.getElementById("chatbox");

    let userText = inputField.value;
    let botReply = "மன்னிக்கவும், நான் இதற்கு பதில் சொல்ல முடியாது.";

    if (userText.includes("வேலை")) {
        botReply = "உங்களுக்கேற்ற வேலைகளை எளிதாக தேடலாம்!";
    } else if (userText.includes("சேர")) {
        botReply = "நீங்கள் புதிய வேலை சேர்க்கலாம்.";
    }

    let userDiv = document.createElement("div");
    userDiv.textContent = "👤 " + userText;
    chatbox.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.textContent = "🤖 " + botReply;
    chatbox.appendChild(botDiv);

    inputField.value = "";
}
