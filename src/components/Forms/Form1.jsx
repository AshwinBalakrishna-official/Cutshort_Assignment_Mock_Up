import React from 'react'
import './forms.css'
const Form1 = () => {
  return (
      <>
          {/* Form Heading content */}
          <div className='form-head'>
              <h3>Welcome! First things first..</h3>
              <p style={{color:"#8b909a"}}>You can always change them later.</p>
              
          </div>


          {/* Form Section */}
          <div className='d-flex justify-content-center'>
              
            <form className='form-layout'>
                
                {/* Input field 1 */}
                <div className="form-group">
                    <label htmlFor="Input1">Full Name</label>
                    <input type="text" className="form-control" id="Input1" placeholder="Example input" /> 
                </div>
                  
                 
                {/* Input field 2 */} 
                <div className="form-group">
                    <label htmlFor="Input2">Display Name</label>
                    <input type="text" className="form-control" id="Input2" placeholder="Another input" /> 
                </div>
                  


            </form>
          </div>
      </>
  )
}

export default Form1