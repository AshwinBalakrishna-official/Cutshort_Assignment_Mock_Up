import React,{useState} from 'react';

const Form3 = () => {

    const[active,setActive]=useState(1)
  return (
      <>
      
          {/* Form Heading content */}
          <div className='form-head'>
              <h3>How are you planning to use Eden?</h3>
              <p style={{color:"#8b909a"}}>We'll streamline your setup experience accordingly.</p>
              
          </div>
          <div className="d-flex justify-content-center">

              <div className="row form-layout ">
                    {/* CARD-1 FOR Myself */}
                    <div className="col">
                        <div className="card card-myself" onClick={()=>{setActive(1)}} style={active ===1 ? ({borderColor:"#7f65e9"}):({})}>
                            <div class="card-body">
                              <h5 class="card-title-icon"><i className="fa-solid fa-user" style={active===1?({color:"#7f65e9"}) : ({})}></i></h5>
                              <p className="card-titled">For Myself</p>
                            <p class="card-text-left text-muted">Write better. Think more clearly. Stay organized </p>
                                
                            </div>
                        </div>
                    </div>

                  
                    {/* CARD-2 WITH MY TEAM */}
                    <div className="col">
                        <div className="card card-myself" onClick={()=>{setActive(2)}} style={active ===2 ? ({borderColor:"#7f65e9"}):({})}>
                            <div class="card-body">
                              <h5 class="card-title-icon"><i className="fa-solid fa-users" style={active===2?({color:"#7f65e9"}) : ({})}></i></h5>
                              <p className="card-titled">With My Team</p>
                            <p class="card-text-left text-muted">Wikis, docs, tasks & projects, all in one place </p>   
                            </div>
                        </div>
                    </div>
                </div>

          </div>
          


      </>
  )
}

export default Form3