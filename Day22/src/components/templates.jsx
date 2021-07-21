import React, {useState} from "react";
import '../App.css'

const Template = ({templates, setMeme}) => {
    return (
    <div className='templates'>
      {templates.map(template=>(
        <div key={template.id} className='template' onClick={() => {
            setMeme(template);
        }}>
          <div
            style={{backgroundImage : `url(${template.url})`}} 
            className='image'></div>
        </div>
      ))}
    </div>
    );
};

export default Template;