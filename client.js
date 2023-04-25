const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/fakeusers");

const createNewUsers = async ({ username, password }) => {
  try {
    await client.query(
      `
            INSERT INTO users(username, password)
            VALUES ($1,$2)
            RETURNING *;
        `,
      [username, password]
    );
  } catch (error) {
    console.error(error);
  }
};

const fetchByUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT 
        FROM users
        WHERE name = $1;
    `,
      [username]
    );
    return user;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { client, createNewUsers, fetchByUsername };
