import React from 'react'
import homeBanner from '../assets/banner2.jpeg'

const MainBanner = () => {
    return (
        <div className="main-banner">
			<img className="main-banner" src={homeBanner} alt="LV Consulting" />
		</div>
    )
};

export default MainBanner;