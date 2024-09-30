import React, { useState } from "react";
import HeaderComp from "../Components/Header.Comp";
import FooterComp from "../Components/Footer.Comp";
import axios from "axios";
import Swal from "sweetalert2";
import { Notify } from "../Components/Notify";
import Select from 'react-select';
import { type } from "@testing-library/user-event/dist/type";
import cookies from 'js-cookies';

const Signup =()=> {
  const [selectedOption, setSelectedOption] = useState(null);
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
  fd.append('fullname', user.name);
  fd.append('telephone', user.telephone);
  fd.append('email_address', user.email);
  fd.append('city', user.city);
  fd.append('password', user.password);

  let url = 'http://solidrockschool.com.ng/api/people/application/create'

axios.post(url, fd, config)
.then(response =>{
  if(response.data.status==200){

    Notify({
      title:'Saved',
      message:response.data.message,
      type:'success'
    })
  }else{
    Notify({
      title:'error',
      message:response.data.message,
      type:'danger'
    })
  }
})

}





}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Alert =()=>{

  /* Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question"
  }); */

/* Notify({
  title:"Goodjob", 
  message:'Data saved successfully', 
  type:'success'
}) */
 
  cookies.setItem('username', 'adejohne');
  Notify({
    title:"Goodjob", 
    message:'Cookies stored', 
    type:'default'
  })

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

                   {/*  <Select
        onChange={setSelectedOption}
        options={options}
      />
 */}
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

                    <button type="button" className="btn btn-warning " onClick={Alert}>Alert</button>
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
