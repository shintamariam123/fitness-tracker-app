import React from 'react'

function Footer() {
  return (
    <>
      
      <div style={{backgroundColor:'#1a1a1a',width:'100%',height:'600px',paddingTop:'150px'}}>
    
      <div className='  container d-flex align-items-center justify-content-between'>
        <div className='footer d-flex flex-column '>
       <li><a href="">About Us</a></li>
       <li><a href="">Terms & Conditions</a></li>

       <li><a href=""> Privacy Policy</a></li>

       <li><a href="">Rooms</a></li>

        </div>

        <div  className=' footer d-flex flex-column '>
       <li><a href="">The Rooms </a></li>
       <li><a href=""> About Us</a></li>

       <li><a href="">Contact Us</a></li>

       <li><a href="">Restaurant</a></li>

        </div>

        <div style={{paddingTop:'80px'}} className='footer d-flex flex-column '>
       <li><a href=""><i class="fa-solid fa-location-dot"></i> Address: </a></li>
       <p>198 West 21th Street, <br />Suite 721 New York NY 10016</p>
       <li><a href=""><i class="fa-solid fa-phone"></i> Phone:</a></li>
       <p>(+1) 435 3533</p>

       <li><a href=""><i class="fa-solid fa-envelope"></i> Email:</a></li>
       <p>info@domain.com</p>
  
        </div>
        <div className='footer d-flex flex-column '>
          <p style={{color:'white',fontSize:'16px'}}>Sign up for our newsletter </p>
          <input type="email" name="" id="" />
        </div>
      </div>
     
    
      </div>
    </>
  )
}

export default Footer