import { Component } from "react";
import "./userProfile.css"

class UserProfileClass extends Component {
    render() {

        const { name, age, hobby } = this.props;

        return (
            <div className="card">
                <h1>Name: {name}</h1>
                <p>Age: {age}</p>
                <p>Hobby: {hobby}</p>
            </div>
        )
    }
}
export default UserProfileClass