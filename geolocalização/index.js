function PositionObitidaComSucesso(geoLocalizacao){
    console.log(geoLocalizacao);
}

function PositionNaoLocalizada(erro){
    console.error(erro);
}


navigator.geolocation.getCurrentPosition(PositionObitidaComSucesso,PositionNaoLocalizada);