import PropTypes from "prop-types";
  



function Card(props) {
    return (
       
        // "./src/assets/tree.jpg" 
<div className="card">
<h3>Employee cards </h3>
    <img  className="card-img"src={props.images}    alt="hi"  ></img>
        <div className="card-content">       
<span className="card-label">{props.details}</span>
 {/* //techs */}
 <span className="card-label">{props.age}</span>
{/* age */}
<span className="card-label">{props.empstatus ? "Employeed":"Open for an opportunity"}</span>
{/* currently employee */}
<p className="card-description">
{props.name}</p>       
        </div>
   </div>
);


    
}
 {/* for checking the values validation */}

 Card.propTypes={
    images:PropTypes.string,
    details:PropTypes.string,
    age:PropTypes.number,
    empstatus:PropTypes.bool,
    name:PropTypes.string,
   

}

// {/* default value */}
// Card.defaultProps={
  
     
//      images:"./src/assets/tree.jpg",
//     details:"no tech mentioned",
//     age:0,
//     empstatus:false,
//     name:"Guest",



   
// }
export default Card