import React from 'react';
import './portfolio.css';
import {useState,useEffect} from 'react';
import {portfolioRealworldProjectEnglishData,portfolioPersonalProjectEnglishData} from './PortfolioData.js';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

const Portfolio = ()=>{
    const realworldProject = portfolioRealworldProjectEnglishData;
    const personalProject = portfolioPersonalProjectEnglishData;
    const [slideNumber,setSlideNumber] = useState(3);
    const checkWidth = ()=>{
        if(window.innerWidth>1024){
            setSlideNumber(3);
        }
        else if(window.innerWidth>600 && window.innerWidth<=1024){
            setSlideNumber(2)
        }
        else{
            setSlideNumber(1)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',checkWidth);
    },[])

    const truncate= function(str) {
        return str.length > 20 ? str.substring(0, 17) + "..." : str;
    }

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Real World Project</h2>
            <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={slideNumber}
            navigation
            pagination={{ clickable: true }}
            className="container portfolio__container">
            
                {
                    realworldProject.map(({id, image, title, github, demo})=>{
                        return (
                            <SwiperSlide key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{truncate(title)}</h3>
                                <div className="portfolio__item-cta">
                                    <button disabled={github=='na'} onClick={()=>{window.open(github)}} className="btn" target="_blank">Github</button>
                                    <a href={demo} className="btn" target="_blank">Live</a>
                                </div>                    
                            </SwiperSlide> 
                        );
                    })
                }                
            </Swiper>
            <h2>Self Learning Project</h2>
            <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={slideNumber}
            navigation
            pagination={{ clickable: true }}
            className="container portfolio__container">
            
                {
                    personalProject.map(({id, image, title, github, demo})=>{
                        return (
                            <SwiperSlide key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{truncate(title)}</h3>
                                <div className="portfolio__item-cta">
                                    <button disabled={github=='na'} onClick={()=>{window.open(github)}} className="btn" target="_blank">Github</button>
                                    <a href={demo} className="btn" target="_blank">Live</a>
                                </div>                    
                            </SwiperSlide> 
                        );
                    })
                }                
            </Swiper>
        </section>
    )
}

export default Portfolio;