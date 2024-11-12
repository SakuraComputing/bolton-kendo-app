import React from "react";
import '../../styles/_whatiskendo.scss'

const WhatIsKendo: React.FC = () => {
    return (
        <div className="what-is-kendo">
            <h1 className="what-is-kendo-title">
                What is Kendo?
            </h1>
            <p className="what-is-kendo-description">
                Kendo is a type of athletic contest in which practitioners wear kendo-gu (protective armor) and use shinai (bamboo swords) to strike each other.
                However, kendo is a budo (martial way) that aims to forge the mind and body of practitioners and facilitate the development of character through continued keiko (practice).
            </p>
            <h1 className="what-is-kendo-title">The Concept of Kendo</h1>
            <p>
                The concept of kendo is to discipline the human character through the application of the principles of the katana (sword).
            </p>
            <h1 className="what-is-kendo-title">The Purpose of Practising Kendo</h1>
            <div className="prompt">The purpose of practicing kendo is:</div>
            <p>
                To mold the mind and body,
                To cultivate a vigorous spirit,
                And through correct and rigid training,
                To strive for improvement in the art of kendo,
                To hold in esteem human courtesy and honour,
                To associate with others with sincerity,
                And to forever pursue the cultivation of oneself.
            </p>
            <div className="prompt">This will make one be able:</div>
            <p>    
                To love his/her country and society,
                To contribute to the development of culture,
                And to promote peace and prosperity among all peoples.
            </p>
            <small className="footnote">Ref: All Japan Kendo Federation</small>
        </div>
    )
}
export default WhatIsKendo;