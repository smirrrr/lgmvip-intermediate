import React,{ useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Display from './components/Display'
import './components/styles.css'
import InfiniteScroll from 'react-infinite-scroll-component';






function Two() {
    const [studentList, setStudentList] = useState([]);
    const[templist,setTemplist]=useState([])
    const [loading, setLoading] = useState(false);
   
    const[first,setFirst]=useState('LOAD USERS')
    function Clicked(){

            setLoading(true);
            console.log("clicked")  
           
            setFirst('DISPLAY')
            axios.get('https://reqres.in/api/users?page=1').then(res=>{
                  setTemplist(res.data.data);
                  setStudentList((prev)=>[...prev,...templist]);
                  setLoading(false);
    })   
    }
 
     
    return (
      <div className="App">
          <div>
              <button className="fetch-button" onClick={Clicked}>
              {first}  
              </button>
              <br />
          </div>


        
        {loading && <img src='/orange.png' alt="" className='con'/>}        
             <InfiniteScroll dataLength={studentList.length} next={()=>Clicked()} hasMore={true} className='div'>      
            {  studentList.map(studentList =>             
                <Display  email={studentList.email} 
                firstname={studentList.first_name}
                lastname={studentList.last_name}
                avatar={studentList.avatar}
                key={studentList.id}></Display>               
          )}
          </InfiniteScroll>
         
      </div>
    );
  }
  
  export default Two;