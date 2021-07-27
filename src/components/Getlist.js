import React, { Component } from 'react'
import axios from 'axios'
import Display from './Display'

class Getlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             status:props.stat
        }
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=1')
        .then(response =>{
            console.log(response)
            this.setState({
                posts : response.data.data
            })
        })
        .catch(error =>{
            console.log(error)
        })
            
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
               
                {
                    this.props.stat?
                    // posts.map(post => <div key={post.id}>{post.first_name}</div> ):
                    posts.map(post => <Display  email={post.email} 
                                                firstname={post.first_name}
                                                lastname={post.last_name}
                                                avatar={post.avatar}
                                                key={post.id}></Display>):
                    null
                }
            </div>
        )
    }
}

export default Getlist
