import React from 'react'


class ZipHeader extends React.Component{
    render(){
        return <div>Zip Search</div>
    }
}


class ZipSearch extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div><ZipHeader></ZipHeader></div>
    }
}



export default ZipSearch;