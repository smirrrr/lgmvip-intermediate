                 TEMPORARY OF APP


import React,{ useState,useEffect} from 'react';
import './App.css';
// import Index from './components/Index'
// // import SocialCard from './SocialCard'
import axios from 'axios';
import Display from './components/Display'
import './components/styles.css'
// import Spinner from './Loader'




// function Two(){
//     const[studentList,setStudentList]=useState([]);
//     const[loading,setLoading]=useState(false);
//     let statuss= false
//     useEffect(()=>{
//       axios.get('https://reqres.in/api/users?page=1').then(res=>{
//         setStudentList(res.data.data);
//         setLoading(true);
//       })
//     },[])
//     console.log(studentList);
//     console.log(loading);
  
    
  
    
//     return(
//       <div className="Two">
//        }
        
//         <h1>{statuss}</h1>
  
        
//         {loading? studentList.map(studentList =>{
//           return<Display  email={studentList.email} 
//           firstname={studentList.first_name}
//           lastname={studentList.last_name}
//           avatar={studentList.avatar}
//           key={studentList.id}></Display>
//         }):<h1>Loading</h1>}
      
//       </div>
//     );
//   }

//   export default Two

function Two() {
    const [studentList, setStudentList] = useState([]);
    const [loading, setLoading] = useState(false);
    // let statuss = false;
    
    console.log(studentList);
    console.log(loading);
   function Clicked(){
     setLoading(true);
     console.log("clicked")
    //  console.log(statuss)
       axios.get('https://reqres.in/api/users?page=1').then(res=>{
              setStudentList(res.data.data);
              setLoading(false);
            })
  
      }
  
    // console.log(`${statuss} nowwwsa`)
    return (
      <div className="App">
        {/* <button onClick={Clicked}>CLisckkk</button> */}
  
        {/* <h1>{statuss}</h1> */}
        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={Clicked}>
            GET USERS
          </button>
          <br />
        </div>
        {loading ?  (
          <img src="twitter.png"></img>
        ):(
            
          studentList.map(studentList => 
            
                
                
                <Display  email={studentList.email} 
                firstname={studentList.first_name}
                lastname={studentList.last_name}
                avatar={studentList.avatar}
                key={studentList.id}></Display>
               
            
          )
        ) }
      </div>
    );
  }
  
  export default Two;
