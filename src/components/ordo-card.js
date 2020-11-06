import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//import formatDate from '../helpers/format-date';

import './ordo-card.css';



const OrdoCard = ({ordonnance, borderColor = '#009688'}) => {


 //  const imageUrl = `${process.env.REACT_APP_API_URL}/ordonnance.imageOrdo.url`    ;

  // const imageUrl:  ordonnance.imageOrdo ? `${process.env.REACT_APP_API_URL}` + ordonnance.imageOrdo.url : http://localhost:1337/uploads/image_not_found_12b749f1c6.png }};
 
  
 
  const [color, setColor] = useState();
  const history = useHistory();
 
  const showBorder = () => {
    setColor(borderColor);
  };
 
  const hideBorder = () => {
    setColor('#f5f5f5');
  };

  const goToOrdonnance = (id) => {
    history.push(`/ordonnances/${id}`);
  } 


  if (ordonnance.imageOrdo.formats.small){

  console.log(ordonnance.imageOrdo)
  return (
  
    <div className="col s12 m6 l4" onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToOrdonnance(ordonnance.id)}>
      <div className="card"  style={{ borderColor: color }}>
        <div className="card-image"> 
        
          <img src={ordonnance.imageOrdo.formats.small.url} alt={ordonnance.lastName} height="300"/>
          {/* <img src={ uri: `${process.env.REACT_APP_API_URL}` + ordonnance.imageOrdo.url ? `${process.env.REACT_APP_API_URL}` + ordonnance.imageOrdo.url : null } alt={ordonnance.lastName} height="300"/> */}
        </div>
    
        <div className="card-content">
          <p>{ordonnance.lastName}</p>
        </div>

      </div> 
    </div>
  )} return null;
}
 
export default OrdoCard;