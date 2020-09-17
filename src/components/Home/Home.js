import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css';

import sajek from '../../images/sajek.png';
import sreemongol from '../../images/sreemongol.png';
import sundorbon from '../../images/sundorbon.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header>
            <div className="container container-item">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-white">Cox's bazar</h1>
                        <p className="text-white">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    </div>

                    <div class=" col-md-2 card-body">
                        <img src={sajek} class="card-img-top" alt="..."></img>
                        {/* <h5 class="card-title">Card title</h5> */}
                        <button className="bg-warning rounded-lg"><Link to="/booking">Go Sajek</Link></button>
                    </div>
                    <div class=" col-md-2 card-body">
                        <img src={sreemongol} class="card-img-top" alt="..."></img>
                        {/* <h5 class="card-title">Card title</h5> */}
                        <button className="bg-warning rounded-lg"><Link to="/booking">Go Sreemongol</Link></button>
                    </div>
                    <div class=" col-md-2 card-body">
                        <img src={sundorbon} class="card-img-top" alt="..."></img>
                        {/* <h5 class="card-title">Card title</h5> */}
                        <button className="bg-warning rounded-lg"><Link to="/booking">Go Sundorbon</Link></button>
                    </div>



                </div>
            </div>
        </header>










    );
};

export default Home;