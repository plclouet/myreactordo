import React from 'react';
import { Link } from 'react-router-dom';

const PageProtected = () => {

  return (
    <div className="center">
      {/* <img src="./images/" alt="Page non trouvée"/> */}
      <h1>Le contenu de cette page est protégée mais accessible puisque vous êtes identifié</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default PageProtected;