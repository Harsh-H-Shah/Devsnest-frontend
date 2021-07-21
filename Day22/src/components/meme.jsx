import React,{useState} from "react";
import '../App.css';

const Meme = ({meme, setMeme}) => {
    const [form, setForm] = useState({
        template_id:meme.id,
        username:"helloworld123",
        password:"Helloworld",
        boxes: [],
    })
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url)
        .then((res)=>res.json())
        .then((data) => {
            {data.success===true?setMeme({...meme, url: data.data.url}):setMeme({...meme})}
        })
    };
    return ( 
        <div className="meme">
            <img src={meme.url} alt="0" />
            <div>
                {[...Array(meme.box_count)].map((e, index)=>(
                    <input type="text" 
                        key={index}
                        placeholder={`Meme caption ${index + 1}`} 
                        onChange={(e) => {
                            const newBoxes = form.boxes;
                            newBoxes[index] = {text: e.target.value};
                            setForm({...form, boxes:newBoxes});
                    }}
                    />
                ))}
            </div>
            <div>
                <button onClick={generateMeme}>Create Meme</button>
                <button onClick={()=>{setMeme(null)}}>Select Template</button>
            </div>
        </div>
    );
}

export default Meme;