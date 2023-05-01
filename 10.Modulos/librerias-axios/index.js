//Instalar axios para servicios externos
import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/snorlax')
  .then(function (response) {
    // handle success
    console.log('Acceso concedido!');
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log('Error!');
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('Bienvenido a OpenBootcamp !!');
  });