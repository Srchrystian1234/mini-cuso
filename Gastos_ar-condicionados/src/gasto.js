const form = document.getElementsByTagName('form')[0]; // essa chama importante, pq ela que faz a chama tipo por id, e assim fazendo a chama pela tag
const consumoAparelhoEl = form["consumo-aparelho"];
const periodoConsumoEl = form['periodo-consumo'];
const horasDiariasUsoEl = form['horas-diarias-uso'];
const diasUsoMesEl = form['dias-uso-mes'];
const precoEnergiaEl = form['preco-energia'];
const ButtonCalcu = form['botao-calcular']
 // fazendo uma funcao para a o calculo do gasto 

function calcularGasto(evt){  
      evt.preventDefault();//evita de enviar preconcemente
      const consumoAparelho = consumoAparelhoEl.value.replace(',','.');//essa funcao so funciona com ., caso ele digite ',' , troque pelo '.'
      const periodoDeconsumo = periodoConsumoEl.value;// ano 
      const consumoDiarioAparelho = periodoDeconsumo === "mes"? consumoAparelho/30: consumoAparelho/365; //aqui decide se é por ano ou mes com essa condicao 
      const diariaHorasDiariaUso = horasDiariasUsoEl.value.replace(',','.');//caso o usuario digite , fazer troca por .
      const diasUsoNoMes = diasUsoMesEl.value; //dias de uso
    const precoEnergia = precoEnergiaEl.value.replace(',','.'); //preco da energia atual que vai na conta de energia

    const custo =consumoDiarioAparelho * diariaHorasDiariaUso * diasUsoNoMes * precoEnergia; // fazendo a multiplicao total do consumo(ou mes ou ano)* dias de uso * dias do mes que usou(quantos dias) * o preço da energia

    //a qui faço a chama do local aonde vou colcoar o valor
    const consumoEl = document.getElementById('consumo')
    consumoEl.innerHTML = custo.toFixed(2).replace('.',',')
    }

ButtonCalcu.addEventListener('click', calcularGasto); //chamada do botao do evento
