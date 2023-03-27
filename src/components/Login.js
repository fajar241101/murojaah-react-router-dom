import React from 'react'
import Button from './atoms/Button'
import Navbar from './Navbar'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Navbar />
                    <div className="card mt-5">
                        <div className="card-header">
                            Form Login
                            <div className="card-body">
                                <div className="form-group">
                                    <form>
                                        <label>Email</label>
                                        <input type="email" className='form-control' placeholder='xxxx@gmail.com' />
                                        <label>Password</label>
                                        <input type="password" className='form-control' placeholder='*********' />
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <Button variant="warning" label="Login" width="w-100" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login