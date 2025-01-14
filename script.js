// Lista de frases motivadoras
  
  const quotes = [
    "El único límite para lograr tus sueños es tu voluntad de alcanzarlos.",
    "No importa cuántas veces fracases, lo importante es levantarte cada vez.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cada paso que das te acerca más a tu meta.",
    "No esperes el momento perfecto, haz que el momento sea perfecto.",
    "La vida es un 10% lo que te sucede y un 90% cómo reaccionas a ello.",
    "El futuro pertenece a quienes creen en la belleza de sus sueños.",
    "Nunca es tarde para ser lo que podrías haber sido.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "Si puedes soñarlo, puedes lograrlo.",
    "No se trata de lo que logras, sino de lo que te conviertes en el proceso.",
    "La única forma de predecir el futuro es crearlo.",
    "La acción es la clave fundamental para todo éxito.",
    "No te detengas hasta estar orgulloso.",
    "Las grandes cosas nunca vienen de la zona de confort.",
    "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.",
    "Lo único imposible es aquello que no intentas.",
    "Nunca subestimes el poder de un pensamiento positivo.",
    "El miedo no es real, es solo una elección.",
    "La perseverancia es la clave para transformar tus sueños en realidad.",
    "Hoy es el primer día del resto de tu vida.",
    "Cada paso hacia adelante es un paso más cerca del éxito.",
    "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "La clave del éxito es empezar antes de estar listo.",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
    "No pongas límites a tus sueños, ponles acción.",
    "No se trata de ser el mejor, se trata de ser mejor que ayer.",
    "Hazlo ahora, a veces ‘después’ se convierte en ‘nunca’.",
    "Los ganadores son aquellos que se levantan cada vez que caen.",
    "El mayor riesgo es no tomar ninguno.",
    "Lo que pienses de ti mismo es mucho más importante que lo que piensen los demás de ti.",
    "No dejes que el ruido de las opiniones ajenas ahogue tu propia voz interior.",
    "No sueñes tu vida, vive tu sueño.",
    "Si te caes siete veces, levántate ocho.",
    "Tu mayor recurso es tu actitud positiva.",
    "El verdadero fracaso no está en caer, sino en negarse a levantarse.",
    "Hoy es el primer día del resto de tu vida.",
    "Cada paso hacia adelante es un paso más cerca del éxito.",
    "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
    "No pongas límites a tus sueños, ponles acción.",
    "No se trata de ser el mejor, se trata de ser mejor que ayer.",
    "Hazlo ahora, a veces ‘después’ se convierte en ‘nunca’.",
    "Los ganadores son aquellos que se levantan cada vez que caen.",
    "El mayor riesgo es no tomar ninguno.",
    "Lo que pienses de ti mismo es mucho más importante que lo que piensen los demás de ti.",
    "No dejes que el ruido de las opiniones ajenas ahogue tu propia voz interior.",
    "No sueñes tu vida, vive tu sueño.",
    "Si te caes siete veces, levántate ocho.",
    "Tu mayor recurso es tu actitud positiva.",
    "El verdadero fracaso no está en caer, sino en negarse a levantarse.",
    "Hoy es el primer día del resto de tu vida.",
    "Cada paso hacia adelante es un paso más cerca del éxito.",
    "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
    "No pongas límites a tus sueños, ponles acción.",
    "No se trata de ser el mejor, se trata de ser mejor que ayer.",
    "Hazlo ahora, a veces ‘después’ se convierte en ‘nunca’.",
    "Los ganadores son aquellos que se levantan cada vez que caen.",
    "El mayor riesgo es no tomar ninguno.",
    "Lo que pienses de ti mismo es mucho más importante que lo que piensen los demás de ti.",
    "No dejes que el ruido de las opiniones ajenas ahogue tu propia voz interior.",
    "No sueñes tu vida, vive tu sueño.",
    "Si te caes siete veces, levántate ocho.",
    "Tu mayor recurso es tu actitud positiva.",
    "El verdadero fracaso no está en caer, sino en negarse a levantarse.",
    "Hoy es el primer día del resto de tu vida.",
    "Cada paso hacia adelante es un paso más cerca del éxito.",
    "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
    "No pongas límites a tus sueños, ponles acción.",
    "No se trata de ser el mejor, se trata de ser mejor que ayer.",
    "Hazlo ahora, a veces ‘después’ se convierte en ‘nunca’.",
    "Los ganadores son aquellos que se levantan cada vez que caen.",
    "El mayor riesgo es no tomar ninguno.",
    "Lo que pienses de ti mismo es mucho más importante que lo que piensen los demás de ti.",
    "No dejes que el ruido de las opiniones ajenas ahogue tu propia voz interior.",
    "No sueñes tu vida, vive tu sueño.",
    "Si te caes siete veces, levántate ocho.",
    "Tu mayor recurso es tu actitud positiva.",
    "El verdadero fracaso no está en caer, sino en negarse a levantarse.",
    "Hoy es el primer día del resto de tu vida."
];

  
  // Referencias a los elementos del DOM
  const quoteText = document.getElementById("random-quote");
  const quoteBtn = document.getElementById("quote-btn");
  const notepad = document.getElementById("notepad");
  const saveNoteBtn = document.getElementById("save-note-btn");
  const savedMessage = document.getElementById("saved-message");
  const notesList = document.getElementById("notes-list");
  
  // Recuperar notas guardadas al cargar la página
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
  // Mostrar todas las notas guardadas
  function renderNotes() {
    notesList.innerHTML = ""; // Limpia la lista antes de volver a renderizar
    notes.forEach((note, index) => {
      const li = document.createElement("li");
      li.textContent = note;
  
      // Botón para borrar una nota específica
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Eliminar";
      deleteBtn.addEventListener("click", () => {
        deleteNote(index);
      });
  
      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    });
  }
  
  // Evento para mostrar una frase motivadora al azar
  quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });
  
  // Guardar una nueva nota
  saveNoteBtn.addEventListener("click", () => {
    const noteContent = notepad.value.trim();
    if (noteContent) {
      notes.push(noteContent); // Agrega la nueva nota al array
      localStorage.setItem("notes", JSON.stringify(notes)); // Guarda las notas en localStorage
      renderNotes(); // Vuelve a mostrar la lista de notas
      notepad.value = ""; // Limpia el textarea
      savedMessage.style.display = "block";
  
      // Ocultar el mensaje después de 2 segundos
      setTimeout(() => {
        savedMessage.style.display = "none";
      }, 2000);
    }
  });
  
  // Eliminar una nota
  function deleteNote(index) {
    notes.splice(index, 1); // Elimina la nota del array
    localStorage.setItem("notes", JSON.stringify(notes)); // Actualiza localStorage
    renderNotes(); // Vuelve a mostrar la lista de notas
  }
  
  // Inicializar las notas al cargar la página
  renderNotes();

 