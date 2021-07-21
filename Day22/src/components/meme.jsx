import React from "react";
import '../App.css';

const Meme = ({meme, setMeme}) => {
    return ( 
        <div className="meme">
            <img src={meme.url} alt="0" />
            <div>
                {[...Array(meme.box_count)].map((e, index)=>(
                    <input type="text" placeholder={`Meme caption ${index + 1}`} />
                ))}
            </div>
            <div>
                <button>Create Meme</button>
                <button onClick={()=>{setMeme(null)}}>Select Template</button>
            </div>
        </div>
    );
}

export default Meme;