import React from 'react';
import './slide.css'

import imgBandera from '/src/imag/bandera.png'
import imgPaisajeUno from '/src/imag/paisajeuno.png'
import imgPaisajeDos from '/src/imag/paisajedos.jpg'

const Slide = () => {
    return (
        <div className='container-general'>

            <input type="radio" id='1' name='image-slide' hidden />
            <input type="radio" id='2' name='image-slide' hidden />
            <input type="radio" id='3' name='image-slide' hidden />

            <section className='slide'>

                <figure className='item-slide'>
                    <img className='img-slide' src={imgBandera} alt="" />
                </figure>

                <figure className='item-slide'>
                    <img className='img-slide' src={imgPaisajeUno} alt="" />
                </figure>

                <figure className='item-slide'>
                    <img className='img-slide' src={imgPaisajeDos} alt="" />
                </figure>
            </section>

            <section className='pagination'>

                <label className='pagination-item' htmlFor="1">
                    <img className='img-pag' src={imgBandera} alt="" />
                </label>

                <label className='pagination-item' htmlFor="2">
                    <img className='img-pag'  src={imgPaisajeUno} alt="" />
                </label>

                <label className='pagination-item' htmlFor="3">
                    <img  className='img-pag' src={imgPaisajeDos} alt="" />
                </label>

            </section>

        </div>
    );
};


export default Slide;

