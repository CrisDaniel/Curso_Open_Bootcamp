let map, marker;

function initMap(){
    //Localizacion de Tocache
    const posicion = {
        lat: -8.18861, 
        lng: -76.5103
    };

    map =new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: posicion
    });

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Ubicacion de tocache"
    });

    geoPosicion();
}

function geoPosicion(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation;
        const options = {timeout: 60000};
        const watchPosicion = geoLoc.watchPosition(centrarMapa, onError, options);
    }else{
        alert("No admite navigator.geolocation");
    };
}

function centrarMapa(position){
    let nuevaPosicion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPosicion + "o");
    marker.setPosition(nuevaPosicion);
    map.setCenter(nuevaPosicion);
}

function onError(error){
    console.log("Se ha producido un error, Active su ubicacion");
    console.error(error);
}