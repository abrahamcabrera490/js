const axios = require("axios");

const starwars = async () => {
  const resultado = await axios.get(`${process.env.STARWARS_APIURL}/people/1/`);
  return resultado;
};

module.exports = starwars;
