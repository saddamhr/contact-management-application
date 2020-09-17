import React from "react";
import axios from "axios";

import './AddPerson.css';

class App extends React.Component {
    state = {
        name: "",
        district: "",
        phone: "",
        email: "",
        persons: []
    };

    // constructor(props) {
    //     super(props);
    //     this.deleteStudent = this.deleteStudent.bind(this);
    //     console.log("PROPS", props);
    // }

    // componentDidMount = () => {
    //     this.getBlogPost();
    // };

    // getBlogPost = () => {
    //     axios
    //         .get("/api")
    //         .then((response) => {
    //             const data = response.data;
    //             this.setState({ posts: data, loading: false });
    //             console.log("Data has been received!!");
    //         })
    //         .catch(() => {
    //             console.log("Error retrieving data!!!");
    //             // alert("Error retrieving data!!!");
    //         });
    // };

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

    // displayBlogPost = (posts) => {
    //     if (!posts.length) return null;

    //     return posts.map((post, index) => (

    //         <div className='card' id='blog_info_card'>
    //             <div className='card-body'>
    //                 <h6 className='card-subtitle mb-2 '>{post.title}</h6>
    //                 <hr className='hr_line' />
    //                 <p className='card-text'>{post.body}</p>
    //                 <div className='collapse' id='card1'>
    //                     <p>
    //                         grants for pensioners are provided by the ‘Big Six’ energy
    //                         suppliers – Scottish Power, British Gas, EON, EDF, SSE and nPower
    //                         – as part of their responsibility to help in the reduction of
    //                         carbon emissions across domestic households. Over the past few
    //                         years, we have supplied thousands of homes, including free boiler
    //                         replacement for pensioners across the UK, helping them drive down
    //                         the costs of heating their homes and reducing their overall carbon
    //                         footprint. This has huge benefits for the bank balances of
    //                         pensioners as well as a positive impact on the wider environment.
    //         </p>
    //                     <h4> How do I access boiler grants for pensioners? </h4>

    //                     <p>
    //                         If you or anyone else in your household receives Pension Credits,
    //                         or any other benefits from the UK government, then it’s highly
    //                         likely that you’ll be eligible for our boiler replacement grant
    //                         scheme. Alongside Pension Credits, the other income-related
    //                         benefits include:
    //           <ul>
    //                             <li> Child Tax Credit </li>
    //                             <li> Income related Employment Support Allowance </li>
    //                             <li> Income based Job Seekers Allowance </li>
    //                             <li> Income Support </li>
    //                         </ul>
    //                     </p>
    //                 </div>
    //             </div>
    //             <div className='btn-group update-dlt'>
    //                 <button
    //                     onClick={() => this.changeToUpdate(post)}
    //                     className='btn readMore'
    //                     type='button'
    //                     style={{ margin: "1rem" }}
    //                 >
    //                     UPDATE
    //       </button>

    //                 <button
    //                     onClick={() => this.deleteStudent(post._id)}
    //                     className='btn readMore'
    //                     type='button'
    //                 >
    //                     DELETE
    //       </button>
    //             </div>
    //         </div>
    //     ));
    // };



    render() {
        return (
            <div className='container'>
                <div className="card-margin">
                    <h2 className="text-center mb-3 display-4">Add New Person</h2>
                    <hr className='admin-title-line' />
                    <div className='row mb-3'>
                        <div className='col-md-12 sm-margin'>
                            <form className='adminblog-form' onSubmit={this.submit}>
                                <div className='form-input'>
                                    <input
                                        type='text'
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        placeholder='Enter name'
                                    />
                                </div>
                                <div className='form-input'>
                                    <input
                                        type='text'
                                        name='district'
                                        value={this.state.district}
                                        onChange={this.handleChange}
                                        placeholder='Enter district'
                                    />
                                </div>

                                <div className='form-input'>
                                    <input
                                        type='text'
                                        name='phone'
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        placeholder='Enter phone'
                                    />
                                </div>
                                <div className='form-input'>
                                    <input
                                        type='text'
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder='Enter Email'
                                    />
                                </div>
                                <input style={{ backgroundColor: '#1BCE7C', borderColor: '#1BCE7C', color: '#fff', fontWeight: 'bold' }} type='submit' value='ADD' />

                            </form>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default App;