//setTimeout(()=>console.log(1),2000)

// uma funcao assincrona , ele espera fazer uma tafera primeiro pra pode executar outra
 async function escreverInformaçõesdoPais  (paisDesejado){ // toda funcao assincrona precisa de uma async na frente 
    const infor = await fetch('https://restcountries.com/v3.1/name/' + paisDesejado) //criei uma fetch pra buscar em uma api na web e essa api demora pra carregar entao tempos que pedi pra funcao esperar a api terminar de fazer sua funcao pra pode terminar o codigo certo e usamos o await para  fazer a esperar da funcao 
    console.log(await infor.json()) // aqui tambem temos que fazer pq estamos passando o json. que vai na web buscar informações
}

escreverInformaçõesdoPais('argentina')