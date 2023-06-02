function initMap(){
    //Localizacion de Uluru
    const posicion = {
        lat: -25.344, 
        lng: 131.031
    };

    const map =new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    });
}