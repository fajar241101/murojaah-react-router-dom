import Button from './atoms/Button'
import React from 'react'
import Navbar from './Navbar'

const Register = () => {
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
                                    <label>First Name</label>
                                    <input type="text" className='form-control' placeholder='' />
                                    <label>Last Name</label>
                                    <input type="text" className='form-control' placeholder='' />
                                    <label>Username</label>
                                    <input type="text" className='form-control' placeholder='' />
                                    <label>Email</label>
                                    <input type="email" className='form-control' placeholder="xxxx@gmail.com" />
                                    <label>Password</label>
                                    <input type="password" className='form-control' placeholder='*******' />
                                    <label>Phone Number</label>
                                    <input type="number" className='form-control' placeholder='(+62) '  />
                                </form>
                                </div>
                                <div className="card-footer">
                                    <Button variant="success" label="Register" width='w-100'/>

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

export default Register