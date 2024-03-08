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
    const SQL = `
        INSERT INTO notes(txt)
        VALUES($1)
        RETURNING *
      `;
    const response = await client.query(SQL, [req.body.txt]);
    res.send(response.rows[0]);
  } catch (er) {
    next(er);
  }
});

//read notes
app.get('/api/notes', async (req, res, next) => {
  try {
    const SQL = `
        SELECT * from notes ORDER BY created_at DESC;
    `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (er) {
    next(er);
  }
});

//update notes
app.put('/api/notes/:id', async (req, res, next) => {
  try {
    const SQL = `
    UPDATE notes
      SET txt=$1, ranking=$2, updated_at= now()
      WHERE id=$3 RETURNING *
      `;
    const response = await client.query(SQL, [
      req.body.txt,
      req.body.ranking,
      req.params.id,
    ]);
    res.send(response.rows[0]);
  } catch (er) {
    next(er);
  }
});

//delete notes
app.delete('/api/notes/:id', async (req, res, next) => {
  try {
    const SQL = `
      DELETE from notes
      WHERE id = $1
    `;
    const response = await client.query(SQL, [req.params.id]);
    res.sendStatus(204);
  } catch (er) {
    next(er);
  }
});

// create and run the EXPRESS app
const init = async () => {
  await client.connect();
  console.log('connected to database');
  let SQL = `
    DROP TABLE IF EXISTS NOTES;
        CREATE TABLE notes(
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now(),
            ranking INTEGER DEFAULT 3 NOT NULL,
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
  const port = process.env.PORT || 3001; //set port
  app.listen(port, () => console.log(`listening to port ${port}`)); //listen
};

init();
