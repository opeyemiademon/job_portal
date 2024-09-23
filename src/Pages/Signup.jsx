import React, { useState } from "react";
import HeaderComp from "../Components/Header.Comp";
import FooterComp from "../Components/Footer.Comp";
import axios from "axios";

const Signup =()=> {
const [user, setUser] = useState({

  name:'',
  email:'',
  password:'',
  confirm_password:'',
  city:'',
  telephone:''
})


const config = {
  headers: { 'content-type': 'multipart/form-data',
  'Authorization': `Bearer `}
} 

const [error, setError] = useState({

  name:'',
  email:'',
  password:'',
  confirm_password:'',
  city:'',
  telephone:''
})

const handleChange =(event)=>{
let {name, value} = event.target
setUser({...user, [name]:value})

}

const handleSubmit =(event)=>{
event.preventDefault();

let is_valid = true;

let err = error;

if(user.password.length<8){
  is_valid = false;
  err.password = 'Please enter minimum of 8 characters';
}


if(user.password !== user.confirm_password){
  is_valid = false;
  err.confirm_password = 'Password not march';
}


setError(err)


if(is_valid){


  const fd = new FormData();
  fd.append('name', user.name);
  fd.append('telephone', user.telephone);
  fd.append('email', user.email);
  fd.append('city', user.city);
  fd.append('password', user.password);

  let url = 'http://submit/url'

axios.post(url, fd, config)
.then(response =>{
  if(response.data.status==200){

console.log('Data saved successfully')
  }else{
    console.log('unabe to  save data')
  }
})

}





}

  return (
    <div>
      <HeaderComp page={"signup"} />
      <section className="job-bg user-page">
        <div className="container  text-center">
          <div className="user-account-content">
            <div className="user-account job-user-account">
              <h2>Create An Account</h2>
              <ul className="nav nav-tabs text-center" role="tablist">
                <li role="presentation">
                  <a
                    className="active"
                    href="#find-job"
                    aria-controls="find-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Find A Job
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active show"
                  id="find-job"
                >
                  <form action="#" onSubmit={handleSubmit}>

                    <div className="form-group">
                     <input type="text" className="form-control" name='name' value={user.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                      />
                      {error.password?
                      <span>{error.password}</span>:[]}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name='confirm_password'
                        value={user.confirm_password}
                        onChange={handleChange}
                      />
                      {error.confirm_password?
                      <span>{error.confirm_password}</span>:[]}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        name='telephone'
                        value={user.telephone}
                        onChange={handleChange}
                        pattern="[0-9]+"
                      />
                    </div>

                    <select className="form-control" name='city'
                        value={user.city}
                        onChange={handleChange}>
                      <option value="#">Select City</option>
                      <option value="#">London UK</option>
                      <option value="#">Newyork, USA</option>
                      <option value="#">Seoul, Korea</option>
                      <option value="#">Beijing, China</option>
                    </select>
                    <div className="checkbox">
                      <label className="pull-left checked" for="signing">
                        <input type="checkbox" name="signing" id="signing" /> By
                        signing up for an account you agree to our Terms and
                        Conditions{" "}
                      </label>
                    </div>
                    <button type="submit" className="btn">
                      Registration
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </div>
  );
}

export default Signup;
