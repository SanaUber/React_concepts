import Footer from "./Footer";
import Header from "./Header";
import Technologies from "./Technologies";
import Card from "./Card";
import Button from "./Button/Button";
import ButtonINline from "./ButtonINline"
import CardReusable from "./CardReusable"
import CardReusableWithoutProps from "./CardReusableWithoutProps"
import {createContext} from 'react'

import Clickable from "./Clickable";
import UseState from "./UseState";
import OnChangeEventHAndler from "./OnChangeEventHAndler";
import CRUDWithUpdaterFunc from "./CRUDWithUpdaterFunc";
import USeEffect from "./USeEffect";


export const MyContext= createContext()


function App() {
 const employees=

  [{id:1, name:"SANA SIDDIQUI",age:60, details:"React/Angular", empstatus:true, images:"./src/assets/emp1.jpg"},
    {id:2, name:"ABC",age:18, details:".NET" , empstatus:false, images:"./src/assets/emp2.jpg"},
    {id:3, name:"DEF",age:30, details:"JAVA", empstatus:false, images:"./src/assets/emp3.jpg"},
     ]
  
     const company=
     [{id:4, name:"SANA Comp",age:"3", details:"Software develpement", empstatus:true, images:"./src/assets/sanacomp.jpg"},
      {id:5, name:"ABC Comp",age:4, details:"Backend" , empstatus:true, images:"./src/assets/abcComp.jpg"},
      {id:6, name:"DEF Comp",age:1, details:"Security", empstatus:false, images:"./src/assets/defcomp.jpg"},
       ]
    
  
      
    
    return (<> 
    <Header/>
    <div style={{ display: "flex",gap:"10px" }}>
    <MyContext.Provider value={{ item: employees, category: "Employees" }}>
   
<CardReusableWithoutProps />
</MyContext.Provider>
<MyContext.Provider value={{ item: company, category: "Company" }}>
   
<CardReusableWithoutProps />
</MyContext.Provider>
</div>
    <hr>
    </hr>
 <div style={{ display: "flex",gap:"10px" }}>
    <CRUDWithUpdaterFunc  items={employees} category="Employess"  />
    <CRUDWithUpdaterFunc  items={company} category="Company"  />
    </div>
    <hr></hr>
    
 <div style={{ display: "flex",gap:"10px" }}>
    <USeEffect  items={employees} category="Employess"  />
    <USeEffect  items={company} category="Company"  />
    </div>
    <hr></hr>
    <Clickable/>
<hr></hr>
    <div style={{ display: "flex",gap:"10px" }}>
     <Card  name="SANA SIDDIQUI"  age={30} details="React/Angular" empstatus={false} images="./src/assets/emp1.jpg" />
     <Card name="ABC" age={18}  details=".NET"  empstatus={true} images="./src/assets/emp2.jpg" />
     <Card name="DEF" age={30} details="JAVA"  empstatus={true} images="./src/assets/emp3.jpg" />
     <Card  />
         
   </div>
   <hr></hr>
   <UseState item={employees} category="Employess"  />
   <hr></hr>
   <div style={{ display: "flex",gap:"10px" }}>
     <CardReusable  item={employees} category="Employess"  />
     <CardReusable  item={company} category="Company"  />
   </div>
   <hr></hr>
    <Technologies/>
    <hr></hr>
    <OnChangeEventHAndler/>
    <hr/>
      <Footer/>
      <div style={{ display: "flex",gap:"10px" }}>
      <Button/>
      <ButtonINline/></div>
      </>
     
    );
}

export default App
