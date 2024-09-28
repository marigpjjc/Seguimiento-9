function sendMessage(event, user) {
    event.preventDefault(); 

    const userInput = user === 'user1' ? document.getElementById('usermsg1') : document.getElementById('usermsg2');
    const messageText = userInput.value.trim();

    if (messageText === "") {
        alert("Por favor, ingresa un mensaje antes de enviar."); 
        return; 
    }

    const newMessage = document.createElement('div');
    newMessage.className = user === 'user1' ? 'user1-msg' : 'user2-msg'; 
    newMessage.textContent = messageText;

    const chatbox = document.getElementById('chatbox');
    chatbox.appendChild(newMessage);

    userInput.value = '';

    chatbox.scrollTop = chatbox.scrollHeight; 
}
