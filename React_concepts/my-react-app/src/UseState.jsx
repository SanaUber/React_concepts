import React, { useState } from "react";
function UseState(props) { 
    
    props.item.forEach((item, index) => {
        // item.click = `Click ${index + 1}`; // This will set "Click 1", "Click 2", etc.
         item.click = index + 1 
    });
    
    
    const data=[]
    for(let i=0;i<props.item.length;i++)
    data.push({category:props.category,items:props.item[i]})

console.log('data.push({category:props.category,items:props.item[i]})',data)
    const defaultV = {
        category: "No category",
        item: {
            name: "new",
            details: "no details",
            age: 0,
            empstatus: true,
            images: "./src/assets/guest1.jpg",
            click:0
        }
    };
    
    // Assign item[0]
     
    
    let[changingProps, changeProp ]=useState(defaultV)

   
    debugger;
    // const changedProp = () => {    
    //     changeProp({ 
    //         category: data[0].category,
    //         item: [data[0].items[0], ...data[0].items.slice(1)] // Insert at 0th index
    //     });
    // };
 

     const changedProp = () => {    debugger;

        let temp=0,temp2=data.length 
        if(changingProps.item.click>=temp2)
            changingProps.item.click=0
      else if(changingProps.item.click==0)
        changingProps.item.click=changingProps.item.click 
      
      temp=changingProps.item.click
        changeProp({ 
            category: data[temp].category,
            item:  data[temp].items });
            if(changingProps.item.click<temp)
            changingProps.item.click=changingProps.item.click+1
        else if(changingProps.item.click==temp)
        changingProps.item.click=0
    };
    
    console.log('changingProps,data',changingProps,data)
    return (   
        <div style={{display:"flex",gap:"10px"}}>
            <h3>UseState hook</h3>
    
    <div className="card">
       
          <img  className="card-img"  src={ changingProps.item.images} alt="hi" 
        onClick={changedProp}
        style={{borderRadius:"0%"
            ,width:"70%",height:"70%"}} ></img>




<div className="card-content">       
<span className="card-label">{changingProps.item.details}</span>
 {/* //techs */}
 <span className="card-label">{changingProps.item.age}</span>
{/* age */}
<span className="card-label">{changingProps.item.empstatus ? "Employeed":"Open for an opportunity"}</span>
{/* currently employee */}
<p className="card-description">
{props.name}</p>       
        </div>
         </div>
        </div>
        );
}

export default UseState

