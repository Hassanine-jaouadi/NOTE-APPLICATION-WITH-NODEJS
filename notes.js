const fs = require("fs");

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt")); // we parse the raw data (in a Buffer) to JSON object (text)
  } catch (err) {
    return [];
  }
};

var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter(note => note.title === title);

  if (double.length === 0) {
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes)); // JSON.stringify() to convert [object Object] to String
    logNote(note);
  } else {
    console.log("STOP: Title already exists.");
  }
};

var removeNote = title => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter(note => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
};

var readNote = title => {
  var notes = fetchNotes(); // get all notes in the file
  var filteredNotes = notes.filter(note => note.title === title);
  logNote(filteredNotes[0]);
};

var getAll = () => {
  var notes = fetchNotes();

  notes.forEach(note => {
    logNote(note);
  });
};

var helpNotes = () => {
  console.log(
    " list     prints all notes\n" +
      " add    --title 'note title' --body ' content '\n" +
      " read   --title 'title to read for the list'\n" +
      " remove --title 'title to remove'\n" +
      " help     prints all commands "
  );
};
var logNote = note => {
  console.log("***************");
  console.log`Title: ${note.title} `;
  console.log`Body: ${note.body} `;
};
module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll,
  helpNotes
};
// instead of  module.exports.add = function (x, y) { return x + y;};
