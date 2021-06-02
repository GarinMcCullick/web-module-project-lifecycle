import React from 'react'
import axios from 'axios'

class UserSearch extends React.Component {

    state = {
        userData: []
    }

    clickHandler = () =>{
        axios.get("https://api.github.com/users/GarinMcCullick")
        .then((res)=>{
            this.setState({
                userData: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    

    render(){

        return(
            <div>
                <button onClick={this.clickHandler}>Get My Profile!</button>
                <div>
                    <p>{this.state.userData.name}</p>
                    <p>{this.state.userData.avatar_url}</p>
                </div>
            </div>
        )
    }
}

export default UserSearch