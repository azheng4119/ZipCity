import React from 'react'
import './ZipBlocks.css'

class ZipBlock extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <ul className = "ZipBlock">
                <li>{this.props.val.City}</li>
                <li>State: {this.props.val.State}</li>
                <li>Location: {this.props.val.Lat},{this.props.val.Long}</li>
                <li>Population: {this.props.val.EstimatedPopulation}</li>
                <li>Wages: {this.props.val.TotalWages}</li>
            </ul>
    }
}

class ZipBlocks extends React.Component{
    render(){
        return <div id = "ZipContainer">
        {
            this.props.val.map(obj => {
                return (
                    <ZipBlock val={obj}/>
                )
            })
        }
    </div>

    }   
}  
export default ZipBlocks;