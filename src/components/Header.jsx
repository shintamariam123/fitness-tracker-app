import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    const handleNavigate = () => {
      //navigate to home page
      navigate('/home')
    }
  return (
    <div>
     

      <div style={{ width: '100%', backgroundColor: 'rgb(108, 145, 144)', height: ' 50px' }}>
        <p className='text-center p-3'>START YOUR 10 DAY FREE TRIAL NOW!</p>
      </div>
      <nav style={{ width: '100%', backgroundColor: 'rgb(198, 226, 223)', height: ' 60px' }}>
        <div className='container d-flex align-items-center  justify-content-between'>
        <Link  to={'/'} style={{ textDecoration: 'none' }}> 
           <img src="https://preview.colorlib.com/theme/fitzone/assets/images/logo.png" alt="" />
           {' '}
          </Link>
          <div style={{ padding: '20px 15px' }} className='d-flex align-items-center navs'>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Trainers</a></li>
            <li><a href="">Schedule</a></li>
            <li><a href="">Contact</a></li>
          </div>
        </div>
      </nav>
      <div className='home' style={{ width: '100%', height: '100vh' }}>
        <div style={{ width: '100%', height: '100vh' }} className='home-text'>
            <img src="https://static.wixstatic.com/media/3bb39c_eddacab222a34714892a252565a096f9~mv2.png/v1/fill/w_513,h_161,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SLF-PushYourSLF-Oat.png" alt="" />
          
            <p style={{ fontSize: '35px' }}>anywhere, anytime</p>
            <button onClick={handleNavigate}  className='start' style={{ padding: '15px 12px' }}>START YOUR 10 DAY FREE TRIAL</button>
        </div>

    </div>
      

    </div>
  )
}

export default Header