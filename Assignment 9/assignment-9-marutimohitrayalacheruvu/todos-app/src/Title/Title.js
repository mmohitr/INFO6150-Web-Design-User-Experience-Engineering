import React from 'react';
import './Title.scss';

class Title extends React.Component{
    // returns html consisting of app title
    render(){
        const title = "Todo Application"
        return(
                <h1>{title}</h1>
        );
    }
}

export default Title;
