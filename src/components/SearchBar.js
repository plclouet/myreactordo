import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
//import apiMovie, { apiMovieMap } from '../../conf/api.movie';

export default class SearchBar extends Component {
  
  submit = (values, actions) => {
    const query = '?' + Object.keys(values).map( k => `${ k }=${ values[k]}&`).join('');
    console.log(query)
    axios.get(`https://frozen-dawn-43758.herokuapp.com/ordonnances`+ query)
    //apiMovie.get('/search/movie' + query)
            .then( response => response.data )
            .then( ordoUpdate => {
            //   const movies = moviesApi.map(apiMovieMap)
            
               this.props.updateOrdonnances(ordoUpdate);
               actions.setSubmitting(false);
             })
            .catch( err => console.log(err));
        
  }
  
  render() {
    return (
      <Formik
        onSubmit={ this.submit }
        initialValues={ { lastName_contains: '', examen_contains: '' } }
      >
        { ({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
         

         <div className="container-fluid">
           <div className="row">
         
          <form  className="col s12" onSubmit={ handleSubmit }>
          <div className="row">
       

         
            <div className="form-group col s12 m6">
              <input className="form-control" name="lastName_contains"  placeholder="Search ..." onChange={ handleChange } onBlur={ handleBlur } />
            </div> {/* fin de row */}
       


          
            <div className="form-group col s12 m2">
            <select className="browser-default custom-select" name="examen_contains"  onChange={ handleChange } onBlur={ handleBlur }>
              <option value="">tous</option>
              <option value="IRM">IRM</option>
              <option value="Scanner">Scanner</option>          
            </select>
            </div>
       
          <div className="col" style={{marginTop:7}}>
            <button className="btn btn-small btn-success" type="submit" disabled={ isSubmitting } >Submit</button>
          </div> 
            
           
          </div>
          </form>
          </div>
          </div>

        )}

      </Formik>
    )
  }
}