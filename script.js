var random_margin = ["10px",];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var index = 0;

document.querySelector("#add_note").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});

document.querySelector("#hide").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});

document.querySelector("#user_input").addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    const text = document.querySelector("#user_input");
    createStickyNote(text.value);
  }
});


createStickyNote = (text) => {
  let note = document.createElement("div");
  let details = document.createElement("div");
  var noteText = document.createElement("h1");


  note.className = "note";
  details.className = "details";
  noteText.textContent = text;

  details.appendChild(noteText);
  note.appendChild(details);

  if(index > random_colors.length - 1)
    index = 0;

  note.setAttribute("style",`margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]};`);
  
  note.addEventListener("dblclick", () => {
    note.remove();
  });

  document.querySelector("#all_notes").appendChild(note);
}

