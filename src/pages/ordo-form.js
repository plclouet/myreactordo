
// import React from 'react';
// import {  Link } from 'react-router-dom';

// import '../vendors/formvalidation/dist/css/formValidation.css';
// // Use the core library
// import formValidation from '../vendors/formvalidation/dist/es6/core';
// // Use the plugins
// import Icon from '../vendors/formvalidation/dist/es6/plugins/Icon';
// import Trigger from '../vendors/formvalidation/dist/es6/plugins/Trigger';
//  // import Bootstrap from '../vendors/formvalidation/dist/es6/plugins/Materialize';
// import SubmitButton from '../vendors/formvalidation/dist/es6/plugins/SubmitButton';
// import Materialize from '../vendors/formvalidation/dist/es6/plugins/Materialize';

// import moment from 'moment';
// //import axios from 'axios';

// class OrdoForm extends React.Component {
//     render() {
//         return (
//             // Render the form ...

//             <form id="demoForm" method="POST">
//                     <div className="container fluid">
//                          <div>
//                              <Link to="/"><h5>Retour</h5></Link>
//                          </div>
                   
//                         <div className="form-group row">
//                             <label className="col-sm-3 col-form-label">Prénom</label>
//                             <div className="col-sm-9">
//                                 <input type="text" className="form-control" name="firstName" />
//                             </div>
//                         </div>

//                          {/* nom  */}
//                         <div className="form-group row">
//                             <label className="col-sm-3 col-form-label">Nom</label>
//                             <div className="col-sm-6">
//                                 <input type="text" className="form-control" name="lastName" />
//                             </div>
//                         </div>

//                          {/* date de naissance  */}
//                         <div className="form-group row">
//                             <label className="col-sm-3 col-form-label">date de naissance</label>
//                             <div className="col-sm-6">
//                                 <input type="text" className="form-control" placeholder="DD/MM/YYYY" name="birthDate" />
//                             </div>
//                         </div>

//                          {/* examen  */}
//                         <div className="form-group row">
//                             <label className="col-sm-3 col-form-label">examen</label>
//                             <div className="col-sm-6">
//                                 <select className="browser-default custom-select"
//                                 name="examen"
//                                 // value={examen} 
//                                 >
//                                     <option>Choisir une option</option>
//                                     <option value="IRM">IRM</option>
//                                     <option value="Scanner">Scanner</option>
                                    
//                                 </select>
//                             </div>
//                         </div>

//                          {/* dateExamen  */}
//                         <div className="form-group row">
//                             <label className="col-sm-3 col-form-label">dateExamen</label>
//                             <div className="col-sm-6">
//                                 <input type="text" className="form-control" placeholder="DD/MM/YYYY" name="dateExamen" />
//                             </div>
//                         </div>

//                          {/* numéro de téléphone  */}
//                         <div className="form-group row">
//                             <label className="col-sm-3 col-form-label">numéro de téléphone</label>
//                             <div className="col-sm-6">
//                                 <input type="text" className="form-control" name="phoneNumber" />
//                             </div>
//                         </div>

//                          {/* file  */}
//                         <div className="form-group row">
//                             <label className="col-sm-3 col-form-label">ordonnance</label>
//                             <div className="col-sm-5">
//                                 <input type="file" className="form-control" name="imageOrdo" />
//                             </div>
//                         </div>
                       
//                         <div className="form-group row">
//                             <div className="col-sm-9 offset-sm-3">
//                                 <button type="submit" className="btn btn-primary">Submit</button>
//                             </div>
//                         </div>
//                     </div>
                   
//                     </form>
                   
//         );
//     }//fin de render

//     componentDidMount() {
//         // Create a FormValidation instance
//         this.fv = formValidation(document.getElementById('demoForm'), 
//         {
//             fields: {
//                 firstName: {
//                     validators: {
//                         notEmpty: {
//                             message: 'Le prénom est requis'
//                         },
//                         stringLength: {
//                             min: 2,
//                             max: 30,
//                             message: 'Le prénom doit comporter entre 2 et 30',
//                         },
//                         regexp: {
//                             regexp: /^[a-zA-Z0-9_-]+$/,
//                             message: 'uniquement des lettres, chiffres, trait d\'union et underscore',
//                         },
//                     }
//                 },
//                 lastName: {
//                     validators: {
//                         notEmpty: {
//                             message: 'Le nom est requis'
//                         },
//                         stringLength: {
//                             min: 2,
//                             max: 30,
//                             message: 'Le prénom doit comporter entre 2 et 30 lettres',
//                         },
//                         regexp: {
//                             regexp: /^[a-zA-Z0-9_-]+$/,
//                             message: 'uniquement des lettres, chiffres, trait d\'union et underscore',
//                         },
//                     }
//                 },
//                 birthDate: {
//                     validators: {
//                         date: {
//                             format: 'DD/MM/YYYY',
//                             message: 'la valeur n\'est pas une date valide',
//                         }
//                     }
//                 },
//                 dateExamen: {
//                     validators: {
//                         date: {
//                             format: 'DD/MM/YYYY',
//                             message: 'la valeur nest pas une date valide',
//                         }
//                     }
//                 },
//                 phoneNumber: {
//                     validators: {
//                         phone: {
//                             country: 'FR',
//                             message: 'Entrez un numéro valide'
//                         }
//                     }
//                 },
//                 imageOrdo: {
//                     validators: {
//                         notEmpty: {
//                             message: 'SVP sélectionner une image'
//                         },
//                         file: {
//                             extension: 'jpeg,jpg,png,pdf',
//                             type: 'image/jpeg,image/png, application/pdf',
//                             maxSize: 3145728,   // 3072 * 1024
//                             message: 'le fichier choisi n\'est pas valide'
//                         },
//                     }
//                 },
//             },
//             plugins: {
//                 trigger: new Trigger(),
//               materialize: new Materialize(),
//                 submitButton: new SubmitButton(),
//                 icon: new Icon({
//                     valid: 'fa fa-check',
//                     invalid: 'fa fa-times',
//                     validating: 'fa fa-refresh',
//                 }),
//             },
//         }).on('core.form.valid', function() {

//             const formElement = document.querySelector('form');
//             const request = new XMLHttpRequest();
//             var formData = new FormData();
//             const FORMAT = "dd, MM Do YYYY";
//             const data = {};
//             // Append the text fields
//             const firstName = formElement.querySelector('[name="firstName"]');
//             const lastName = formElement.querySelector('[name="lastName"]');
//             const birthDate = formElement.querySelector('[name="birthDate"]');
//             const examen = formElement.querySelector('[name="examen"]');
//             const dateExamen = formElement.querySelector('[name="dateExamen"]');
//             const phoneNumber = formElement.querySelector('[name="phoneNumber"]');
//             const imageOrdo = formElement.querySelector('[name="imageOrdo"]');
//             data[firstName.name] = firstName.value;
//             data[lastName.name] = lastName.value;
//             const birthDateMoment = moment(birthDate.value,'DD/MM/YYYY').format('MM/DD/YYYY');
//             console.log(birthDateMoment)
//             data[birthDate.name] = moment(birthDateMoment, FORMAT);
//             data[examen.name] = examen.value;

//             const dateExamenMoment = moment(dateExamen.value,'DD/MM/YYYY').format('MM/DD/YYYY');
//             console.log(dateExamenMoment)
//             data[dateExamen.name] = moment(dateExamenMoment, FORMAT);
//             data[phoneNumber.name] = phoneNumber.value;
//             formData.append('data', JSON.stringify(data));
          
//           if (imageOrdo.files.length === 1) {
//             const file = imageOrdo.files[0];
//             const newName = new Date().getTime() + file.name;
//             formData.append(`files.imageOrdo`, file, newName);
//           } else {
//             for (let i = 0; i < imageOrdo.files.length; i++) {
//               const file = imageOrdo.files[i];
//               const newName = new Date().getTime() + file.name;
//               formData.append(`files.imageOrdo`, file, newName);

//             }
//         }
//             for (var p of formData) {
//                 console.log(p);
//               }
//               request.open('POST', `https://frozen-dawn-43758.herokuapp.com/ordonnances`);
  
//                 request.send(formData);
//                 document.getElementById("demoForm").reset();
//             // axios({
//             //     method: 'post',
//             //     url:  `http://localhost:1337/ordonnances`,
//             //     body: formData,
//             //     headers: {
//             //         'Content-Type': 'multipart/form-data'
//             //     }
//             // }).then(function(response) {
//             //    console.log(response)
//             // });
         
     

    

   
   

    
//             });

   
//     //    $('[name="dateExamen"]')
//     //     .datepicker({
//     //         format: 'dd/mm/yyyy'
//     //     })
//     //     .on('changeDate', function(e) {
//     //         // Revalidate the date field
//     //         fv.revalidateField('dateExamen');
//     //     });


        
//     }
// }

// export default OrdoForm



import React, {useState, useEffect} from 'react';
//import {  Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import '../vendors/formvalidation/dist/css/formValidation.css';
// Use the core library
import formValidation from '../vendors/formvalidation/dist/es6/core';
// Use the plugins
import Icon from '../vendors/formvalidation/dist/es6/plugins/Icon';
import Trigger from '../vendors/formvalidation/dist/es6/plugins/Trigger';
 // import Bootstrap from '../vendors/formvalidation/dist/es6/plugins/Materialize';
import SubmitButton from '../vendors/formvalidation/dist/es6/plugins/SubmitButton';
import Materialize from '../vendors/formvalidation/dist/es6/plugins/Materialize';

import moment from 'moment';
//import axios from 'axios';
import loadImage from 'blueimp-load-image';
import Swal from 'sweetalert2';

const OrdoForm = ({history}) => {
    //const [date, setDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());
    const [dateExamen, setDateExamen] = useState(new Date());
  
 //   const handleCalendarClose = () => console.log("Calendar closed");
  //  const handleCalendarOpen = () => console.log("Calendar opened");


  const imageRotate = (file) => {
    
    loadImage(
    file,
    function (img) {
        var node = document.getElementById("imageOrdoDiv");
      node.appendChild(img);
        console.log(img)
     
    },
    { maxWidth: 50 } // Options
  )}



  const submitAlert = () => {
    Swal.fire(
        'Bravo!',
        'votre ordonnance est envoyée',
        'success'
    ).then((result) => {history.push('/')})
}

  useEffect(() => {

       // Create a FormValidation instance
       // eslint-disable-next-line
       const fv = formValidation(document.getElementById('demoForm'), 
       {
           fields: {
               firstName: {
                   validators: {
                       notEmpty: {
                           message: 'Le prénom est requis'
                       },
                       stringLength: {
                           min: 2,
                           max: 30,
                           message: 'Le prénom doit comporter entre 2 et 30',
                       },
                       regexp: {
                           regexp: /^[a-zA-Z0-9_-]+$/,
                           message: 'uniquement des lettres, chiffres, trait d\'union et underscore',
                       },
                   }
               },
               lastName: {
                   validators: {
                       notEmpty: {
                           message: 'Le nom est requis'
                       },
                       stringLength: {
                           min: 2,
                           max: 30,
                           message: 'Le prénom doit comporter entre 2 et 30 lettres',
                       },
                       regexp: {
                           regexp: /^[a-zA-Z0-9_-]+$/,
                           message: 'uniquement des lettres, chiffres, trait d\'union et underscore',
                       },
                   }
               },
               birthDate: {
                   validators: {
                       date: {
                           format: 'DD/MM/YYYY',
                           message: 'la valeur n\'est pas une date valide',
                       }
                   }
               },
               dateExamen: {
                   validators: {
                       date: {
                           format: 'DD/MM/YYYY',
                           message: 'la valeur nest pas une date valide',
                       }
                   }
               },
               phoneNumber: {
                   validators: {
                       phone: {
                           country: 'FR',
                           message: 'Entrez un numéro valide'
                       }
                   }
               },
               imageOrdo: {
                   validators: {
                       notEmpty: {
                           message: 'SVP sélectionner une image'
                       },
                       file: {
                           extension: 'jpeg,jpg,png,pdf',
                           type: 'image/jpeg,image/png, application/pdf',
                           maxSize: 3145728,   // 3072 * 1024
                           message: 'le fichier choisi n\'est pas valide'
                       },
                   }
               },
           },
           plugins: {
               trigger: new Trigger(),
             materialize: new Materialize(),
               submitButton: new SubmitButton(),
               icon: new Icon({
                   valid: 'fa fa-check',
                   invalid: 'fa fa-times',
                   validating: 'fa fa-refresh',
               }),
           },
       }).on('core.form.valid', function() {

           const formElement = document.querySelector('form');
           const request = new XMLHttpRequest();
           var formData = new FormData();
           const FORMAT = "dd, MM Do YYYY";
           const data = {};
           // Append the text fields
           const firstName = formElement.querySelector('[name="firstName"]');
           const lastName = formElement.querySelector('[name="lastName"]');
           const birthDate = formElement.querySelector('[name="birthDate"]');
           console.log(birthDate)
           const examen = formElement.querySelector('[name="examen"]');
           const dateExamen = formElement.querySelector('[name="dateExamen"]');
           const phoneNumber = formElement.querySelector('[name="phoneNumber"]');
           const imageOrdo = formElement.querySelector('[name="imageOrdo"]');
           data[firstName.name] = firstName.value;
           data[lastName.name] = lastName.value;
           const birthDateMoment = moment(birthDate.value,'DD/MM/YYYY').format('MM/DD/YYYY');
           console.log(birthDateMoment)
           data[birthDate.name] = moment(birthDateMoment, FORMAT);
           data[examen.name] = examen.value;

           const dateExamenMoment = moment(dateExamen.value,'DD/MM/YYYY').format('MM/DD/YYYY');
           console.log(dateExamenMoment)
           data[dateExamen.name] = moment(dateExamenMoment, FORMAT);
           data[phoneNumber.name] = phoneNumber.value;
           formData.append('data', JSON.stringify(data));
         
         if (imageOrdo.files.length === 1) {
           const file = imageOrdo.files[0];
           const newName = new Date().getTime() + file.name;
           formData.append(`files.imageOrdo`, file, newName);
         } else {
           for (let i = 0; i < imageOrdo.files.length; i++) {
             const file = imageOrdo.files[i];
             const newName = new Date().getTime() + file.name;
             formData.append(`files.imageOrdo`, file, newName);

           }
       }
           for (var p of formData) {
               console.log(p);
             }
                request.open('POST', `https://frozen-dawn-43758.herokuapp.com/ordonnances`);
 
               request.send(formData);
               //document.getElementById("demoForm").reset();
               //history.push('/');
               submitAlert();
           // axios({
           //     method: 'post',
           //     url:  `http://localhost:1337/ordonnances`,
           //     body: formData,
           //     headers: {
           //         'Content-Type': 'multipart/form-data'
           //     }
           // }).then(function(response) {
           //    console.log(response)
           // });
        
    

   

  
  

   
           });
   
    
}, [history])
  
    return (
        <div>

        
        <form id="demoForm" method="POST">
                    <div className="container fluid">
                         {/* <div>
                             <Link to="/"><h5>Retour</h5></Link>
                         </div> */}
                   
                        <div style={{paddingTop:25}} className="form-group row">
                            <label className="col-sm-3 col-form-label">Prénom</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="firstName" />
                            </div>
                        </div>

                         {/* nom  */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nom</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" name="lastName" />
                            </div>
                        </div>
                      
                    

                         {/* date de naissance  */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">date de naissance</label>
                            <div>
                                <DatePicker 
                                dateFormat="dd/MM/yyyy"
                                selected={birthDate} 
                                onChange={date => setBirthDate(date)}
                                name="birthDate"
                                 />
                                
                        </div>
                        </div>

                        
                         {/* examen  */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">examen</label>
                            <div className="col-sm-6">
                                <select className="browser-default custom-select"
                                name="examen"
                                // value={examen} 
                                >
                                    
                                    <option value="IRM">IRM</option>
                                    <option value="Scanner">Scanner</option>
                                    
                                </select>
                            </div>
                        </div>

                         {/* dateExamen  */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">dateExamen</label>
                            <div>
                                <DatePicker 
                                dateFormat="dd/MM/yyyy"
                                selected={dateExamen} 
                                onChange={date => setDateExamen(date)} 
                                name="dateExamen"
                                />
                            </div>
                            
                        </div>

                         {/* numéro de téléphone  */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">numéro de téléphone</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" name="phoneNumber" />
                            </div>
                        </div>

                         {/* file  */}
                         <div className="form-group row">
                            <label className="col-sm-3 col-form-label">ordonnance</label>
                            <div className="col-sm-5">
                                <input type="file" className="form-control" name="imageOrdo" 
                                onChange={(e) => imageRotate(e.target.files[0])}/>
                            </div>
                        </div>
                        {/* apercu  */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">aperçu</label>
                            <div className="col-sm-5" id="imageOrdoDiv">
                            
                            </div>
                        </div>
                       
                        <div className="form-group row">
                            <div className="col-sm-9 offset-sm-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                   
                    </form>
      

    </div>
    );
  };




  export default OrdoForm;