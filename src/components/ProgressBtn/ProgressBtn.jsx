import React from 'react'
import './ProgressBtn.css'

const ProgressBtn = (props) => {
  return (
      <>
      
        <div>
              <button className='progress-btn' onClick={() => { props.pg<3 && props.choosePg(props.pg + 1) }}>{props.pg <3 ? "Create Workspace" : "Launch Eden"} </button>  
        </div>
      
      </>
  )
}

export default ProgressBtn