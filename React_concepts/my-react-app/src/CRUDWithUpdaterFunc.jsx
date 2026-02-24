import { useState } from "react";

function CRUDWithUpdaterFunc(props) {

    let items = props.items
    
    let [data1, setData] = useState([...props.items])
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
 
setData(prevData =>[...prevData ,newData])
 
      console.log(items,newData)
        setDataCategory(props.category)
        setDataId(Math.floor(Math.random() * 90) + 10)
        setDataName("")
        setDataImg("./src/assets/new.jpg")
        setDataAge()
        setDataEmpStatus(false)
        setDataDetails("")


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
        setData(d=>d.filter((_,i)=>i!=index))   }

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <div className="card" >
                <h3>CRUD With <i>Updater function </i></h3>
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
            </div></div>
    );
}

export default CRUDWithUpdaterFunc
