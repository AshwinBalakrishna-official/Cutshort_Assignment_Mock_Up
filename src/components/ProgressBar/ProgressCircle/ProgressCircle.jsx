import React from 'react'
import './ProgressCircle.css'
const ProgressCircle = (props) => {
    
  return (
      <>
         
        <div className='progress-circle' style={props.fill?({backgroundColor:"blueviolet", color:"white",border:"none"}):({})}>
              <p className='progress-circle-text' >{props.stepNo}</p>
        </div>

          {props.nextStep &&
              <div className="progress-line" style={props.percentage === "100%" ? ({ border: "1px solid blueviolet" }) : ({})}>
                  {props.fill && <div className='inner-progress-line' style={{width:props.percentage}}></div>}
              </div>
          }
      </>
  )
}

export default ProgressCircle