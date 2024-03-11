const pg = require('pg');
const express = require('express');
const app = express();

const client = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/acme_notes_categories_db'
);

app.get('/api/notes', async (req, res, nest) => {
  try {
    const SQL = `
        SELECT *
        FROM notes;
      `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  console.log('connecting to database');
  await client.connect();
  console.log('connected to database');
  let SQL = `
    DROP TABLE IF EXISTS notes;
    DROP TABLE IF EXISTS categories;
    CREATE TABLE categories(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
    );
    CREATE TABLE notes(
        id SERIAL PRIMARY KEY,
        txt VARCHAR (100) NOT NULL,
        ranking INTEGER NOT NULL DEFAULT 5,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        category_id INTEGER REFERENCES categories(id) NOT NULL
  );
  `;
  await client.query(SQL);
  console.log('tables created');
  SQL = `
        INSERT INTO categories(name) VALUES ('foo category');
        INSERT INTO categories(name) VALUES ('bar category');
        INSERT INTO categories(name) VALUES ('buzz category');
        INSERT INTO notes(txt,category_id) VALUES('foo note 1', (SELECT id FROM categories WHERE name='foo category'));
        INSERT INTO notes(txt,category_id) VALUES('foo note 2', (SELECT id FROM categories WHERE name='foo category'));
        INSERT INTO notes(txt,category_id) VALUES('bar note 1', (SELECT id FROM categories WHERE name='bar category'));
  `;
  await client.query(SQL);
  console.log('data seeded');
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
    console.log('curl command to test application');
    console.log(`curl localhost:${port}/api/notes`);
  });
};

init();
