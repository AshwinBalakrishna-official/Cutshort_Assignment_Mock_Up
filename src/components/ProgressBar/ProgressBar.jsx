import React from 'react'
import ProgressCircle from './ProgressCircle/ProgressCircle';
import './progressbar.css'

const Progressbar = (props) => {
  return (
    <>
      <div className='progress-bar'>
        {props.step === 1 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} fill={true} percentage={"50%"} />   
            <ProgressCircle stepNo={2} nextStep={true} fill={false}/>   
            <ProgressCircle stepNo={3} nextStep={true} fill={false}/>   
            <ProgressCircle stepNo={4} nextStep={false}  fill={false}/>
          </>      
          
        }

        {props.step === 2 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} fill={true} percentage={"100%"}/>   
            <ProgressCircle stepNo={2} nextStep={true} fill={true} percentage={"50%"}/>   
            <ProgressCircle stepNo={3} nextStep={true} fill={false}/>   
            <ProgressCircle stepNo={4} nextStep={false}  fill={false}/>
          </>      
          
        }

        {props.step === 3 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} fill={true} percentage={"100%"}/>   
            <ProgressCircle stepNo={2} nextStep={true} fill={true} percentage={"100%"}/>   
            <ProgressCircle stepNo={3} nextStep={true} fill={true} percentage={"50%"}/>   
            <ProgressCircle stepNo={4} nextStep={false}  fill={false}/>
          </>      
          
        }

        {props.step === 4 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} fill={true}   percentage={"100%"}/>   
            <ProgressCircle stepNo={2} nextStep={true} fill={true}   percentage={"100%"}/>   
            <ProgressCircle stepNo={3} nextStep={true} fill={true}   percentage={"100%"}/>   
            <ProgressCircle stepNo={4} nextStep={false} fill={true}  percentage={"100%"}/>
          </>      
          
        }

         
        </div>      
    </>
  )
}

export default Progressbar