import React, { useState } from 'react';
import fakeData from '../fakeData/all-hotel';
import rating from '../../images/star-rating.png';

const Search = () => {

    const allHotel = fakeData.slice(0, 3);
    const [hotels, setHotels] = useState(allHotel);

    return (
        <div>
            <h1>This is hotel search page</h1>
            <h3><small>252 stays Apr 13-17 3 guests</small></h3>
            <h3>Stay in Cox’s Bazar</h3>
            <h4>Total hotels: {hotels.length}</h4>
            {

                hotels.map(
                    hotel =>

                        // <div className="card mb-3">
                        //     <div className="col-md-2">
                        //         <img src={hotel.image} alt="" />
                        //     </div>
                        //     <div className="col-md-3">
                        //         <h3>{hotel.name}</h3>
                        //         <p>{hotel.details}</p>
                        //     </div>
                        // </div>


                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={hotel.image} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{hotel.name}</h5>
                                        <p class="card-text">{hotel.details}</p>
                                        <p class="card-text">${hotel.price}/night</p>
                                        <p class="card-text">4.5<img src={rating} alt="Rating" width="20px" /> {hotel.review}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                )
            }

        </div >
    );
};

export default Search;



