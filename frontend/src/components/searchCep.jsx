import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './searchCep.css';

export default function PostalCode() {

    //Initial status of the state of the variables
    const [cep, setCep] = useState('');
    const [data, setData] = useState({});

    //Function that includes the input value as an endpoint parameter
    const handleCep = useCallback((event) => {
        event.preventDefault()
        axios.get(`http://localhost:3000/cep/${cep}`).then(function (response) {
            return setData(response.data)
        })
    })

    //Rendering the API return with the Bootstrap stylesheet
    return (
        <div className="centralizer">
            <div className="card">
                <h2 className="card-body">Digite o CEP</h2>
                <form onSubmit={handleCep} className="card-body">
                    <div className="input-group mb-3 d-flex justify-content-center">
                        <input className="form-control" value={cep} onChange={({ target }) => setCep(target.value)} />
                        <button className="btn btn-primary btn-block">CONSULTAR</button>
                    </div>
                </form>
                <div className="card-body">
                    <div>{data.MsgErro}</div>
                    <div>{data.cep}</div>
                    <div>{data.logradouro}</div>
                    <div>{data.bairro}</div>
                    <div>{data.localidade}</div>
                    <div>{data.uf}</div>
                </div>
            </div>
        </div>
    )
}