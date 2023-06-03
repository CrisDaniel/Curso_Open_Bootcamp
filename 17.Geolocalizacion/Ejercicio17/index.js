function initMap(){
    //!Localizacion de Tocache
    const posicion = {
        lat: -8.18861, 
        lng: -76.5103
    };

    //!Localizacion de Japon - Tokio
    const posicion2 = {
        lat: 35.6895,
        lng: 139.69171
    }

    //!Localizacion de Rusia - Moscu
    const posicion3 = {
        lat: 62.0338900,
        lng: 129.7330600
    }

    let map =new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: posicion3
    });

    //Primera posicion
    let marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Ubicacion de tocache"
    });

    //Segunda posicion
    let marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Japon - Tokio"
    });

    //Tecera posicion
    let marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Rusia - Moscu"
    });
}