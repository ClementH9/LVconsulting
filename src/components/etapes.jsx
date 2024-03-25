import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Etapes = () => {
    return (
        <div className="differentes-etapes">
            <div className="homepage">
                <h2 className="process">Le process</h2>
                <div className="etape">
                    <h3 className="titre-etape"><FontAwesomeIcon icon={faBullseye} className="icone-etape" />Ciblage et analyse</h3>
                </div>
                <div className="etape">
                    <h3 className="titre-etape"><FontAwesomeIcon icon={faChartSimple} className="icone-etape" />Diagnostic et plan d'action</h3>
                </div>
                <div className="etape">
                    <h3 className="titre-etape"><FontAwesomeIcon icon={faMedal} className="icone-etape" />Résultats et suivi</h3>
                </div>
                <h2 className="engagements">Nos engagements</h2>
                <div className="engagement">
                    <h3 className="titre-engagement"><FontAwesomeIcon icon={faGaugeHigh} className="icone-engagement" />Réactivité</h3>
                </div>
                <div className="engagement">
                    <h3 className="titre-engagement"><FontAwesomeIcon icon={faStar} className="icone-engagement" />Qualité</h3>
                </div>
                <div className="engagement">
                    <h3 className="titre-engagement"><FontAwesomeIcon icon={faCalendar} className="icone-engagement" />Efficience</h3>
                </div>
            </div>
        </div>
    )
};

export default Etapes;