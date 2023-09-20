import pg from 'pg';
 
const Client=pg.Client
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "KuldeepSudha",
    database: "demo",
})


async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  }
}

async function disconnectFromDatabase() {
  try {
    await client.end();
    console.log('Disconnected from PostgreSQL');
  } catch (error) {
    console.error('Error disconnecting from PostgreSQL:', error);
  }
}

export { connectToDatabase, disconnectFromDatabase, client };

 