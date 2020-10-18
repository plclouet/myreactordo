import React, { useState, useEffect } from 'react';

import {  Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import printJS from 'print-js';
import Loader from '../components/loader';
import fileDownload from 'js-file-download';
 // ES6 Modules or TypeScript
import Swal from 'sweetalert2';

 
const OrdoDetail = ({ match }) => {

  
   
  const [ordonnance, setOrdonnance] = useState();
  const history = useHistory();
 
/*   useEffect(() => {

      const fetchOrdonnance = async() => {
      const response = await fetch(`http://localhost:1337/ordonnances/${+match.params.id}`)
      const data = await response.json()
      setOrdonnance(data)
    }
    fetchOrdonnance()
    }, [match.params.id]); */

    useEffect(() => {
      const getOrdonnance = async () => {
        const response = await axios(
          `https://frozen-dawn-43758.herokuapp.com/ordonnances/${+match.params.id}`,
        );
        setOrdonnance(response.data);
        
      };
   
      getOrdonnance();
      
    }, [match.params.id]);

    const printArea = () => {
      printJS(`${ordonnance.imageOrdo.url}`, 'image')
    };

  
  
  

  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  };

const fireSweetAlert = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then((result) => {axios.delete(`https://frozen-dawn-43758.herokuapp.com/ordonnances/${ordonnance.id}`)
      .then((response) => {
        axios.delete(`https://frozen-dawn-43758.herokuapp.com/upload/files/${ordonnance.imageOrdo.id}`)
      .then(() => history.push(`/ordonnances`))
      });
  });
  };
});
};

//version précédente
// .then((result) => {axios.delete(`https://frozen-dawn-43758.herokuapp.com/ordonnances/${ordonnance.id}`)
//.then(() => history.push(`/ordonnances`))})
//}
//})
//};

  const deleteOrdo = () => {
    fireSweetAlert();
  //  axios.delete(`${process.env.REACT_APP_API_URL}/ordonnances/${ordonnance.id}`).then(() => history.push(`/ordonnances`));
  };

   
  return (
    <div>
      { ordonnance ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ ordonnance.lastName }</h2>
            <div className="card hoverable"> 
              <div  id="printMe" className="card-image">
               
                <img id="saveMe" src={`${ordonnance.imageOrdo.url}`} alt={ordonnance.lastName} style={{width: '250px', margin: '0 auto'}}/>
                {/* <Link to={`/pokemons/edit/${pokemon.id}`} className="btn-floating halfway-fab waves-effect waves-light"><i className="material-icons">edit</i></Link> */}
            
              </div>
              <div className="card-stacked">
                <div className="card-content">
                    <p>{ ordonnance.firstName }{" "}{ ordonnance.lastName }{" "}{ ordonnance.examen }</p>
                    <br></br>
                    <p>
                     
                        <span style={{marginRight:5}}  className="btn-floating  waves-effect  waves-light" >
                           <i  onClick={printArea} className="material-icons ">print</i> 
                        </span>
                    
                   
                        <span style={{marginRight:5}} className="btn-floating  waves-effect waves-light" >
                           <i onClick={() => {handleDownload(`${ordonnance.imageOrdo.url}`, 
                    `${ ordonnance.firstName }${ ordonnance.lastName }.jpg`)}} className="material-icons">arrow_circle_down</i> 
                        </span>
                   
                        
                    </p>
                  
                  
                    {/* <button type="button" onClick={printArea}>
                          Imprimer l'ordonnance
                    </button> */}
                    {/* <button onClick={() => {handleDownload(`${process.env.REACT_APP_API_URL}${ordonnance.imageOrdo.url}`, 
                    `${ ordonnance.firstName }${ ordonnance.lastName }.jpg`)}}>Télécharger l'ordonnance</button> */}
                     <p>
                        <span className="btn-floating halfway-fab waves-effect waves-light"
                        style={{position: 'fixed', bottom: '25px', right: '25px'}}>
                        <i onClick={deleteOrdo} className="material-icons">delete</i>
                      </span>
                     </p>
                     
                
               
                
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
}
 
export default OrdoDetail;


