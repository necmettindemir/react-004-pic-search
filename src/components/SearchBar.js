import React from 'react';
//import ReactDom from 'react-dom';

class SearchBar extends React.Component {

    state = {  term : '' };

  /*   onTBsearchChange(event) 
    {
        //console.log(event.target.value);
        this.setState( { term: event.target.value} );        
    } */

    onTBsearchChange = (event) => 
    {
        //console.log(event.target.value);
        this.setState( { term: event.target.value} );        
    }

  /* 
    //  onClick =  {this.onTBsearchClik} 
    onTBsearchClik(event) {
        console.log('TBsearch clicked');
    } */

    SendForm = (event) =>
    {
        event.preventDefault();

        //console.log(this.state.term);
        this.props.runSearch(this.state.term);
        
    }

    render()
    {
        return (
                <div className="ui segment">
                    <form onSubmit={this.SendForm} className="ui form">

                        <div className="field">
                            <label>image search</label>
                            <input id="TBsearch" 
                                    type="text" 
                                    value= {this.state.term}                                 
                                    //onChange = { e=> this.setState({term:e.target.value})} 
                                    onChange = {this.onTBsearchChange} 
                                    />
                        </div>
                        
                    </form>
                </div>
                );
    }

}

export default SearchBar;



