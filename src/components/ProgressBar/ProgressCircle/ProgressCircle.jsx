import React from 'react'
import './ProgressCircle.css'
const ProgressCircle = (props) => {
    
  return (
      <>
         
        <div className='progress-circle' style={props.fill?({backgroundColor:"#7f65e9", color:"white",border:"none"}):({})}>
              <p className='progress-circle-text' >{props.stepNo}</p>
        </div>

          {props.nextStep &&
              <div className="progress-line" style={props.percentage === "100%" ? ({ border: "1px solid #7f65e9" }) : ({})}>
                  {props.fill && <div className='inner-progress-line' style={{width:props.percentage}}></div>}
              </div>
          }
      </>
  )
}

export default ProgressCircle