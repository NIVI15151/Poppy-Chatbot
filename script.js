document.addEventListener('DOMContentLoaded', function () {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const openChatbotButton = document.getElementById('openChatbot');
    const closeChatbotButton = document.getElementById('closeChatbot');

    openChatbotButton.addEventListener('click', function () {
        chatbotContainer.style.display = 'block';
        openChatbotButton.style.display = 'none'; // Hide the button when chatbot is opened
    });

    closeChatbotButton.addEventListener('click', function () {
        chatbotContainer.style.display = 'none';
        openChatbotButton.style.display = 'block'; // Show the button when chatbot is closed
    });

    // Close the chatbot when clicking outside of it
    document.addEventListener('click', function (event) {
        if (event.target !== openChatbotButton && !chatbotContainer.contains(event.target)) {
            chatbotContainer.style.display = 'none';
            openChatbotButton.style.display = 'block'; // Show the button when chatbot is closed
        }
    });
});
