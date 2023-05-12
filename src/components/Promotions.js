import React from 'react';
import './Promotions.css';

const Products = () => {
    return (
        <div className='promotions' id='promotions'>
            <div className='content'>
            <div className='col-2'>
                    <h2>Promociones</h2>
                    <ul>
                    <li>Dos tortas por $40.</li>
                    <li>Un combo de hamburguesa sencilla y papas a la francesa por $50.</li>
                    <li>Dos hamburguesas sencillas por $80.</li>
                    <li>Dos pambazos por $40.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products