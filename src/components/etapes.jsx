import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const Etapes = () => {
    return (
        <div className="homepage">
            <div className="etape">
                <h2 className="titre-etape"><FontAwesomeIcon icon={faBullseye} className="icone-etape" />Ciblage et analyse</h2>
            </div>
            <div className="etape">
                <h2 className="titre-etape"><FontAwesomeIcon icon={faChartSimple} className="icone-etape" />Diagnostic et plan d'action</h2>
            </div>
            <div className="etape">
                <h2 className="titre-etape"><FontAwesomeIcon icon={faMedal} className="icone-etape" />Résultats et suivi</h2>
            </div>
        </div>
    )
};

export default Etapes;