console.log("starting app.js");

const yargs = require("yargs"); // import 3rd party module
const notes = require("./notes.js"); // import a local module from "notes.js"
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("adding note");
  notes.addingNote(title, body);
}
if (command === "remove") {
  console.log("removing note");
  notes.removeNote(title);
} else if (command === "read") {
  console.log("reading note");
  notes.readNote(title);
} else if (command === "list") {
  console.log("listing all notes");
  notes.getAll();
} else if (command === "help") {
  notes.helpNotes();
} else {
  console.log("Unknown command was used!");
}
