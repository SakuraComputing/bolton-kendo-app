import React from 'react';
import GoogleMapComponent from '../GoogleMapComponent';
import '../../styles/_practice.scss';

const App: React.FC = () => {
  return (
    <div className="practice">
      <GoogleMapComponent locationName="Little Lever School" lat={53.56206594631713} lng={-2.383435938632741} />

      <div className="practice-container">
        <div>Dojo Leader: Mark Needham</div>
        <div>Little Lever School</div>
        <div>Bolton</div>
        <div>BL3 1BT</div>
        <div>Sunday 10:00 - 12:00am</div>
        <div className="notes">
          <div>*There is an overflow carpark situated on Hall Lane A6053 just prior to the entrance on the left.</div>
        </div>
      </div>
    </div>
  );
};

export default App;
