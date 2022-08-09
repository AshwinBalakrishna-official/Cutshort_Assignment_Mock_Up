import React from 'react';
import './forms.css'

const Form2 = () => {
  return (
    <>
          {/* Form Heading content */}
          <div className='form-head'>
              <h3>Lets set up a home for all your work</h3>
              <p style={{color:"#8b909a"}}>You can always create another workspace later.</p>
              
          </div>


          {/* Form Section */}
          <div className='d-flex justify-content-center'>
              
            <form className='form-layout'>
                
                {/* Input field 1 */}
                <div className="form-group">
                    <label htmlFor="Input1">Workspace Name</label>
                    <input type="text" className="form-control" id="Input1" placeholder="Eden" /> 
                </div>
                  
                 
                {/* Input field 2 */} 
                <div className="form-group">
                    <label htmlFor="Input2">Workspace URL <span className='text-muted' style={{fontSize:"12px"}}>(optional)</span></label>
                      <div className="input-group mb-3">
                          {/* prepended example */}
                        <div class="input-group-prepend">
                            <span className="input-group-text text-muted" id="basic-addon1">www.example.com/ </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Example" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                  


            </form>
          </div>
      </>
  )
}

export default Form2