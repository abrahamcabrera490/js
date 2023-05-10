const axios = require('axios');

const starwars = async ()=>{
    const resultado =  await axios.get('https://swapi.dev/api/people/1/');
    return resultado;  
   
   }


   module.exports = starwars;