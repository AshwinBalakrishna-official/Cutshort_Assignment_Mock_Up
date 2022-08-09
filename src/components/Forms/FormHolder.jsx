import React from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

const FormHolder = (props) => {
  return (
    <div className='my-3 pt-5 text-center'>
          {
              props.step ===1 &&
              <>
                <Form1 />
              </>
          }

          {
              props.step ===2 &&
              <>
                <Form2 />
              </>
          }

          {
              props.step ===3 &&
              <>
                <Form3 />
              </>
          }

          {
              props.step ===4 &&
              <>
                <Form4 />
              </>
          }

    
             
    </div>
  )
}

export default FormHolder