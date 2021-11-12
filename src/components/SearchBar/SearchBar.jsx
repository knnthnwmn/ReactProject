import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
      search: "",
    };
  
    updateSearch(event) {
      this.setState({ search: event.target.value });
    }
  
    render() {
      return (
        <div>
          <input
            placeholder='searching for...'
            type='text'
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}/>
        </div>
      );
    }
}


export default SearchBar;