import chalk from "chalk";
import fs from "fs";

// Estamos Criando uma Biblioteca de teste de erros em um arquivo no texto



function extrailinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = []

    let temp;
    while((temp = regex.exec(texto)) != null) {
        arrayResultados.push({[temp[1]]: [temp[2]]})
    }
    return(arrayResultados.length === 0 ? "Não há links" : arrayResultados)
}

function tratarErro (erro){
    throw new Error(chalk.red(erro.code, "Caminho errado"));
}

async function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return(extrailinks(texto))
    } catch(erro){
    tratarErro(erro);
    }
}

export default pegarArquivo;
