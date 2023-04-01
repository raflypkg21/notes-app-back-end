/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const { nanoid } = require("nanoid");

const notes = [];

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };
  notes.push(newNote);
};

module.exports = notes;
