import React from 'react';
import './SongTable.css'




function SongTable(props){
    
    
    
    
    return (
       
        <ul>
           <h1>Songs List</h1>
            {props.songs.map((song,index) =>
           <li className= "fontcolor"  key= {index}> {song.title} by {song.artist}</li> )}     
        
        </ul>   


    );

}

export default SongTable;