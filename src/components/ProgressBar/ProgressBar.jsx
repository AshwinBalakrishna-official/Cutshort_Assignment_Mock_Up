import React from 'react'
import ProgressCircle from './ProgressCircle/ProgressCircle';
import './progressbar.css'

const Progressbar = (props) => {
  return (
    <>
      <div className='progress-bar'>

        {/* STAGE 1 */}

        {/* 
        Progress circle component for each step 
        
        props used
        1. stepNo - To identify which part of the form we are in
        2. nextStep - Wether or not there is a step after the current step to know wether or not we need a progress line after the circle
        3. setPg - To skip to a page
        4.fill - If the step is completed to fill the circle with colour
        5. percentage - To indicate how much with the inner div of progress has to show
        
        */}



        
        {props.step === 1 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} setPg={props.choosePg} fill={true} percentage={"50%"} />   
            <ProgressCircle stepNo={2} nextStep={true}  setPg={props.choosePg} fill={false}/>   
            <ProgressCircle stepNo={3} nextStep={true}  setPg={props.choosePg} fill={false}/>   
            <ProgressCircle stepNo={4} nextStep={false}   fill={false}/>
          </>      
          
        }

        {props.step === 2 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} setPg={props.choosePg} fill={true} percentage={"100%"}/>   
            <ProgressCircle stepNo={2} nextStep={true} setPg={props.choosePg} fill={true} percentage={"50%"}/>   
            <ProgressCircle stepNo={3} nextStep={true} setPg={props.choosePg} fill={false}/>   
            <ProgressCircle stepNo={4} nextStep={false}  fill={false}/>
          </>      
          
        }

        {props.step === 3 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} setPg={props.choosePg} fill={true} percentage={"100%"}/>   
            <ProgressCircle stepNo={2} nextStep={true} setPg={props.choosePg} fill={true} percentage={"100%"}/>   
            <ProgressCircle stepNo={3} nextStep={true} setPg={props.choosePg} fill={true} percentage={"50%"}/>   
            <ProgressCircle stepNo={4} nextStep={false} fill={false}/>
          </>      
          
        }

        {props.step === 4 &&
          <>
            <ProgressCircle stepNo={1} nextStep={true} fill={true}  setPg={props.choosePg}  percentage={"100%"}/>   
            <ProgressCircle stepNo={2} nextStep={true} fill={true}  setPg={props.choosePg}  percentage={"100%"}/>   
            <ProgressCircle stepNo={3} nextStep={true} fill={true}  setPg={props.choosePg}  percentage={"100%"}/>   
            <ProgressCircle stepNo={4} nextStep={false} fill={true}  setPg={props.choosePg} percentage={"100%"}/>
          </>      
          
        }

         
        </div>      
    </>
  )
}

export default Progressbar