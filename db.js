
import pg from 'pg';


const client = new pg.Client({
  user: 'vinicius',
  host: '193.123.100.46',
  database: 'ava_homologa',
  password: 'Vinicius@2023',
  port: 55432, 
});


export async function connect() {
    await client.connect();
}


export default client;
