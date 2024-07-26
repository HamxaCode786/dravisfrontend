

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon
// } from 'mdb-react-ui-kit';
// import social from '../../assets/image/social.png';
// import background from '../../assets/image/background.png';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Corrected hook usage

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Mock authentication function
//     const authenticateUser = (email, password) => {
//       if (email === 'f_99_super_admin@gmail.com' && password === '123') {
//         return { success: true, token: 'fake-jwt-token' };
//       }
//       return { success: false, message: 'Invalid credentials' };
//     };

//     const response = authenticateUser(email, password);

//     if (response.success) {

//       localStorage.setItem('token', response.token);
//       setError('');
//       navigate('/Homepage2');
//     } else {
//       setError(response.message);
//     }
//   };

//   return (
//     <MDBContainer fluid className="form_background">
//       <MDBRow>
//         <MDBCol sm='6'>
//           <div className='d-flex flex-row ps-5 pt-5 justify-content-center'>
//             <MDBIcon fas icon="fa-3x me-3" style={{ color: '#709085' }}/>
//             <span className="h1 fw-bold mb-0"><img className='form_logo' src={social} alt="logo"/></span> {/* Added alt attribute */}
//           </div>
//           <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
//       <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', color: 'white', fontSize: '30px' }}>Log in</h3>
//       <form className='responsive_form1' onSubmit={handleSubmit}>
//         <div className='mb-4 mx-5'>
//           <input
//             className='form-control form-control-sm'
//             type='email'
//             placeholder='Email address'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label className='mt-2' htmlFor='email'  style={{ color: 'white' }}>Email address</label>
//         </div>
//         <div className='mb-4 mx-5'>
//           <input
//             className='form-control form-control-sm'
//             type='password'
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <label className='mt-2' htmlFor='password' style={{ color: 'white' }}>Password</label>
//         </div>
//         <MDBBtn className="mb-4 px-5 mx-5 lb007" size='sm' type="submit">Login</MDBBtn>
//       </form>
//       {error && <p className="text-danger ms-5">{error}</p>}
//       <p className="small mb-5 pb-lg-1 ms-5 "><a className="text-muted1" href="#!">Forgot password?</a></p>
//       <p className=' ms-5 form_bhl'>Don't have an account? <a href="/registration" className="link-info1bhl">Register here</a></p>
//     </div>
//         </MDBCol>
//         <MDBCol sm='6' className='d-none d-sm-block px-0123'>
//           <img className='form_imageback' src={background} alt="background"/>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';
import social from '../../assets/image/social.png';
import background from '../../assets/image/background.png';
import axios from 'axios';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Corrected hook usage

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:5000/api/loginform', { email, password });
        localStorage.setItem('token', response.data.token);
        setError('');
        navigate('/Homepage2');
    } catch (error) {
        setError(error.response?.data.message || 'An error occurred');
    }
};
  return (
    <MDBContainer fluid className="form_background">
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5 justify-content-center'>
            <MDBIcon fas icon="fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0"><img className='form_logo' src={social} alt="logo"/></span> {/* Added alt attribute */}
          </div>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
      <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', color: 'white', fontSize: '30px' }}>Log in</h3>
      <form className='responsive_form1' onSubmit={handleSubmit}>
        <div className='mb-4 mx-5'>
          <input
            className='form-control form-control-sm'
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className='mt-2' htmlFor='email'  style={{ color: 'white' }}>Email address</label>
        </div>
        <div className='mb-4 mx-5'>
          <input
            className='form-control form-control-sm'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className='mt-2' htmlFor='password' style={{ color: 'white' }}>Password</label>
        </div>
        <MDBBtn className="mb-4 px-5 mx-5 lb007" size='sm' type="submit">Login</MDBBtn>
      </form>
      {error && <p className="text-danger ms-5">{error}</p>}
      <p className="small mb-5 pb-lg-1 ms-5 "><a className="text-muted1" href="/forgetpassword">Forgot password?</a></p>
      <p className=' ms-5 form_bhl'>Don't have an account? <a href="/registration" className="link-info1bhl">Register here</a></p>
    </div>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0123'>
          <img className='form_imageback' src={background} alt="background"/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;









