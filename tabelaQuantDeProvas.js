
import pg from 'pg';


const client = new pg.Client({
  user: 'vinicius',
  host: '193.123.100.46',
  database: 'ava_homologa',
  password: 'Vinicius@2023',
  port: 55432, 
});


// Função para obter a quantidade de linhas na tabela
async function obterQuantidadeDeLinhas() {
  try {
    await client.connect(); // Conecta ao banco de dados

    // Query para obter a quantidade de linhas na tabela
    const result = await client.query('SELECT COUNT(*) AS quantidade_de_linhas FROM evaluation_applications');
    // Recupera o número de linhas do resultado da consulta
    const quantidadeDeLinhas = result.rows[0].quantidade_de_linhas;

    // Retorna o número de linhas
    return quantidadeDeLinhas;
  } catch (error) {
    console.error('Erro ao obter quantidade de linhas:', error);
  } finally {
    await client.end(); // Fecha a conexão com o banco de dados
  }
}

// Exemplo de uso
obterQuantidadeDeLinhas().then(quantidadeDeLinhas => {
  console.log('Quantidade de linhas:', quantidadeDeLinhas);
}).catch(error => {
  console.error('Erro:', error);
});

