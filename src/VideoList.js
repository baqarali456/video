import React from 'react'

export default function VideoList({videos,ondelete,onedit}) {
   
  return (
    <>
   { videos.map((element)=>{
        return <div key={element.id} className='videolist'>
    <img src={`https://picsum.photos/id/1/200/300`} alt="" />
    <h2>{element.title}</h2>
    <p>{element.views}</p>
    <button onClick={()=>ondelete(element.id)} className="close">X</button>
    <button onClick={(e)=>onedit(element.id)} className="edit"><i className="fa-solid fa-pen-to-square"></i></button>
    </div>
    })}

    
  
  </>
  )
}
