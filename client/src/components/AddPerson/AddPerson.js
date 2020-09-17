import React from "react";
import axios from "axios";

import './AddPerson.css';

class App extends React.Component {
    state = {
        name: "",
        district: "",
        phone: "",
        email: "",
    };

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            name: this.state.name,
            district: this.state.district,
            phone: this.state.phone,
            email: this.state.email
        };

        axios({
            url: "http://localhost:5000/api/save",
            method: "POST",
            data: payload,
        })
            .then(() => {
                console.log("Data has been sent to the server");
                this.resetUserInputs();
                // this.getBlogPost();
                alert('Person added to the mongoDB!')
            })
            .catch(() => {
                console.log("ERROR!!!");
            });
    };

    resetUserInputs = () => {
        this.setState({
            title: "",
            body: "",
        });
    };



    render() {
        return (


            <div style={{marginTop: '20px'}} className="container admin-login">
                <div style={{ margin: '20px' }}>
                    
                    <h2 className="text-center mb-3 display-4">Add New User</h2>
                    <hr className='admin-title-line' />
                    <form className='adminblog-form' onSubmit={this.submit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="username" placeholder="Please enter your email" name="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                type='text'
                                name='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder='Enter name'
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">District</label>
                            <input type="password" placeholder="Please enter your password" type="password" name="password" class="form-control"
                                id="exampleInputPassword1"
                                type='text'
                                name='district'
                                value={this.state.district}
                                onChange={this.handleChange}
                                placeholder='Enter district'
                            />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Phone</label>
                            <input type="password" placeholder="Please enter your password" type="password" name="password" class="form-control"
                                id="exampleInputPassword1"
                                type='text'
                                name='phone'
                                value={this.state.phone}
                                onChange={this.handleChange}
                                placeholder='Enter phone'
                            />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="password" placeholder="Please enter your password" type="password" name="password" class="form-control"
                                id="exampleInputPassword1"
                                type='text'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder='Enter Email'
                            />
                        </div>
                        <button style={{ backgroundColor: '#1BCE7C', borderColor: '#1BCE7C', color: '#fff', padding: '5px' }} type="submit" class="btn btn-primary btn-lg btn-block mt-4">Add Person</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;