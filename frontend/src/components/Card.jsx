import React from 'react';
import CardImage from './CardImage';

const Card = (props) => {
    
    const {images, price, postalCode, city, street, streetNumber, rooms, area, id} = props.house;
    const formattedPrice = new Intl.NumberFormat('de-DE').format(price);
    
    return (
       <div className="col-md-4 mb-5">
            <div className="card shadow">
                <div id={id} className="carousel slide">
                    <div className="carousel-inner ">
                        {images.map((item, index)=>{
                                
                        return <CardImage URL={item} key={item} isActive={index === 0} />
                    })}
                        
                    </div>
                    <a
                        className="carousel-control-prev"
                        href={`#${id}`}
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href={`#${id}`}
                        role="button"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{formattedPrice} BAM</h5>
                    <p className="pt-2">
                        <i className="fas fa-bed"></i> {rooms} sobe <i className="far fa-square"></i> {area}m<sup>2</sup> <i className="fas fa-bath"></i> 1
                    </p>
                    <p>{street}, {streetNumber}</p>
                    <p>{postalCode}, {city}</p>
                    <a href="#" className="btn btn-outline-success w-100">Pogledaj</a>
                </div>
            </div>
        </div>

             
    )
}

export default Card