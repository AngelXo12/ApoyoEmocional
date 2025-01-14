// Referencias a los elementos del DOM
const chatBox = document.getElementById("chat-box");
const userMessageInput = document.getElementById("user-message");
const sendMessageBtn = document.getElementById("send-message-btn");

// Respuestas generales y personalizadas
const positiveResponses = [
  "Entiendo cómo te sientes, pero recuerda que no estás solo/a.",
  "Eres una persona increíble, capaz de superar cualquier desafío.",
  "Es un mal momento, pero recuerda que los malos momentos no duran para siempre.",
  "Tu fortaleza interior es mayor de lo que imaginas.",
  "Estoy aquí para escucharte y apoyarte. ¡Ánimo!"
];

// Respuestas personalizadas basadas en palabras clave
const customResponses = {
    "triste": "Lamento que te sientas así. Recuerda que la tristeza es solo un momento, y siempre pasa.",
  "estresado": "El estrés puede ser abrumador, pero es importante recordar que tomarte un respiro puede ayudarte mucho.",
  "ansioso": "La ansiedad puede ser difícil, pero da un paso a la vez. Todo estará bien.",
  "solo": "No estás solo/a. Hay personas que se preocupan por ti, y siempre puedes contar conmigo.",
  "feliz": "¡Qué bien que te sientas feliz! Recuerda que tus momentos felices son tan importantes como los difíciles.",
  "cansado": "El cansancio es una señal de que necesitas descansar. ¡Cuídate mucho!",
  "hola": "¡Hola! ¿Cómo te sientes hoy? Estoy aquí para escucharte.",
  "gracias": "De nada, ¡estoy aquí para ayudarte siempre que lo necesites! 😊",
  "bien": "Me alegra saber que te sientes bien. ¡Sigue así! 💪",
  "mal": "Lo siento mucho, recuerda que siempre hay una luz al final del túnel. Todo pasará."
      
};

// Función para agregar un mensaje al chat
function addMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Desplazarse automáticamente hacia abajo
}

// Función para obtener respuesta personalizada o estándar
function getCustomResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  
  // Comprobar si el mensaje contiene alguna palabra clave y devolver la respuesta personalizada
  for (let keyword in customResponses) {
    if (lowerMessage.includes(keyword)) {
      return customResponses[keyword];
    }
  }

  // Si no se encuentra ninguna palabra clave, devolver una respuesta aleatoria
  return positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
}

// Función para enviar el mensaje
function sendMessage() {
  const userMessage = userMessageInput.value.trim();
  if (userMessage) {
    // Agregar el mensaje del usuario al chat
    addMessage(userMessage, "user");

    // Limpiar el input del usuario
    userMessageInput.value = "";

    // Obtener una respuesta personalizada o una aleatoria
    const botResponse = getCustomResponse(userMessage);

    // Responder después de un pequeño retraso
    setTimeout(() => {
      addMessage(botResponse, "bot");
    }, 1000); // Simular un pequeño retraso
  }
}

// Event listener para el botón "Enviar"
sendMessageBtn.addEventListener("click", sendMessage);

// Event listener para enviar al presionar "Enter"
userMessageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});

