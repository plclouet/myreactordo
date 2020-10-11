import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import OrdoCard from '../components/ordo-card';

class OrdoList extends React.Component {

  // State of your application
  state = {
    ordonnances: [],
    error: null
  }

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get(`https://frozen-dawn-43758.herokuapp.com/ordonnances`);
      this.setState({ ordonnances: response.data })
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    const { error, ordonnances } = this.state

    // Print errors if any
    if (error) {
       return <div>An error occured: {error.message}</div>
    }

    return (
      <div>
      <h1 className="center">Ordonnances</h1>
      <div className="container"> 
        <div className="row">
        {/* {ordonnances.map(ordonnance => <li key={ordonnance.id}>{ordonnance.lastName} + {ordonnance.firstName}</li>)} */}
        {ordonnances.map(ordonnance => (
           <OrdoCard key={ordonnance.id} ordonnance={ordonnance}/>
             //  console.log(ordonnance.imageOrdo.url)
          ))}
       
        </div>
      </div>
       <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{position: 'fixed', bottom: '25px', right: '25px'}}
        to="/ordonnance/add">
        <i className="material-icons">add</i>
      </Link> 
    </div> 
    );
  }
}

export default OrdoList;