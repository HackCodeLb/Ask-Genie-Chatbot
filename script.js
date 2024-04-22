// Event listener for form submission
document.getElementById('chat-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const inputField = document.getElementById('chat-input');
    const message = inputField.value.trim();
    if (message === '') return;

    // Display user message
    displayMessage(message, 'user');
    inputField.value = '';

    // Send message to API and display genie response
    const response = await sendMessageToAPI(message);
    displayMessage(response, 'genie');
});

// Function to send message to API and retrieve response
async function sendMessageToAPI(message) {
    try {
        const chatMessages = document.getElementById('chat-messages');

        // Display dynamic typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'genie');
        chatMessages.appendChild(typingIndicator);

        // Simulate dynamic typing indicator
        const ellipses = ['.', '..', '...'];
        let index = 0;
        const intervalId = setInterval(() => {
            typingIndicator.textContent = ellipses[index];
            index = (index + 1) % ellipses.length;
        }, 500);

        // Send message to API
        const response = await fetch('http://localhost:5000/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: message })
        });

        // Stop dynamic typing indicator and remove it
        clearInterval(intervalId);
        chatMessages.removeChild(typingIndicator);

        // Parse API response
        const data = await response.json();
        return data.response; // Adjust depending on your API response structure
    } catch (error) {
        console.error('Error:', error);
        return 'Failed to get a response. Please try again.';
    }
}

// Function to display messages in the chat window
function displayMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for voice input
document.getElementById('voice-button').addEventListener('click', function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const chatForm = document.getElementById('chat-form');
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start();

        recognition.onresult = function(event) {
            const voiceText = event.results[0][0].transcript;
            const chatInput = document.getElementById('chat-input');
            chatInput.value = voiceText;
            recognition.stop();
            chatForm.dispatchEvent(new Event('submit')); // Trigger form submission
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
            displayMessage('Speech recognition error: ' + event.error, 'genie');
        };
    } else {
        console.log('Speech recognition not supported in this browser.');
        displayMessage('Speech recognition not supported.', 'genie');
    }
});
