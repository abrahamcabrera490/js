const axios = require('axios');

const starwars = async ()=>{
    const resultado =  await axios.get('https://reqres.in/api/users?page=2')
   console.log(resultado);  
   
   }


   starwars();