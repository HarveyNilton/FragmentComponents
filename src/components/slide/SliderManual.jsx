import React, { useState } from 'react';
import './slidermanual.css'

import imgBandera from '/src/imag/bandera.png'
import imgPaisajeUno from '/src/imag/paisajeuno.png'
import imgPaisajeDos from '/src/imag/paisajedos.jpg'

const SliderManual = () => {

    const imags = [imgBandera, imgPaisajeUno, imgPaisajeDos]

    const [selectedIndex, setSelcetedIndex] = useState(0)
    const [selecectedImag, setSelectedImag] = useState(imags[0])
    const [isloading, setIsLoading] = useState(false)

    const selectedNewImag = (index, images, next = true) => {
        setIsLoading(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
            const nexIndex = next ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : imags.length - 1
            setSelectedImag(imags[nexIndex])
            setSelcetedIndex(nexIndex)
        }, 1000);

    }

    const previus = () => {

        selectedNewImag(selectedIndex, imags, false)
        /*
        const condition = selectedIndex > 0
        const nexIndex = condition ? selectedIndex - 1 : imags.length - 1
        setSelectedImag(imags[nexIndex])
        setSelcetedIndex(nexIndex)*/
    }

    const next = () => {
        selectedNewImag(selectedIndex, imags)
        /*
        const condition = selectedIndex -1 < imags.length -1
        const nexIndex = condition? selectedIndex + 1 : 0
        setSelectedImag(imags[nexIndex])
        setSelcetedIndex(nexIndex)*/
    }

    return (
        <div className='containet_slide_manual'>

            <div className="slider_section_manual">

                <img src={selecectedImag} alt="" className={isloading ?  'slider_manual_img' : 'loader'} onLoad={()=>{setIsLoading(true)}}/>
            </div>

            <div className="container_bt">
                <div className="slider_bt bt_left" onClick={previus}>{'<'}</div>
                <div className="slider_bt bt_right" onClick={next}>{'>'}</div>
            </div>


        </div>
    );
};

export default SliderManual;