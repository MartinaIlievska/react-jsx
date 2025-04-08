import { Component } from "react";
import { Button } from "../button/button";
import "./header.css"
class HeaderComponent extends Component {
    render() {
        return(
            <div className="header">
                <div className="div-header">
                <img src="https://opensource.fb.com/img/projects/react.jpg" alt="React logo" style={{height:" 50px"}}/>
                <h2>Welcome to our page!</h2>
                </div>
                 <Button />
            </div>
        )
    }
}
export default HeaderComponent