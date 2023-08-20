import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form({ addvideos, edit,onedit }) {
  const [videoadd, setVideoadd] = useState({
    title: "",
    views: "",
  });


  // onchange setform state
  function handleChange(e) {
    const { value, name } = e.target;
    setVideoadd({
      ...videoadd,
      [name]: value,
    });
  }

  // add videos
  function handleadd() {
    addvideos(videoadd);
    setVideoadd({
      title: "",
      views: "",
    });
  }

  // handle edit
  function handleedit(){
    onedit(videoadd)
  }

  
   // edit effect 
  useEffect(() => {
    if (edit) {
      setVideoadd(edit);
    }
  }, [edit]);

  return (
    <section className="form">
      <Input
        onChange={handleChange}
        type="text"
        value={videoadd.title}
        placeholder="Title"
        name="title"
      />
      <Input
        onChange={handleChange}
        type="text"
        value={videoadd.views}
        placeholder="Views"
        name="views"
      />
      <div className="btn-container">
        <Button onhandleadd={handleadd} />
      </div>
    </section>
  );
}
