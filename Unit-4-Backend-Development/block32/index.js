const pg = require('pg');
const express = require('express');
const client = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/the_acme_notes_db'
);
const app = express();

app.use(express.json());

app.use(require('morgan')('dev'));

//create notes
app.post('/api/notes', async (req, res, next) => {
  try {
    const SQL = ``;
    const response = await client.query(SQL);
  } catch (er) {
    next(er);
  }
});

//read notes
app.get('/api/notes', async (req, res, next) => {
  try {
    const SQL = ``;
    const response = await client.query(SQL);
  } catch (er) {
    next(er);
  }
});

//update notes
app.put('/api/notes/:id', async (req, res, next) => {
  try {
    const SQL = ``;
    const response = await client.query(SQL);
  } catch (er) {
    next(er);
  }
});

//delete notes
app.delete('/api/notes/:id', async (req, res, next) => {
  try {
    const SQL = ``;
    const response = await client.query(SQL);
  } catch (er) {
    next(er);
  }
});

const init = async () => {
  await client.connect();
  console.log('connected to database');
  let SQL = `
    DROP TABLE IF EXISTS NOTES;
        CREATE TABLE notes(
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now(),
            ranking DEFAULT INTEGER 3 NOT NULL,
            txt VARCHAR(255) NOT NULL
        );
  `;
  await client.query(SQL);
  console.log('tables created');
  SQL = `
    INSERT INTO notes(txt, ranking) VALUES ('Tsunoda', 3);
    INSERT INTO notes(txt, ranking) VALUES ('Hamilton', 1);
    INSERT INTO notes(txt, ranking) VALUES ('Leclerc', 2);
  `;
  await client.query(SQL);
  console.log('data seeded');
  const port = process.env.PORT || 3000; //set port
  app.listen(port, () => console.log(`listening to port ${port}`)); //listen
};

init();
