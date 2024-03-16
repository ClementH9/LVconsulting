import React from 'react'
import homeBanner from '../assets/SEO.jpeg'

const MainBanner = () => {
    return (
        <div className="main-banner">
			<img className="main-banner" src={homeBanner} alt="LV Consulting" />
            <h2 className="accroche">Le SEO à portée de main !</h2>
		</div>
    )
};

export default MainBanner;