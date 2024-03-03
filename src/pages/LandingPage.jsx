import React from 'react'

function LandingPage() {
  
  
  return (
    <>
   

    <div style={{ backgroundColor: 'white', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className='container d-flex align-item-center justify-content-between'>
            <div style={{ width: '600px', marginTop: '100px' }}>
                <h3 style={{ textTransform: 'uppercase', color: 'black' }}>welcome to our best fitness club</h3>
                <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis saepe nostrum facilis explicabo officia autem! Ex ut natus excepturi. Obcaecati et incidunt est asperiores possimus aspernatur nesciunt ea dolores?
                    Asperiores rerum autem voluptatibus adipisci aliquam ex aliquid facilis, cumque suscipit nisi ratione at, id consequatur saepe laborum excepturi repellendus ipsa consequuntur a iure cupiditate. Officiis itaque modi saepe provident?</p>
                <button style={{ backgroundColor: 'rgb(108, 145, 144)', color: 'white' }} className='btn  border rounded'>Learn More</button>
            </div>
            <div style={{ width: '600px' }}>
            <img src="https://preview.colorlib.com/theme/fitzone/assets/images/about.png" alt="" />

            
            </div>
        </div>
    </div>




    <div className='d-flex align-items-center flex-column pt-5' style={{ width: '100%', height: '700px', backgroundColor: 'white' }}>
        <div className='container d-flex align-items-center justify-content-around'>
            <div>
                <div className='img d-flex align-items-center justify-content-center' style={{ backgroundColor: 'green', width: '80px', height: '80px', borderRadius: '100%' }}>
                    <img src="https://preview.colorlib.com/theme/fitnessgym/img/core-img/slim-down.png" alt="" />
                </div>
                <h4 style={{ color: 'black' }}>Business School</h4>
                <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Praesentium, quia. Magni</p>
            </div>
            <div style={{marginLeft:'-40px'}}>
                <div className='img d-flex align-items-center justify-content-center' style={{ backgroundColor: 'green', width: '80px', height: '80px', borderRadius: '100%' }}>
                    <img src="https://preview.colorlib.com/theme/fitnessgym/img/core-img/lotus-position.png" alt="" />
                </div>
                <h4 style={{ color: 'black' }}>Fitness Pro</h4>
                <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Praesentium, quia. Magni</p>
            </div>
            <div>
                <div className='img d-flex align-items-center justify-content-center' style={{ backgroundColor: 'green', width: '80px', height: '80px', borderRadius: '100%' }}>
                    <img src="https://preview.colorlib.com/theme/fitnessgym/img/core-img/apple.png" alt="" />
                </div>
                <h4 style={{ color: 'black' }}>Yoga Courses</h4>
                <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Praesentium, quia. Magni</p>
            </div>
        </div>

        <div className='container d-flex align-items-center justify-content-around mt-5'>
            <div>
                <div className='img d-flex align-items-center justify-content-center' style={{ backgroundColor: 'green', width: '80px', height: '80px', borderRadius: '100%' }}>
                    <img src="https://preview.colorlib.com/theme/fitnessgym/img/core-img/dumbbell.png" alt="" />
                </div>
                <h4 style={{ color: 'black' }}>Diet Specialists</h4>
                <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Praesentium, quia. Magni</p>
            </div>
            <div>
                <div className='img d-flex align-items-center justify-content-center' style={{ backgroundColor: 'green', width: '80px', height: '80px', borderRadius: '100%' }}>
                    <img src="https://preview.colorlib.com/theme/fitnessgym/img/core-img/swimming.png" alt="" />
                </div>
                <h4 style={{ color: 'black' }}>Swimming Pool</h4>
                <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Praesentium, quia. Magni</p>
            </div>
            <div>
                <div className='img d-flex align-items-center justify-content-center' style={{ backgroundColor: 'green', width: '80px', height: '80px', borderRadius: '100%' }}>
                    <img src="https://preview.colorlib.com/theme/fitnessgym/img/core-img/stationary-bike.png" alt="" />
                </div>
                <h4 style={{ color: 'black' }}>Spinning Class</h4>
                <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Praesentium, quia. Magni</p>
            </div>
        </div>
    </div>
</>
  )
}

export default LandingPage