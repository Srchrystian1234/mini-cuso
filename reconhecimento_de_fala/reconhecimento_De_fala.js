const caixaTexto = window.document.getElementById('texto-transcrito')// fazendo a chama do campo do texto 
const buttonTranscricao = window.document.getElementById('transcrever') //fazendo a chamada do botao
const reconhecimento = new webkitSpeechRecognition(); // essa aqui estou pegando a funcionalidade do meu navegador, chrome ou ed), é a capacidade do nagegador de reconhecer fala(caso seja no safari, so é remover o webkit, que ira funciona normalmente)
 // chama a o reconhecimento de flaa e acessei o onresult , o que quer dizer é como ele deve se comportar, quando tivert um resultado o da transcricao  e passei um parametro que recebe o audi do navegador (valor)
reconhecimento.onresult = (evento) =>{
    // aqui criei o resultado do evento que vem com resultado na posicao do array[0] [0] e coloquei dentro de uma variael 
    const transcricao =  evento.results[0][0].transcript;
    caixaTexto.innerHTML = transcricao //esse resultado, pedi pra ser mostrado dentro da caixa de texto 
}


buttonTranscricao.addEventListener('click', ()=> reconhecimento.start());
//aqui fiz a chamada pro botao e passei o evento de click, apos isso fiz uma funcao e pedi pra iniciar o reconhecimento de falar , assim que foi clicado no botao/