import { useState ,useEffect} from "react";
import Swal from 'sweetalert2';
function USeEffect(props) {
//  if this component is re rendered      at the time of rendering that means everytime        useEffect(()={})
//if this component is mount              at the time of component is mounted once only     useEffect(()={},[])
//the state of value                      at the time of component's value changes        useEffect(()={},[value])

    // if this component is mount  useEffect(()={},[]) for this do at starting change the title of document to 
    //"ShowEffect"with some countervalueas 0 in the begining
    let [count,setcounter] =useState(0);
    let [isCounterClicked, setIsCounterClicked] = useState(false); // Track if button is clicked
    let [isRecUpdated, setRecUpdation] = useState(false); // Track if button is clicked


    useEffect(()=>{
document.title=`ShowEffect  `+`${count}  from  :`+`${props.category}`
    },[])
   
   const handlecounter=()=>{ 
    setcounter(c=>c+1)
    setIsCounterClicked(true); // Mark that the button was clicked
  
   }



  // if this component is re rendered   useEffect(()={}) for this do at starting change the alert of document to 
    //will be re rendenred and change evrytime counter change for respective properties
    useEffect(()=>{
        if (isCounterClicked) {
       
alert(`ShowEffect in rerendering `+`${count}  from  :`+`${props.category}`)
setIsCounterClicked(false);
 } } )
   
    let items = props.items  
    let [data1, setData] = useState([...props.items])
    let [data1meta, setDatameta] = useState([])
    let [data1metaData, setDatametaData] = useState("")


  // the state of value at the time of component's value changes useEffect(()={},[value])
 //if an employee is added display the employee/company added with alert and tittle change "added" 
    //instead of"ShowEffect"with some countervalueas
    useEffect(()=>{
       // document.title= `${dataName}`+`${props.category}`
       if(isRecUpdated)
    {   Swal.fire({
        title: `Your record is`+`: <b>${data1metaData}</b> for` +`!`,

        text:`${data1meta.name}`,
        icon: 'success',
      });  
    console.log('name', data1meta
    )  
      setRecUpdation(false) }
    
    
    },[data1])

   
   

    const [dataId, setDataId] = useState(Math.floor(Math.random() * 90) + 10)
    const [dataCategory, setDataCategory] = useState(props.category)

    const [dataName, setDataName] = useState("")
    const [dataImg, setDataImg] = useState("./src/assets/new.jpg")
    const [dataAge, setDataAge] = useState()
    const [dataEmpStatus, setDataEmpStatus] = useState("")
    const [dataDetails, setDataDetails] = useState("")
    const handleToAddData = () => { debugger;
        const newData = {
      //      category: dataCategory,
            id: dataId,
            name: dataName
            ,  age: parseInt(dataAge) || 0,  // Ensures a valid number
            details: dataDetails,
            empstatus: dataEmpStatus,
            images: dataImg,
            click:90
        }
        data1meta=[] 
      
        setDatameta(newData)
        setDatametaData("Added")
setData(prevData =>[...prevData ,newData])
 
      console.log(items,newData)
        setDataCategory(props.category)
        setDataId(Math.floor(Math.random() * 90) + 10)
        setDataName("")
        setDataImg("./src/assets/new.jpg")
        setDataAge()
        setDataEmpStatus(false)
        setDataDetails("")

        setRecUpdation(true)
    }
     
    

    const handleNameData = (event) => {
          setDataName(event.target.value)
     }
 
    const handleAgeData = (event) => {

      setDataAge(event.target.value)
      
    }
    const handleEmpStatusData = (event) => {
       setDataEmpStatus(event.target.value)
          }
    const handleDetailsData = (event) => {
 
        setDataDetails(event.target.value)


    }

    const handleToRemoveData=(index)=>
     {
        console.log('mete',data1meta)
        setDatameta(data1[index]);
        console.log('meta after',data1meta)
        setData(d=>d.filter((_,i)=>i!=index))  
      
        setDatametaData("Deleted")
        setRecUpdation(true)}

    return (<div>
        <button onClick={handlecounter} style={{display:"block"}}>Add counter{props.category}</button>
        
        <div style={{ display: "flex", gap: "10px" }}>
             <div className="card" >
                <h3>CRUD With <i>USeEffect Hook </i></h3>
                <h3>{props.category}</h3>
                {/* for ngfor map is used */}
                <ol>
                    {data1.map((item,index) =>
                        <div key={index} onClick={()=>handleToRemoveData(index)}>
                            <img className="card-img" src={item.images} alt="hi"  ></img>
                            <div className="card-content">
                                <span className="card-label">{item.details}</span>
                                {/* //techs */}
                                <span className="card-label">{item.age + " " + "years"} </span>
                                {/* age */}
                                <span className="card-label">{item.empstatus ? "Employeed" : "Open for an opportunity"}</span>
                                {/* currently employee */}
                                <p className="card-description">
                                    {item.name}</p>
                            </div>
                        </div>



                    )}






                </ol>

            </div>
            <div className="card">
                Category:<input type="text" value={dataCategory} disabled  ></input><br/>
                ID:<input type="number"  value={dataId} disabled  ></input><br/>
               Name: <input  type="text" value={dataName} onChange={handleNameData}></input><br/>
                Image:<label><input type="text" value={dataImg} disabled/><br/>
                <img className="card-img" src={dataImg} alt="hi"  ></img><br/>
                </label>
                Age:<input type="number" value={dataAge} onChange={handleAgeData}></input><br/>
                Details:<input type="text" value={dataDetails} onChange={handleDetailsData}> 
                </input><br/>

                Status:<label class="switch">
                
              <input type="checkbox" value={dataEmpStatus} 
               onChange={handleEmpStatusData}/>
                <span className="slider"></span> 
                </label><br/>
<button onClick={handleToAddData}>Add {props.category}</button>
            </div></div></div>
    );
}


export default USeEffect
