
import { useState } from 'react';
import './App.css';
import VideoList from './VideoList';
import './VideoList.css'
import Form from './Form';


const initialintems = [
  {
    title:"mySQL Tutorials",
    views:"10K",
    id:1
  },
  {
    title:"React Tutorials",
    views:"100M",
    id:2
  },
  {
    title:"Nodejs Tutorials",
    views:"65M",
    id:3
  },
  {
    title:"MongoDB Tutorials",
    views:"15M",
    id:4
  },
]

function  App() {
  const [videos,setvideos] = useState(initialintems);
  const [edit,setEdit] = useState(false);

  function addvideos(videoitem){
 setvideos([...videos,{...videoitem,id:videos.length + 1}])
  }

  function ondelete(id){
   setvideos(videos.filter(element=>element.id !== id));
  }

  function onedit(id,edititem){
    const findvideo = videos.find(element=>element.id===id)
    setEdit(findvideo);
    setvideos(videos.map(element=>{
      if(element.id === id){
        return {
          ...element,
          title: element.title,
          views: element.views,
        }
      }
      else{
        return element
      }
    }))

  }
  return (
    <>
  <Form onedit={onedit} edit={edit} addvideos={addvideos}/>
  <section className='video'>
<VideoList edit={edit}  onedit={onedit} ondelete={ondelete} videos={videos}/>
  </section>
  </>
  );
}

export default App;
