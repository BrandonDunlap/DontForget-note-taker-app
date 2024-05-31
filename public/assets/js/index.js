let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

// Elements
if (window.location.pathname === '/notes') {
    noteTitle = document.querySelector('.note-title');
    noteText = document.querySelector('.note-textarea');
    saveNoteBtn = document.querySelector('.save-note');
    newNoteBtn = document.querySelector('.new-note');
    noteList = document.querySelectorAll('.list-container .list-group');
}

// Show or hide the save button
const handleRenderSaveBtn = () => {
    if (!noteTitle.value.trim() || !noteText.value.trim()) {
        saveNoteBtn.style.display = 'none';
    } else {
        saveNoteBtn.style.display = 'inline';
    }
};

// Get all notes from the db
const getNotes = () =>
    fetch('/api/notes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

// Save a new note to the db
const saveNote = (note) =>
    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });

// Render a note to the list
const renderNoteList = async (notes) => {
    let jsonNotes = await notes.json();
    if (window.location.pathname === '/notes') {
        noteList.forEach((el) => (el.innerHTML = ''));
    }

    let noteListItems = [];

    // Render the notes
    jsonNotes.forEach((note) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.dataset.note = JSON.stringify(note);

        const span = document.createElement('span');
        span.innerText = note.title;
        li.append(span);

        const delBtn = document.createElement('i');
        delBtn.classList.add(
            'fas',
            'fa-trash-alt',
            'float-right',
            'text-danger',
            'delete-note'
        );
        delBtn.dataset.id = note.id;
        li.append(delBtn);

        noteListItems.push(li);
    });

    if (window.location.pathname === '/notes') {
        noteListItems.forEach((note) => noteList[0].append(note));
    }
};

// Get and render notes
const getAndRenderNotes = () => getNotes().then(renderNoteList);

// Event listener for save button
if (window.location.pathname === '/notes') {
    saveNoteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const newNote = {
            title: noteTitle.value,
            text: noteText.value,
        };
        saveNote(newNote).then(() => {
            getAndRenderNotes();
            noteTitle.value = '';
            noteText.value = '';
            handleRenderSaveBtn();
        });
    });

    noteTitle.addEventListener('keyup', handleRenderSaveBtn);
    noteText.addEventListener('keyup', handleRenderSaveBtn);
}

// Initial load of notes
if (window.location.pathname === '/notes') {
    getAndRenderNotes();
}
