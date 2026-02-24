function Clickable() {
    const handleclick = ()=>console.log("Click Image")
   // const handleclick2 = (data)=>console.log(data)
   const handleclick2 = (event)=> {
    console.log("on double click")
    console.log(event)
    event.target.src =
   event.target.src.includes("clickable.jpg")
       ? "./src/assets/clickable2.jpg"
       : "./src/assets/clickable.jpg";}
   
    return (
    
    <div style={{display:"flex",gap:"10px"}}>
        <h3>CLICKABLE CARD </h3>
    <div className="card">
    <img  className="card-img"  src= "./src/assets/clickable.jpg"   alt="hi" 
    onClick={handleclick}
    style={{borderRadius:"0%"
        ,width:"100%",height:"100%"}} ></img>
        
    </div>
    <div className="card">
    <img  className="card-img"  src= "./src/assets/clickable2.jpg"   alt="hi" 
    onDoubleClick={(e)=>handleclick2(e)}
    style={{borderRadius:"0%"
        ,width:"100%",height:"100%"}} ></img>
        
    </div> 
    </div>
    );
}

export default Clickable
