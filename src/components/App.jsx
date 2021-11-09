import React, {Component} from 'react';
import './App.css';
import axios from "axios";



class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        
        fetch('http://www.devcodecampmusiclibrary.com/')
            .then(res => res.json())
            .then(json => {
                this.setState ({
                        isLoaded: true,
                        items: json,
                }) 
                
           
            });

    }



    render() {

        var { isLoaded, items } = this.state;
        
        if(!isLoaded) {
                return <div>Loading...</div>
        }

        else{
            
            return(
                <div className="App">
                    
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                              
                            </li>
                        ))};
                    </ul>

                </div>
            );
        }        
    } 
}


export default App;