async function sendMessage() {
  const userInput = document.getElementById("text-input").value;
  const conversationDiv = document.getElementById("conversation");

  // Display user message
  conversationDiv.innerHTML += `<div>User: ${userInput}</div>`;

  // Send message to Watson Assistant
  const response = await fetch("YOUR_SERVER_ENDPOINT", {
    method: "POST",
    body: JSON.stringify({ text: userInput }),
  });

  const data = await response.json();

  // Display Watson Assistant's reply
  conversationDiv.innerHTML += `<div>Watson: ${data.output.generic[0].text}</div>`;
}
