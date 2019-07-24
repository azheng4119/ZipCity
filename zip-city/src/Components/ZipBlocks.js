import React from 'react'
import './ZipBlocks.css'

class ZipBlock extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <ul className = "ZipBlock">
                <li>{this.props.val.City}</li>
                <li>{this.props.val.State}</li>
                <li>{this.props.val.State}</li>
                <li>{this.props.val.State}</li>
                <li>{this.props.val.State}</li>
            </ul>
    }
}

class ZipBlocks extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        alert(this.props.val);
        return <div id ="ZipContainer">
            {/* {
            this.props.val.map(obj => {
                alert(this.props.val);
            return (
                <ZipBlock val={obj}/>
            )
        }) */}
        </div>
    }

}
export default ZipBlocks;