function sendMessage(event, user) {
    event.preventDefault(); 

    const userInput = user === 'user1' ? document.getElementById('usermsg1') : document.getElementById('usermsg2');
    const messageText = userInput.value.trim();

    if (messageText) {
        
        const newMessage = document.createElement('div');
        newMessage.className = user === 'user1' ? 'user1-msg' : 'user2-msg'; // Cambia según el usuario
        newMessage.textContent = messageText;

        const chatbox = document.getElementById('chatbox');
        chatbox.appendChild(newMessage);

        userInput.value = '';

        chatbox.scrollTop = chatbox.scrollHeight;
    }
}
