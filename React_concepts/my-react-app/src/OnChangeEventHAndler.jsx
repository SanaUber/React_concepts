import { useState } from "react";

function OnChangeEventHAndler() {
     const[color,setColor]=useState("#FFFFFF")
    const[radio,setRadio]=useState("radio1")
    const[Styleradio,StylesetRadio]=useState("#FFFFFF")
    const[optionColor,setoption]=useState("black")
    const[comment,setComment]=useState("")
let col;
   const handleColorChange=(event)=>
   { col=event.target.value
    setColor(event.target.value)
   }
 

   const handleRadioChange=(event)=>
    {debugger;
        const temp=event.target.value
        setRadio(event.target.value)
        StylesetRadio(temp==="radio2" ? color :"white")
    }

const handleDropdown=(event)=>
{
    setoption(event.target.value)
}
const handleComment=(event)=>
    {
        setComment(event.target.value)
    }
    return (<div style={{display:"flex",gap:"10px"}}>
        <h3>Change Handler</h3>
        <div className="card">
        <div style={{backgroundColor:color}}>
<input  type="color"  value={color}onChange={handleColorChange}></input>

 

    </div>
      <div ><br/>
<input type="radio"value="radio1" checked={radio==="radio1"}    onChange={handleRadioChange}/>radio1<br/>
<input type="radio" value="radio2" checked={radio==="radio2"}   onChange={handleRadioChange}/>radio2<br/>
<div style={{backgroundColor:Styleradio}}>
<input type="text" value={radio}   disabled></input>
</div>
<div><br/>
<select value={optionColor} type="text"   onChange={handleDropdown}  style={{color:optionColor,backgroundColor:color}}>
<option value="" disabled>Select</option>
    
    <option value="Orange" style={{color:"Orange"}}>Orange</option>
    <option value="Green" style={{color:"Green"}}>Green</option>
    <option value="Blue"style={{color:"Blue"}}>Blue</option>
    <option value="Red"style={{color:"Red"}}>Red</option>
    
    
    
     </select><br/>
     COLOR:<label  style={{color:optionColor}}>{optionColor}</label> 
</div>

<div>
<textarea value={comment} onChange={handleComment} placeholder="hi" style={{color:color}}></textarea><br/>
Comment:<label  style={{color:optionColor}}>{comment}</label> 
</div>

    </div>
    </div>
    
    </div>
    );
}

export default OnChangeEventHAndler

