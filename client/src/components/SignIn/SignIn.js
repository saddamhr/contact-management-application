import React, { Component } from 'react'

import './SignIn.css'

const SignIn =() => {
    return (
        <div className="container admin-login">
            <div style={{margin: '20px'}}>
                {/* <a href="/" class="btn btn-lg btn-primary">Go Back</a> */}
            <h2 className="text-center mb-3 display-4">SignIn</h2>
            <hr className='admin-title-line' />
            {/* <h1 className="text-center">Admin Login</h1> */}
            <form method="POST" action="/api/login">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="username" placeholder="Please enter your email" name="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" placeholder="Please enter your password" type="password" name="password" class="form-control"
                        id="exampleInputPassword1" />
                </div>
                {/* <input style={{ backgroundColor: '#1BCE7C', borderColor: '#1BCE7C', color: '#fff', fontWeight: 'bold' }} type='submit' value='POST' /> */}
                <button style={{ backgroundColor: '#1BCE7C', borderColor: '#1BCE7C', color: '#fff', padding: '5px'}} type="submit" class="btn btn-primary btn-lg btn-block mt-4">SignIn</button>
                {/* <button type="submit" class="btn btn-primary">Login</button> */}
            </form>
            </div>
        </div>        
    )
}

export default SignIn;