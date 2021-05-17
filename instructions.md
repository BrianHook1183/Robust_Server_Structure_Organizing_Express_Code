# Robust server structure: Organizing Express code assignment

## Instructions

Your task is to extend this API server, which stores "Notes" to enhance the error handling functionality.

It has the following existing route handlers:

* GET /notes returns an array of notes
* POST /notes creates a new notes
* GET /notes/:noteId returns a single note by id
error handler returns status code 500 by default, or the status property of the error

## Existing files
You will need to reorganize the folders and files located in src/.

Use the existing data files located in src/data for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.

## Tasks
You should organize the code to meet the following requirements:

1. Add the ability to update a note.
2. Add the ability to delete a note.
3. In src/notes/notes.controller.js, define the needed route handlers and middleware functions and export create, read, update, delete, and list for use by the router.
4. In src/notes/notes.router.js, define the router.
5. In src/app.js, attach the notes router using app.use("/notes", notesRouter) and have the error handler return a status code 500 by default, or the status property of the error.