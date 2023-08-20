import React from 'react'

export default function Button({onhandleadd}) {
  return (
    <>
       <button onClick={onhandleadd} className="addbtn"><i className="fa-solid fa-plus"></i></button>
    </>
  )
}
