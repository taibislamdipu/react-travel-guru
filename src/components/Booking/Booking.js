import React from 'react';
import { useHistory } from 'react-router-dom';

const Booking = () => {


    const history = useHistory()
    const handleSearch = (search) => {
        history.push('/search');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>COX'S BAZAR</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur ipsa incidunt! A fugit ipsam obcaecati inventore incidunt est expedita, harum dicta eveniet saepe, eum nostrum soluta! Vitae, accusamus blanditiis?</p>
                </div>

                <div class="col-md-6">
                    <form>
                        <div class="form-group col-md-6">
                            <label>Origin</label>
                            <input type="text" class="form-control" value="Dhaka" />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Destination</label>
                            <input type="text" class="form-control" value="Destination" />
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label>From</label>
                                <input type="date" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-4">
                                <label>To</label>
                                <input type="date" class="form-control" id="" />
                            </div>

                        </div>
                        <button onClick={() => handleSearch()} type="submit" class="btn btn-warning">Start Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;