const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.find(note => note.title === title)

  if (!duplicateNotes) {
    notes.push({
      title,
      body
    })

    saveNotes(notes)

    console.log(chalk.bgGreen('Note added!'))
  } else {
    console.log(chalk.bgRed('Note title taken!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length === notesToKeep.length) {
    console.log(chalk.bgRed('No note found!'))
  } else {
    saveNotes(notesToKeep)

    console.log(chalk.bgGreen('Note removed!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.bgGreen('Your notes:'))

  notes.forEach(note => {
    console.log(note.title)
  });
}

const readNote = (title) => {
  const notes = loadNotes()
  const noteFound= notes.find(note => note.title === title)

  if (noteFound) {
    console.log(chalk.inverse(noteFound.title))
    console.log(noteFound.body)
  } else {
    console.log(chalk.bgRed('No note found'))
  }
}
  
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)

  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()

    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}