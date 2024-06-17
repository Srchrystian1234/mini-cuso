function posicaoObtidaComSucesso(geolocalizacao){
    console.log(geolocalizacao)
}

function posicaoNaoPodeSerObtida(erro){
    console.error(erro)
}




navigator.geolocation.getCurrentPosition(posicaoObtidaComSucesso,posicaoNaoPodeSerObtida);
