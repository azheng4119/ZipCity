import React from 'react'
import './CityBlocks.css'

class CityBlock extends React.Component{
    render(){
        return(
            <ul className = "CityBlock">
                <li>{this.props.val}</li>
            </ul>
        )
    }
}

class CityBlocks extends React.Component{
    render(){
        return(
            <div id = "CityContainer">
            {
            this.props.val.map(obj => {
                return (
                    <CityBlock val={obj}/>
                )
            })
            }
        </div>
        )
    }
}

export default CityBlocks;