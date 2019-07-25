import React from 'react';
import './ZipSearch.css';
import ZipBlocks from './ZipBlocks';
import axios from 'axios';

class ZipHeader extends React.Component{
    render(){
        return <h1>Zip Search</h1>
    }
}

class ZipInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ZipCode : ''
        }
        this.updateZip = this.updateZip.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    updateZip(event){
        this.setState({
            zipCode : event.target.value
        })
    }
    fetchData(){
        this.props.val(this.state.zipCode);
    }
    render(){
        return <div id = 'zipInput'><span>Zip Code: </span>
            <input onChange = {this.updateZip}></input>
            <button onClick = {this.fetchData}>Enter</button>
        </div>
    }
}


class ZipSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            zipCode : '',
            data : []
        }
        this.updateData = this.updateData.bind(this);
        this.fetchZipData = this.fetchZipData.bind(this);
    }

    updateData(val){
        this.fetchZipData(val);
        this.setState({
            zipCode : val
        })
    }

    async fetchZipData(val){
        let s = "http://ctp-zip-api.herokuapp.com/zip/"+val;
        axios.get(s)
        .then(response =>{
            let result = response.data;
            this.setState({
                data : result
            })
        })
        .catch(err => console.log(err));

        
    }

    render(){
        return <div>
            <ZipHeader></ZipHeader>
            <ZipInput val = {this.updateData}></ZipInput>
            <ZipBlocks val = {this.state.data}></ZipBlocks>
        </div>
    }
}



export default ZipSearch;