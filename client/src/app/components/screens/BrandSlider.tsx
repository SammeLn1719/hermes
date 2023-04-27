import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import { Context } from './../../../index'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const BrandSlider = observer(() => {
    const {store} =  useContext(Context)
    return <div className="flex justify-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <Splide hasTrack={ false } aria-label="...">
                    
                        {store._brands.map((brand:any) => 
                             <SplideTrack>
                                <SplideSlide className='flex '>
                                    <img src={brand.img}/>
                                    <p>{brand.name}</p>
                                </SplideSlide>
                            </SplideTrack>
                        )}
                   

                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">Prev</button>
                        <button className="splide__arrow splide__arrow--next">Next</button>
                    </div>
                    </Splide>
                   
        </div> 
})

export default BrandSlider;