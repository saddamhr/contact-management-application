import React, { Component } from 'react'
import axios from 'axios'

import './AllPersons.css'

class AllPersons extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      input: "",
      districtInput: "",
      filterdPerson: ""
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });

    if (this.state.input.length > 0) {
      const newFiltedPerson = this.state.persons.filter((i) => {
        return i.name.toLowerCase().match(this.state.input);
      })
      
      console.log(newFiltedPerson)
      this.setState({filterdPerson: newFiltedPerson})
      console.log(this.state.filterdPerson)
    }
  };

  handleDisChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });

    if (this.state.districtInput.length > 0) {
      const newFiltedPerson = this.state.persons.filter((i) => {
        return i.district.toLowerCase().match(this.state.districtInput);
      })
      console.log(newFiltedPerson)
      this.setState({filterdPerson: newFiltedPerson})
      console.log(this.state.filterdPerson)
    } 
    else {
    this.setState({filterdPerson: this.state.persons})
    }
  };

  componentDidMount = () => {
    this.getAllPersons();
  };

  getAllPersons = () => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        const data = response.data;
        this.setState({ persons: data, filterdPerson: data }); 
        console.log("Data has been received!!");
      })
      .catch(() => {
        console.log("Error retrieving data!!!");
        // alert("Error retrieving data!!!");
      });
  };

  displayAllUser = (persons) => {
    if (!persons.length) return null;

    // if (this.state.input.length > 0) {
    //   this.state.persons = this.state.persons.filter((i) => {
    //     return i.name.toLowerCase().match(this.state.input);
    //   })
    // }

    return persons.map((person, index) => (

      <div key={index} className='card' id='blog_info_card'>
        <div className='card-body'>
          <p className='card-text'>Name: {person.name}</p>
          <p className='card-text'>District: {person.district}</p>
          <p className='card-text'>Phone: {person.phone}</p>
          <p className='card-text'>Email: {person.email}</p>
        </div>

      </div>
    ));
  };

  render() {
    // if (this.state.input.length > 0) {
    //   const newFiltedPerson = this.state.persons.filter((i) => {
    //     return i.name.toLowerCase().match(this.state.input);
    //   })
    //   this.setState({filterdPerson: newFiltedPerson})
    // }

    // if (this.state.districtInput.length > 0) {
    //   this.state.persons = this.state.persons.filter((i) => {
    //     return i.district.toLowerCase().match(this.state.districtInput);
    //   })
    // }
    return (
      <div style={{ marginLeft: '220px' }} className='col-md-6'>
        <h1>All Persons List</h1>
        <div style={{ display: 'flex' }} className="div">
          <input
            type='text'
            name='input'
            value={this.state.input}
            onChange={this.handleChange}
            placeholder='Search by name'
          />

          <input
            type='text'
            name='districtInput'
            value={this.state.districtInput}
            onChange={this.handleDisChange}
            placeholder='Filter by district'
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          {
            this.displayAllUser(this.state.filterdPerson)
          }
        </div>
      </div>
    )
  }
}

export default AllPersons;