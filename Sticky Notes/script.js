const newNote = document.querySelector('#newNote')
const container = document.querySelector('#container')
newNote.addEventListener('click', addNote)
let no = 0;
function addNote() {
  no++
  const noteBackgroundColors = ["#F08080", "#FFA07A", "#FFB6C1", "#FFFFE0", "#FAFAD2", "#90EE90", "#E0FFFF", "#87CEFA", "#ADD8E6", "#B0C4DE", "#778899", "#20B2AA", "#FF9999", "#FFDAB9", "#E6E6FA", "#F5F5DC", "#F5FFFA", "#C5CAE9", "#F3E5F5", "#FFB347"];
  
  const newColor = noteBackgroundColors[Math.floor(Math.random()* noteBackgroundColors.length)]
  const newElement = document.createElement('P')
  newElement.classList.add('notes')
  newElement.contentEditable = true
  newElement.innerHTML = no + '<i class="fa-solid fa-trash delete"></i>'
  container.appendChild(newElement)
  newElement.style.background = newColor;
  document.querySelector('.delete').
  console.log(newElement);
  
  
  

}

function deleteNote(e) {
    if (e.target.classList.contains('delete')) {
      console.log(e.target);
      e.target.parentElement.remove()
    } else {
      console.log(e.target.tagName);
    }
  }
container.addEventListener('click', deleteNote)

