import chalk from "chalk";
import pegarArquivo from "./index.js";
import valida_url from "./arquivos/http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegarArquivo(caminhoDoArquivo[2])
    
    if(caminho[3] === 'validar') {
        console.log(chalk.yellow('Links Validados: '), await valida_url(resultado))
    } else {
        console.log(chalk.yellow('Lista de Link: '), resultado)
    };
}

processaTexto(caminho)
