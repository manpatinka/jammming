import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState ({
            term: e.target.value
        })
    }

    handleKeypress(e) {
        if (e.key === 'Enter' && e.target.value) {
            this.search();
        }
    }

    render() {
        return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeypress} />
            <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}