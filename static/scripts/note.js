const noteTemplate = document.getElementsByClassName('note')[0]

function createNote(type, who, content) {
    let note = noteTemplate.cloneNode(true)
    let title = note.children[0]
    let text = note.children[1]

    if (type === 'alibi') {
        title.innerText = `ALIBI of ${who}`
        text.innerText = content;
    } else {
        title.innerText = `OBSERVATION of ${who}`
        text.innerText = content;
    }

    setFloating(note)
    note.classList.remove('hidden')

    attachElementToView(note, Views.BOARD)
}