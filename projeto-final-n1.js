const transacoes = [

  {"orgao":"Polícia Civil","data":"01/01/2024","valor":5500.00,"status":"sucesso"},
  {"orgao":"Polícia Rodoviária Federal","data":"02/01/2024","valor":6000.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Polícia Militar","data":"03/01/2024","valor":4500.00,"status":"sucesso"},
  {"orgao":"Corpo de Bombeiros","data":"04/01/2024","valor":7000.00,"status":"sucesso"},
  {"orgao":"Guarda Municipal","data":"05/01/2024","valor":3500.00,"status":"falha","motivo":"Documentação incompleta"},
  {"orgao":"Receita Federal","data":"06/01/2024","valor":8000.00,"status":"sucesso"},
  {"orgao":"Ministério Público","data":"07/01/2024","valor":9000.00,"status":"falha","motivo":"Erro no sistema"},
  {"orgao":"Defesa Civil","data":"08/01/2024","valor":4000.00,"status":"sucesso"},
  {"orgao":"Detran","data":"09/01/2024","valor":5000.00,"status":"sucesso"},
  {"orgao":"Polícia Federal","data":"10/01/2024","valor":6500.00,"status":"falha","motivo":"Falta de recursos"},
  {"orgao":"Ibama","data":"11/01/2024","valor":5500.00,"status":"sucesso"},
  {"orgao":"Anvisa","data":"12/01/2024","valor":6000.00,"status":"sucesso"},
  {"orgao":"Inmetro","data":"13/01/2024","valor":3000.00,"status":"falha","motivo":"Dados incorretos"},
  {"orgao":"Cetesb","data":"14/01/2024","valor":7000.00,"status":"sucesso"},
  {"orgao":"Susep","data":"15/01/2024","valor":8000.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Polícia Civil","data":"16/01/2024","valor":5200.00,"status":"sucesso"},
  {"orgao":"Polícia Rodoviária Federal","data":"17/01/2024","valor":6100.00,"status":"falha","motivo":"Erro humano"},
  {"orgao":"Polícia Militar","data":"18/01/2024","valor":4600.00,"status":"sucesso"},
  {"orgao":"Corpo de Bombeiros","data":"19/01/2024","valor":7100.00,"status":"sucesso"}, 
  {"orgao":"Guarda Municipal","data":"20/01/2024","valor":3600.00,"status":"falha","motivo":"Sistema fora do ar"},
  {"orgao":"Receita Federal","data":"21/01/2024","valor":8100.00,"status":"sucesso"},
  {"orgao":"Ministério Público","data":"22/01/2024","valor":9100.00,"status":"falha","motivo":"Recursos insuficientes"},
  {"orgao":"Defesa Civil","data":"23/01/2024","valor":4100.00,"status":"sucesso"},
  {"orgao":"Detran","data":"24/01/2024","valor":5100.00,"status":"sucesso"},
  {"orgao":"Polícia Federal","data":"25/01/2024","valor":6600.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Ibama","data":"26/01/2024","valor":5600.00,"status":"sucesso"},
  {"orgao":"Anvisa","data":"27/01/2024","valor":6100.00,"status":"sucesso"},
  {"orgao":"Inmetro","data":"28/01/2024","valor":3100.00,"status":"falha","motivo":"Dados incorretos"},
  {"orgao":"Cetesb","data":"29/01/2024","valor":7100.00,"status":"sucesso"},
  {"orgao":"Susep","data":"30/01/2024","valor":8100.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Polícia Civil","data":"31/01/2024","valor":5300.00,"status":"sucesso"},
  {"orgao":"Polícia Rodoviária Federal","data":"01/01/2024","valor":6200.00,"status":"falha","motivo":"Erro humano"},
  {"orgao":"Polícia Militar","data":"02/01/2024","valor":4700.00,"status":"sucesso"},
  {"orgao":"Corpo de Bombeiros","data":"03/01/2024","valor":7200.00,"status":"sucesso"},
  {"orgao":"Guarda Municipal","data":"04/01/2024","valor":3700.00,"status":"falha","motivo":"Sistema fora do ar"},
  {"orgao":"Receita Federal","data":"05/01/2024","valor":8200.00,"status":"sucesso"},
  {"orgao":"Ministério Público","data":"06/01/2024","valor":9200.00,"status":"falha","motivo":"Recursos insuficientes"},
  {"orgao":"Defesa Civil","data":"07/01/2024","valor":4200.00,"status":"sucesso"},
  {"orgao":"Detran","data":"08/01/2024","valor":5200.00,"status":"sucesso"},
  {"orgao":"Polícia Federal","data":"09/01/2024","valor":6700.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Ibama","data":"10/01/2024","valor":5700.00,"status":"sucesso"},
  {"orgao":"Anvisa","data":"11/01/2024","valor":6200.00,"status":"sucesso"},
  {"orgao":"Inmetro","data":"12/01/2024","valor":3200.00,"status":"falha","motivo":"Dados incorretos"},
  {"orgao":"Cetesb","data":"13/01/2024","valor":7200.00,"status":"sucesso"},
  {"orgao":"Susep","data":"14/01/2024","valor":8200.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Polícia Civil","data":"15/01/2024","valor":5400.00,"status":"sucesso"},
  {"orgao":"Polícia Rodoviária Federal","data":"16/01/2024","valor":6300.00,"status":"falha","motivo":"Erro humano"},
  {"orgao":"Polícia Militar","data":"17/01/2024","valor":4800.00,"status":"sucesso"},
  {"orgao":"Corpo de Bombeiros","data":"18/01/2024","valor":7300.00,"status":"sucesso"},
  {"orgao":"Guarda Municipal","data":"19/01/2024","valor":3800.00,"status":"falha","motivo":"Sistema fora do ar"},
  {"orgao":"Receita Federal","data":"20/01/2024","valor":8300.00,"status":"sucesso"},
  {"orgao":"Ministério Público","data":"21/01/2024","valor":9300.00,"status":"falha","motivo":"Recursos insuficientes"},
  {"orgao":"Defesa Civil","data":"22/01/2024","valor":4300.00,"status":"sucesso"},
  {"orgao":"Detran","data":"23/01/2024","valor":5300.00,"status":"sucesso"},
  {"orgao":"Polícia Federal","data":"24/01/2024","valor":6800.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Ibama","data":"25/01/2024","valor":5800.00,"status":"sucesso"},
  {"orgao":"Anvisa","data":"26/01/2024","valor":6300.00,"status":"sucesso"},
  {"orgao":"Inmetro","data":"27/01/2024","valor":3300.00,"status":"falha","motivo":"Dados incorretos"},
  {"orgao":"Cetesb","data":"28/01/2024","valor":7300.00,"status":"sucesso"},
  {"orgao":"Susep","data":"29/01/2024","valor":8300.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Polícia Civil","data":"30/01/2024","valor":5500.00,"status":"sucesso"},
  {"orgao":"Polícia Rodoviária Federal","data":"31/01/2024","valor":6400.00,"status":"falha","motivo":"Erro humano"},
  {"orgao":"Polícia Militar","data":"01/01/2024","valor":4900.00,"status":"sucesso"},
  {"orgao":"Corpo de Bombeiros","data":"02/01/2024","valor":7400.00,"status":"sucesso"},
  {"orgao":"Guarda Municipal","data":"03/01/2024","valor":3900.00,"status":"falha","motivo":"Sistema fora do ar"},
  {"orgao":"Receita Federal","data":"04/01/2024","valor":8400.00,"status":"sucesso"},
  {"orgao":"Ministério Público","data":"05/01/2024","valor":9400.00,"status":"falha","motivo":"Recursos insuficientes"},
  {"orgao":"Defesa Civil","data":"06/01/2024","valor":4400.00,"status":"sucesso"},
  {"orgao":"Detran","data":"07/01/2024","valor":5400.00,"status":"sucesso"},
  {"orgao":"Polícia Federal","data":"08/01/2024","valor":6900.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Ibama","data":"09/01/2024","valor":5900.00,"status":"sucesso"},
  {"orgao":"Anvisa","data":"10/01/2024","valor":6400.00,"status":"sucesso"},
  {"orgao":"Inmetro","data":"11/01/2024","valor":3400.00,"status":"falha","motivo":"Dados incorretos"},
  {"orgao":"Cetesb","data":"12/01/2024","valor":7400.00,"status":"sucesso"},
  {"orgao":"Susep","data":"13/01/2024","valor":8400.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Polícia Civil","data":"14/01/2024","valor":5600.00,"status":"sucesso"},
  {"orgao":"Polícia Rodoviária Federal","data":"15/01/2024","valor":6500.00,"status":"falha","motivo":"Erro humano"},
  {"orgao":"Polícia Militar","data":"16/01/2024","valor":5000.00,"status":"sucesso"},
  {"orgao":"Corpo de Bombeiros","data":"17/01/2024","valor":7500.00,"status":"sucesso"},
  {"orgao":"Guarda Municipal","data":"18/01/2024","valor":4000.00,"status":"falha","motivo":"Sistema fora do ar"},
  {"orgao":"Receita Federal","data":"19/01/2024","valor":8500.00,"status":"sucesso"},
  {"orgao":"Ministério Público","data":"20/01/2024","valor":9500.00,"status":"falha","motivo":"Recursos insuficientes"},
  {"orgao":"Defesa Civil","data":"21/01/2024","valor":4500.00,"status":"sucesso"},
  {"orgao":"Detran","data":"22/01/2024","valor":5500.00,"status":"sucesso"},
  {"orgao":"Polícia Federal","data":"23/01/2024","valor":7000.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Ibama","data":"24/01/2024","valor":6000.00,"status":"sucesso"},
  {"orgao":"Anvisa","data":"25/01/2024","valor":6500.00,"status":"sucesso"},
  {"orgao":"Inmetro","data":"26/01/2024","valor":3500.00,"status":"falha","motivo":"Dados incorretos"},
  {"orgao":"Cetesb","data":"27/01/2024","valor":7500.00,"status":"sucesso"},
  {"orgao":"Susep","data":"28/01/2024","valor":8500.00,"status":"falha","motivo":"Problemas técnicos"},
  {"orgao":"Polícia Civil","data":"29/01/2024","valor":5700.00,"status":"sucesso"},
  {"orgao":"Polícia Rodoviária Federal","data":"30/01/2024","valor":6600.00,"status":"falha","motivo":"Erro humano"},
  {"orgao":"Polícia Militar","data":"31/01/2024","valor":5100.00,"status":"sucesso"}
  
]
  //Número total de transações 
  console.log("RELATÓRIO DE REPASSES GERAL")
  console.log()    //Linha vazia;
  const totalDeTransacoes = transacoes.length;
  console.log(`O valor número total de repasses é:${totalDeTransacoes}`)


  // Calcular as transações bem sucedidas
  function calcularSucessos(transacoes) {
  const sucesso = transacoes.filter(t => t.status === "sucesso");              //Filtro de transações bem sucedidas

  const totalValor = sucesso.reduce((soma, t) => soma + t.valor, 0);           // Somar valores de cada uma das transações bem sucedidas

  return {
    quantidade: sucesso.length,         //somar a quantidade de transações bem sucedidas
    valorTotal: totalValor              // calcular a soma total das transações bem sucedidas
  };
}

// Executar função para calcular as transações e imprimir quantidade e os valores
const resultado = calcularSucessos(transacoes);

console.log(`Quantidade de Repasses Bem Sucedidos: ${resultado.quantidade}`);
console.log(`Soma total das transações bem sucedidas: R$ ${resultado.valorTotal.toFixed(2)}`);               //Imprimir truncando para 2 casas decimais após a vírgula

function transacoesPorOrgao (transacoes) {
  
  const resultadosucesso = {};
  const resultadofalha = {};

  transacoes.forEach(t=> { 
  if(t.status === "sucesso"){

    if(!resultadosucesso[t.orgao]) {
      resultadosucesso[t.orgao] = {
        quantidadepororgao:0,
        ValorTotalSu:0
      };
    }

    resultadosucesso[t.orgao].quantidadepororgao++; 
    resultadosucesso[t.orgao].ValorTotalSu += t.valor;
  }
  
else if (t.status === "falha"){

  if(!resultadofalha[t.orgao]) {
    resultadofalha[t.orgao] = {
      quantidadefpororgao:0,
      ValorTotalFalhaPorOrgao:0,
      motivos: []
    };
  }

    resultadofalha[t.orgao].quantidadefpororgao++; 
    resultadofalha[t.orgao].ValorTotalFalhaPorOrgao += t.valor;

  if (t.motivo) {
  resultadofalha[t.orgao].motivos.push(t.motivo);
    } 
  }
}); 

// Retornar apenas os resultados da função 

  return {
     resultadosucesso, 
     resultadofalha
  };
}
//Calcular as transações e Imprime os resultados de transações bem sucedidadas enquanto calcula em paralelo

const resultadorelatorio = transacoesPorOrgao(transacoes); 

console.log("Transações bem-sucedidas por Órgão:");
console.log(resultadorelatorio.resultadosucesso);

console.log("Transações falhas por Órgão:");
console.log(resultadorelatorio.resultadofalha);

// Calcular as transações com falhas

function calcularfalhas(transacoes) {
  const falha = transacoes.filter(t => t.status === "falha"); 
  
  const ValorTotalf = falha.reduce((soma, t) => soma + t.valor, 0);

  return {
    quantidadef: falha.length,
    ValorTotalfalha: ValorTotalf
  }
}
 
//Executar função  para calcular e imprimir os resultados que deram falha

const resultadofalha = calcularfalhas(transacoes); 

console.log(`O número de repasses que deram falha foi de: ${resultadofalha.quantidadef}`); 
console.log(`O valor total dos repasses que deram falha foi de ${resultadofalha.ValorTotalfalha.toFixed(2)}`)


// Agrupar as falhas por motivos

function falhasPorMotivo(transacoes) {
  const resultadodefalhas = {};           //criar a constante, vetor com as respostas

  transacoes.forEach (t=> {               //percorrendo os objetos para t receber
    if (t.status === "falha") {           //a condição para o meu novo vetor das informações de falha, quantidade e valor
      const motivo = t.motivo || "Motivo não informado";         //criando a constante motivo
      if(!resultadodefalhas[motivo]) {                    
        resultadodefalhas[motivo] = {
        motivo: motivo,                                          
        QuantidadeTotalPorMotivo: 0,
        valorTotalmotivo: 0
      }
      }
      
      resultadodefalhas[motivo].QuantidadeTotalPorMotivo++;
      resultadodefalhas[motivo].valorTotalmotivo += t.valor; 

    }
  });
  return Object.values(resultadodefalhas)                        

}

const vetorFalhas = falhasPorMotivo(transacoes);          //Armazenando após o loop 

console.log();              //Linha em Branco
console.log("Falhas agrupadas por Motivo:")              //Imprimindo no console as informacões
console.log(vetorFalhas)
  
// Calculando as estatísticas 

//Mostrando o repasse de maior valor
const maiorvalordorepasse = transacoes.reduce ((acumulador, valorAtual) => {                      //Usando reduce para reduzir o array a partir do maior valor do repasse
  return (acumulador.valor > valorAtual.valor) 
  ?acumulador: 
  valorAtual;
});
console.log("O repasse de maior valor foi :")
console.log(maiorvalordorepasse);

//Mostrando o repasse de menor valor
const menorvalordorepasse = transacoes.reduce ((acumulador1, valorAtual) => {                    //Usando reduce para reduzir o array a partir do menor valor do repasse
  return (acumulador1.valor < valorAtual.valor) 
  ?acumulador1: 
  valorAtual;
});
console.log("O repasse de menor valor foi :")
console.log(menorvalordorepasse);

// Dia com mais operações 
const diaComMaisOperacoes = {};

transacoes.forEach(transacao => {                        //Percorrer todo array para somar comparar as datas que tiveram mais transações
  const data = transacao.data;
  if (diaComMaisOperacoes[data]){
      diaComMaisOperacoes[data]++;
  }else {
      diaComMaisOperacoes[data] = 1;
  }
}); 

console.log("O dia com mais repasses foi: ")
console.log(diaComMaisOperacoes)

// Orgão com mais repasses 
function encontrarOrgaoComMaisRepasses(transacoes) {
   const contar ={};                 //Criar a nova constante que vai contar e armazenar as informações dos órgãos com mais repasses

   transacoes.forEach(t=> {          //Percorrer e agrupar cada objeto, criando caso não exista
    if (!contar[t.orgao]) {
      contar[t.orgao]={
        orgao:t.orgao,
        quantidade:0,
        valorTotalRepasses:0
      }
    }
    contar[t.orgao].quantidade++;                       //Soma a quantidade de repasses 
    contar[t.orgao].valorTotalRepasses += t.valor;      //Interessante emitir o total dos repasses
     
   });
  
   let orgaoMrepasse = {quantidade: 0};
  
   for (const orgao in contar) {                      //loop para comparar as quantidades da propriedade
    if (contar[orgao].quantidade > orgaoMrepasse.quantidade) {
      orgaoMrepasse = contar[orgao];
    }
   }

   const resultadomaisrepasses = Object.values(contar)        //Transformando contar em uma constante de array que irá conter
   .filter(o => o.quantidade === orgaoMrepasse.quantidade)    //Filtra todos os objetos que têm a mesma quantidade sendo a maior quantidade encontrada de repasses
   .map(o => ({                                               //Organiza pra aparecer essas informações
    nomedoOrgao: o.orgao,
    quantidadeTotaldeRepasses: o.quantidade,
    valorTotaldosRepasses: o.valorTotalRepasses
   })); 

  return resultadomaisrepasses;

}

const resultadoorgaomais = encontrarOrgaoComMaisRepasses(transacoes);
console.log("O Órgão que mais fez repasses foi: ")
console.log(resultadoorgaomais);

//Órgão com mais repasses bem Sucedidos
function OrgaoComMaisRepassesbemsucedidos(transacoes) {
   const contarbem ={};                 //Criar a nova constante que vai contar e armazenar as informações dos órgãos com mais repasses

   transacoes.forEach(t=> {          //Percorrer e agrupar cada objeto, criando caso não exista
    if (t.status === "sucesso") {   //Criar a condição para sucesso
    if (!contarbem[t.orgao]) {     //Criar a condição para cada variável    
      contarbem[t.orgao]={
        orgao:t.orgao,
        quantidade:0,
        valorTotalRepasses:0
      }
    }
  
    contarbem[t.orgao].quantidade++;                       //Soma a quantidade de repasses 
    contarbem[t.orgao].valorTotalRepasses += t.valor;      //Interessante emitir o total dos repasses
    
   }
  });
  
   let orgaoMrepasse = {quantidade: 0};                   //Definir a constante que vai contar a quantidade dos repasses
  
   for (const orgao in contarbem) {                      //loop para comparar as quantidades da propriedade
    if (contarbem[orgao].quantidade > orgaoMrepasse.quantidade) {
      orgaoMrepasse = contarbem[orgao];
    }
   }

   const resultadobem = Object.values(contarbem)        //Transformando a constante no array que irá receber o elemento/elementos de maior quantidade de repassses bem sucedidos
   .filter(o => o.quantidade === orgaoMrepasse.quantidade)    //Filtra todos os objetos que têm a mesma quantidade
   .map(o => ({                                               //Organiza pra aparecer essas informações
    nomedoOrgao: o.orgao,
    quantidadeTotaldeRepasses: o.quantidade,
    valorTotaldosRepasses: o.valorTotalRepasses
   })); 

  
  return resultadobem;
}


const resultadoorgaobem= OrgaoComMaisRepassesbemsucedidos(transacoes);
console.log("O Órgão que mais fez mais repasses bem sucedidos foi: ")
console.log(resultadoorgaobem);

//Orgao que fez mais repasses com falha
function OrgaoComMaisRepassescomfalha(transacoes) {
   const contarfalha ={};                 //Criar a nova constante que vai contar e armazenar as informações dos órgãos com mais repasses com falha

   transacoes.forEach(t=> {          //Percorrer e agrupar cada objeto, criando caso não exista
    if (t.status === "falha") {      //Criar a condição para a falha
    if (!contarfalha[t.orgao]) {     //Definir condição para os novos elementos do array contarfalha
      contarfalha[t.orgao]={
        orgao:t.orgao,
        quantidade:0,
        valorTotalRepasses:0
      }
    }
  
    contarfalha[t.orgao].quantidade++;                       //Soma a quantidade de repasses 
    contarfalha[t.orgao].valorTotalRepasses += t.valor;      //Interessante emitir o total dos repasses
  }
   });
  
   let orgaoMrepasse = {quantidade: 0};
  
   for (const orgao in contarfalha) {                      //loop para comparar as quantidades da propriedade
    if (contarfalha[orgao].quantidade > orgaoMrepasse.quantidade) {
      orgaoMrepasse = contarfalha[orgao];
    }
   }

   const resultadofalha = Object.values(contarfalha)        //Transformando contarfalha em array
   .filter(o => o.quantidade === orgaoMrepasse.quantidade)    //Filtra todos os objetos que têm a mesma quantidade
   .map(o => ({                                               //Organiza para o novo objeto do array mude para conter essas informações
    nomedoOrgao: o.orgao,
    quantidadeTotaldeRepasses: o.quantidade,
    valorTotaldosRepasses: o.valorTotalRepasses
   })); 

  
  return resultadofalha;
}


const resultadocomfalha = OrgaoComMaisRepassescomfalha(transacoes);
console.log("O Órgão que mais fez mais repasses com falha foi: ")
console.log(resultadocomfalha);

//Motivo de falhas com mais repasses

function MotivocomMaisrepasse(transacoes) {
   const contarmotivo ={};                 //Criar a nova constante que vai contar e armazenar as informações do motivo com mais falha

   transacoes.forEach(t=> {          //Percorrer e agrupar cada objeto, criando caso não exista
    if (t.status === "falha") {
      const motivo = t.motivo || "Motivo não informado"        //Se motivo não existi, cria a entrada
    if (!contarmotivo[t.motivo]) {
      contarmotivo[t.motivo]={
        motivo:motivo,
        quantidade:0,
        valorTotalRepasses:0
      }
    }
  
    contarmotivo[t.motivo].quantidade++;                       //Soma a quantidade de repasses 
    contarmotivo[t.motivo].valorTotalRepasses += t.valor;      //Interessante emitir o total dos repasses
  }
   });
  
   let motivoMrepasse = {quantidade: 0};
  
   for (const motivo in contarmotivo) {                      //loop para comparar as quantidades da propriedade
    if (contarmotivo[motivo].quantidade > motivoMrepasse.quantidade) {           
      motivoMrepasse= contarmotivo[motivo];                  //Armazenar a resposta com maior quantidade

   }

   const resultadomotivo = Object.values(contarmotivo)        //Transformando contar em array
   .filter(o => o.quantidade === motivoMrepasse.quantidade)    //Filtra todos os objetos que têm a mesma quantidade
   .map(o => ({                                                //Organiza para o novo objeto do array mude para conter essas informações
    motivo: o.motivo,                                           
    quantidadeTotaldeRepasses: o.quantidade,
    valorTotaldosRepasses: o.valorTotalRepasses
   })); 

  
  return resultadomotivo;
  }
} 

const resultadocommotivo= MotivocomMaisrepasse(transacoes);
console.log("Motivo que teve mais repasses com falha foi: ")
console.log(resultadocommotivo); 

/**  Escolher um Órgão e aparecer as informações dos repasses

function filtrarOrgao(transacoes, orgao) {
  return transacoes.filter(objeto=> objeto.orgao === orgao);
}

const objetoEscolhidopeloUsuario = 'Polícia Federal'; 

const orgaoEscolhido = filtrarOrgao(transacoes, objetoEscolhidopeloUsuario);
console.log("As informações processadas para o Órgão escolhido foram");
console.log(orgaoEscolhido);

*/

//Escolher o filtro pelo prompt e imprimir os resultados

/** 
import readline from "readline";            //readline para ler o prompt

const rl = readline.createInterface({     //Criar interação com o prompt
  input:process.stdin,
  output:process.stdout
})


// Função que filtra o Órgão, mas trava o prompt até a resposta completa do usuário
function filtrarOrgao(transacoes, orgao) {
  return transacoes.filter(objeto=> objeto.orgao === orgao)
}

rl.question("Digite o órgão para filtrar", function (OrgaoEscolhido) {
    
  if(!OrgaoEscolhido) {
    console.log("x Operação cancelada ou órgão não informado");
    rl.close();
    return;
  }
 //O usuário vai escolher no prompt (no vscode tem de ser no terminal)

const OrgaoFiltrado = filtrarOrgao(transacoes, OrgaoEscolhido);

//Criar condição para que execute a função e caso contrário emita um erro caso o órgão digitado não exista

    if(OrgaoFiltrado.length>0) {
      console.log(`v Sucesso! Encontrados as transações do '${OrgaoEscolhido}':`)
      console.log(OrgaoFiltrado); 
  } else {
  console.log(`Aviso! Nenhum objeto possui essa propriedade '${OrgaoEscolhido}':`)
  console.log("Verifique se o Órgão foi digitado corretamente, há distinção entre maiúsculas e minúsculas")
  } 

  rl.close();
});
*/
import readline from "readline" 

const TEMPO_LIMITE = 20000;     //Configurando um tempo limite de 20s para esperar que o usuário digite o Órgão

//Criar interface para leitura através do prompt

function perguntar(texto) {
  return new Promise((resolve) =>{                 //Implementar a promise para seguir com o código e relatório até o usuário responder e não travar o código por falta de resposta
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let responded = false; 

  //Configurar um timer para cancelar a pergunta caso o usuário leve mais de 20s para responder
  const timer = setTimeout(() => {
    if (!responded) { 
      console.log("\n! Tempo limite atingido! Operação Cancelada\n") 
      rl.close();
      resolve(null);                       //Se o tempo foi excedido, a promise será cancelada, resolvida como null
    }
  }, TEMPO_LIMITE);

    rl.question(texto, resposta => {                        //A questão recebeu uma resposta verdadeira, vai retornar a promise
      responded = true;
      clearTimeout(timer);
      rl.close();
      resolve(resposta.trim());
    });
  });
}

//Função para filtrar o órgão escolhido 
function filtrarOrgao(transacoes, orgao){                                //Função para Filtrar o Órgão 
  return transacoes.filter(t => t.orgao ===orgao);
}
 
// Função Principal Assíncrona 
 async function iniciarFiltro(transacoes) {                           //Função Assíncrona
   console.log("\n==========================================");
  console.log("      🔍 FILTRO DE TRANSAÇÕES POR ÓRGÃO");
  console.log("==========================================\n")

  const orgaoDigitado = await perguntar("Digite o órgão para obter informações:");          //Esperar a resposta para poder seguir com o fluxo

  console.log();                                                    //Linha em branco

  if(!orgaoDigitado) {
    console.log("x Operação Cancelada ou Órgão não informado");
    return;
  }

  const selecionado = filtrarOrgao(transacoes, orgaoDigitado);             //Filtrando o órgão selecionado pelo usuário
  
  if (selecionado.length > 0) {                                           //Verificando se retornou o tamanho do array diferente de 0
    console.log(`v Sucesso! Transações encontradas para '${orgaoDigitado}':`)
    console.log(selecionado);                                            //Imprimindo o array com as transações para o órgão selecionado
  } else {         
    console.log(`!Nenhuma transação encontrada para '${orgaoDigitado}':`);     
    console.log("Verifique maiúsculas/minúsculas e acentos. Lembrando que o sistema diferencia")
  
  }
 }

iniciarFiltro(transacoes);
console.log();              //Linha em Branco
console.log("Esperando o usuário digitar o órgão, seguindo o relatório...")
console.log();              //Linha em Branco
console.log();              //Linha em Branco

console.log("RELATÓRIO ESTATÍSTICO COM TRATAMENTO DE FALHAS - TESTE");              

//Tratamento de erros: As transações que apresenta algum falha
//Constante criada para testar o código de falha inválida pois a anterior não possui
const transacoes2 = [{"orgao":"MEC","data":"01/01/2024","valor":500.00,"status":"sucesso"},
  {"orgao":"Ministério da Saúde","data":"03/01/2024","valor":750.00,"status":"sucesso"},
  {"orgao":"MEC","data":"05/01/2024","valor":1000.00,"status":"sucesso"},
  {"orgao":"Ministério da Educação","data":"08/01/2024","valor":600.00,"status":"sucesso"},
  {"orgao":"Ministério da Saúde","data":"10/01/2024","valor":900.00,"status":"sucesso"},
  {"orgao":"Ministério da Educação","data":"12/01/2024","valor":300.00,"status":"falha","motivo":"dados inválidos"},
  {"orgao":"Ministério da Saúde","data":"15/01/2024","valor":1200.00,"status":"sucesso"},
  {"orgao":"MEC","data":"17/01/2024","valor":800.00,"status":"falha","motivo":"falta de verba"},
  {"orgao":"Ministério da Educação","data":"20/01/2024","valor":400.00,"status":"falha","motivo":"falta de limite"},
  {"orgao":"MEC","data":"22/01/2024","valor":1100.00,"status":"falha"} ] 

const falhasSemMotivo = transacoes2.filter(t =>              
  t.status === "falha" && !t.motivo                    //Criar o filtro para tratamento de erros que são falha e também não tem motivo, por isso recebe t.motivo vazio
);

console.log();              //Linha em Branco
console.log();              //Linha em Branco
console.log("Falhas inválidas/que não possuem motivo:");
console.log(falhasSemMotivo);


// Excluindo as transações inválidas para as estatísticas 
// Também será testado com a constante do exemplo de dados inválidos, porque os dados anteriores, não possuiam dados inválidos 

console.log();              //Linha em Branco
const transacoesValidas = transacoes2.filter(t=> {                              //Criando Filtro para as transações válidas
  if(t.status ==="falha"&& !t.motivo) {                                         // O filtro deve obedecer ao critério de além de falha, motivo ausente
    console.log(`Erro -> transação removida:falha sem motivo(${t.orgao}, R$ ${t.valor})`)
    return false
  }
    return true;                                                              //Retorna a condição caso verdadeira
});


//Mostrando o repasse válido  de maior valor
const maiorvalordorepasse2 = transacoesValidas.reduce ((acumulador2, valorAtual2) => {      //Usando reduce para diminuir o array para o/os objetos que atendam à comparação
  return (acumulador2.valor > valorAtual2.valor)                                            
  ?acumulador2: 
  valorAtual2;
});
console.log();              //Linha em Branco
console.log("O repasse de maior valor válido foi :")
console.log(maiorvalordorepasse2);

//Mostrando o repasse válido de menor valor 
const menorvalordorepasse2 = transacoesValidas.reduce ((acumulador3, valorAtual3) => {      //Usando reduce para diminuir o array para o/os objetos que atendam à comparação
  return (acumulador3.valor < valorAtual3.valor)                                            
  ?acumulador3: 
  valorAtual3;
});
console.log("O repasse de menor valor válido foi :")
console.log(menorvalordorepasse2);

// Dia com mais operações válidas
const diaComMaisValidas = {};                   //Criando a constante para o dia com mais transações válidas

transacoesValidas.forEach(t => {
  if (diaComMaisValidas[t.data]) diaComMaisValidas[t.data]++;
  else 
      diaComMaisValidas[t.data] = 1;
}); 

console.log("O dia com mais repasses válidos foi: ")
console.log(diaComMaisValidas)

// Orgão com mais repasses válidos
function encontrarOrgaoComMaisRepasses2(transacoesValidas) {
   const contar2 ={};                 //Criar a nova constante que vai contar e armazenar as informações dos órgãos com mais repasses

   transacoesValidas.forEach(t=> {          //Percorrer e agrupar cada objeto, criando caso não exista
    if (!contar2[t.orgao]) {
      contar2[t.orgao]={
        orgao:t.orgao,
        quantidade:0,
        valorTotalRepasses:0
      }
    }
    contar2[t.orgao].quantidade++;                       //Soma a quantidade de repasses 
    contar2[t.orgao].valorTotalRepasses += t.valor;      //Interessante emitir o total dos repasses
     
   });
  
   let orgaoMrepasse2 = {quantidade: 0};
  
   for (const orgao in contar2) {                      //loop para comparar as quantidades da propriedade
    if (contar2[orgao].quantidade > orgaoMrepasse2.quantidade) {
      orgaoMrepasse2 = contar2[orgao];
    }
   }

   const resultadomaisrepasses2 = Object.values(contar2)        //Transformando contar em array
   .filter(o => o.quantidade === orgaoMrepasse2.quantidade)    //Filtra todos os objetos que têm a mesma quantidade
   .map(o => ({                                               //Organiza pra aparecer essas informações
    nomedoOrgao: o.orgao,
    quantidadeTotaldeRepasses: o.quantidade,
    valorTotaldosRepasses: o.valorTotalRepasses
   })); 

  return resultadomaisrepasses2;                            //Retorna um objeto que atende aos critérios com as novas classes criadas

}

const resultadoorgaomais2 = encontrarOrgaoComMaisRepasses2(transacoesValidas);
console.log("O Órgão que mais fez repasses válidos foi: ")
console.log(resultadoorgaomais2);

//Órgão com mais repasses válidos bem Sucedidos
function OrgaoComMaisRepassesbemsucedidos2(transacoesValidas) {
   const contarbem2 ={};                 //Criar a nova constante que vai contar e armazenar as informações dos órgãos com mais repasses

   transacoesValidas.forEach(t=> {          //Percorrer e agrupar cada objeto, criando caso não exista
    if (t.status === "sucesso") {   //Criar a condição para sucesso
    if (!contarbem2[t.orgao]) {     //Criar a condição para cada variável    
      contarbem2[t.orgao]={
        orgao:t.orgao,
        quantidade:0,
        valorTotalRepasses:0
      }
    }
  }
    contarbem2[t.orgao].quantidade++;                       //Soma a quantidade de repasses 
    contarbem2[t.orgao].valorTotalRepasses += t.valor;      //Interessante emitir o total dos repasses
     
   });
  
   let orgaoMrepasse2 = {quantidade: 0};
  
   for (const orgao in contarbem2) {                      //loop para comparar as quantidades da propriedade
    if (contarbem2[orgao].quantidade > orgaoMrepasse2.quantidade) {
      orgaoMrepasse2 = contarbem2[orgao];
    }
   }

   const resultadobem2 = Object.values(contarbem2)        //Transformando contar em array na constante com os valores definidos 
   .filter(o => o.quantidade === orgaoMrepasse2.quantidade)    //Filtra todos os objetos que têm a mesma quantidade
   .map(o => ({                                               //Organiza pra aparecer essas informações
    nomedoOrgao: o.orgao,
    quantidadeTotaldeRepasses: o.quantidade,
    valorTotaldosRepasses: o.valorTotalRepasses
   })); 

  
  return resultadobem2;                            //Retorna o resultado do array para o objeto novo
}


const resultadoorgaobem2= OrgaoComMaisRepassesbemsucedidos2(transacoes2);             //Chama a função com os novos objetos criados
console.log("O Órgão que mais fez mais repasses válidos bem sucedidos foi: ")
console.log(resultadoorgaobem2);                                                      //Imprime todos os objetos

//Orgao que fez mais repasses válidos com falha
function OrgaoComMaisRepassescomfalha2(transacoesValidas) {
   const contarfalha2 ={};                 //Criar a nova constante que vai contar e armazenar as informações dos órgãos com mais repasses com falha

   transacoesValidas.forEach(t=> {          //Percorrer e agrupar cada objeto, criando caso não exista
    if (t.status === "falha") {      //Criar a condição para a falha
    if (!contarfalha2[t.orgao]) {
      contarfalha2[t.orgao]={
        orgao:t.orgao,
        quantidade:0,
        valorTotalRepasses:0
      }
    }
  
    contarfalha2[t.orgao].quantidade++;                       //Soma a quantidade de repasses 
    contarfalha2[t.orgao].valorTotalRepasses += t.valor;      //Interessante emitir o total dos repasses
  }
   });
  
   let orgaoMrepasse2 = {quantidade: 0};
  
   for (const orgao in contarfalha2) {                      //loop para comparar as quantidades da propriedade
    if (contarfalha2[orgao].quantidade > orgaoMrepasse2.quantidade) {
      orgaoMrepasse2 = contarfalha2[orgao];
    }
   }

   const resultadofalha2 = Object.values(contarfalha2)        //Transformando contar em array
   .filter(o => o.quantidade === orgaoMrepasse2.quantidade)    //Filtra todos os objetos que têm a mesma quantidade
   .map(o => ({                                               //Organiza para o novo objeto do array para conter essas informações
    nomedoOrgao: o.orgao,
    quantidadeTotaldeRepasses: o.quantidade,
    valorTotaldosRepasses: o.valorTotalRepasses
   })); 

  
  return resultadofalha2;                                  //Retorna o objeto com valor
}

//Mostra os resultados no console
const resultadocomfalha2 = OrgaoComMaisRepassescomfalha2(transacoesValidas);     //Define uma constante com todos os objetos retornados da função
console.log("O Órgão que mais fez mais repasses válidos com falha foi: ")
console.log(resultadocomfalha2);                                                 //Imprime o resultado da constante com os objetos todos

