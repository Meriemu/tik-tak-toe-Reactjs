import React, { useState } from 'react'

const Case = ({ value, handleClickProps, disabledProps, winner }) => {
//    console.log(value)
  return (
    <button className='ttt-case' onClick={handleClickProps} disabled={disabledProps || winner  }>
        { value }
     </button>
  )
}

export default Case