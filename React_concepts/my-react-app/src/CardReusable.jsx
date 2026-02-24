import PropTypes from "prop-types";
function CardReusable(props) {
    const category=props.category;
   // const items=props.item.sort((a,b)=>a.name.localeCompare(b.name))
   // const items=props.item.sort((a,b)=>a.age-b.age)

   const items=props.item.filter(item=>item.age>2)

     return (
<div className="card">
<h3>REUSABLE CARD </h3>
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


CardReusable.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({

    images:PropTypes.string,
    details:PropTypes.string,
    age:PropTypes.number,
    empstatus:PropTypes.bool,
    name:PropTypes.string,}))
   

}

{/* default value */}
CardReusable.defaultProps={
  
     
    category:"No category",
    items:[]



   
}
export default CardReusable