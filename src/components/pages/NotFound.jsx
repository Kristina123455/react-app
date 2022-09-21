import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function NotFound(){
    const [txt, setTxt] = useState('');
        return(
            <ComponentNotFound className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Stranica trenutno nije aktivna</h1>
                            <h2>404 NOT FOUND</h2>
                            <div className="error-details">
                                Kliknite na dugme ispod za vise informacija
                            </div>
                            <div>
                                <p>{txt}</p>
                                <button onClick={() => setTxt(txt + 'Stranica je u obradi.')}>Informacije</button>
                            </div>
                            <br></br>
                            <div className="error-actions">
                                <Link className="btn btn-outline-primary btn-lg" to="/">
                                    POČETNA 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        );
    }


export default NotFound;

const ComponentNotFound = styled.div`
    .error-template {
        padding: 40px 15px;
        text-align: center;
    }

    .error-actionss {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn {
        margin-right: 10px;
    }

`;