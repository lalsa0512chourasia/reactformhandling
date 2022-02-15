import React, {Component} from "react";
import Child from "./Child";

class Parent extends Component{

    render(){
        return(
            <div>
                <h1>ParentComponent</h1>
                <Child propValue="Hello World !! "/>
            </div>
        )
    }
}

export default Parent