import React, { Component } from 'react'
import './styles.css'
import Getlist from './Getlist'


class Index extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            status:false,
            isloading:false
       }
   }
   

    Getusers(){
        
        console.log("Cicked");
        this.setState({
            status:true,
            isloading:true
        
        })
        setTimeout(()=>{
            this.setState({
                isloading:false
            })
        },3500)
        
    this.Getusers= this.Getusers.bind(this)
    }

    render() {
        return (
            <div className='body'>
                <div className='topdiv'>
                    <br></br><br></br><br></br>
                    <h1 className='heading'>INCARDS.in</h1>
                    <button className='getbutton' onClick={()=>this.Getusers()}>Get Users</button>
                    {/* <h4>{this.state.status}</h4> */}
                    {/* {this.state.status}?<Getlist/>:<h1>hi</h1> */}
                    {/* <Temp status={this.state.status}/> */}
                    {this.state.isloading?<h2>Fetching dTa...</h2>:null}
                    <Getlist stat={this.state.status}/>
                    {/* // {isloading?<h2>Fetching dTa...</h2>} */}
                </div>
                {/* <Getlist/> */}
            </div>
          
        )
    }
}

export default Index
