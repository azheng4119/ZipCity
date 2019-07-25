import React from 'react'
import './StateBlocks.css'

class StateBlock extends React.Component{
    render(){
        console.log(this.props.val);
        return(
            <ul className = "StateBlock">
                <li>{this.props.val}</li>
            </ul>
        )
    }
}

class StateBlocks extends React.Component{
    render(){
        console.log(this.props.val);
        return(
            <div id = "StateContainer">
            {
            this.props.val.map(obj => {
                return (
                    <StateBlock val={obj}/>
                )
            })
            }
        </div>
        )
    }
}

export default StateBlocks;