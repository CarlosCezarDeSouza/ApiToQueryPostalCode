const express = require('express');
const router = express.Router();
const ApiNodeCorreios = require('node-correios');

const correios = new ApiNodeCorreios()

//Configuration of the GET route that will have the CEP as a parameter
router.get('/cep/:range', (request, response) => {
    const cep = request.params.range

    //Return of the search made by the API from the parameter informed
    correios.consultaCEP({ cep }).then(result => {
        return response.json(result)
    }).catch(error => {
        return response.json(error)
    });
});

module.exports = (router)