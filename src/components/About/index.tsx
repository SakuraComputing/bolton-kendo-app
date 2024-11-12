import React from 'react';
import '../../styles/_about.scss';

const About: React.FC = () => (
    <div className="about">
        <h1 className="about-title">About the club</h1>
        <p className="description">
            Bolton Kendo Club was founded in 1997 by Mark Needham Sensei, 5th Dan, 
            but has its deep roots in KNMS, the first Kendo club in Manchester, 
            set up in 1973 by Wilf Swindells Sensei.
        </p>
        <img src="/src/assets/knms.jpeg" alt="alt-knms-club" className='dojo-image'/>
    </div>
);
export default About;