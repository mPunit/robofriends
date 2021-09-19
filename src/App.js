import React from 'react';
import CardList from './CardList.js';
import {robots} from './robots.js';
import Searchbox from './Searchbox.js';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            Searchfield: ''
        }
    }

    onSearchChange= (event) => {
        this.setState({Searchfield:event.target.value})
    }
 
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(user => this.setState({robots:user}) )
    }


    render(){   
        const filteredlist = this.state.robots.filter(robot => { return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase()) }) 
        return (
            <div className="page">
                <h1>Robo Friends</h1>,
                <Searchbox searchchange={this.onSearchChange}/>,
                <CardList robots={filteredlist}/>,
            </div>
        );
    }
}

export default App; 