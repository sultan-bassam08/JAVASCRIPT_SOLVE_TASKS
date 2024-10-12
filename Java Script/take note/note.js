const notesContainer = document.querySelector(".notes_container");
const createbtn = document.querySelector(".btn");

// Function to show notes from local storage
function showNote() {
  // Fetch notes from localStorage and append them correctly to the container
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
}

// Call the showNote function on page load
showNote();

// Function to update localStorage with current notes
function UpdateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for creating new notes
createbtn.addEventListener("click", () => {
  // Create a new note (p element) and an image for delete functionality
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input_box"; // Ensure the class name is consistent
  inputBox.setAttribute("contenteditable", "true");

  img.src = "./delete.png"; // Image source for delete

  // Append the img inside the inputBox, making sure it's inside the note
  inputBox.appendChild(img);

  // Add the new inputBox to the notes container
  notesContainer.appendChild(inputBox);

  // Add the keyup event to the newly created inputBox
  inputBox.addEventListener("keyup", () => {
    UpdateStorage();
  });

  // Immediately update the localStorage after adding a new note
  UpdateStorage();
});

// Event listener for removing notes when clicking on the delete icon
notesContainer.addEventListener("click", function (removenote) {
  if (removenote.target.tagName === "IMG") {
    // When an image (delete button) is clicked, remove the parent element (p)
    removenote.target.parentElement.remove();
    UpdateStorage(); // Update localStorage after a note is removed
  }
});
