 
import  React,{useContext} from 'react'
import {MyContext} from './App'


function CardReusableWithoutProps() {

    const props=useContext(MyContext)


    console.log('props Sana',props)
    const category=props.category;
   // const items=props.item.sort((a,b)=>a.name.localeCompare(b.name))
   // const items=props.item.sort((a,b)=>a.age-b.age)

   const items=props.item.filter(item=>item.age>2)

     return (
<div className="card">
<h3>using useContext to pass values</h3>
    <h3>{category}</h3>
    <ol>
        {items.map(item=>
        <div key={item.id}>
    <img  className="card-img"src={item.images}    alt="hi"  ></img>
        <div className="card-content">       
<span className="card-label">{item.details}</span>
 {/* //techs */}
 <span className="card-label">{item.age+" "+"years"} </span>
{/* age */}
<span className="card-label">{item.empstatus ? "Employeed":"Open for an opportunity"}</span>
{/* currently employee */}
<p className="card-description">
{item.name}</p>       
</div>  </div>
)}
        </ol>
   </div>
);
}


 
export default CardReusableWithoutProps