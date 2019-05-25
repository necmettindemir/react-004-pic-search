import React from 'react';
//import ReactDom from 'react-dom';
import SearchBar from './SearchBar';
import axios from 'axios';

import unsplash from '../api/unsplash';
import ImageList from './ImageList';

//const App = () => {
class  App extends React.Component {

    baseUrl = 'https://api.unsplash.com/';
    searchPath = 'search/photos';  
    
    
    state = { images: [] };

    //--- method 1 -- with promise using then ----

    RunSearchSubmitV1 = (term) => {

        //console.log('from parent : ' +  term);
        axios.get(this.baseUrl + this.searchPath, {
                params: { query: term },
                headers : {
                    Authorization: 'Client-ID 04338d5f87c65f3b70ba21ac6d7e4d695889f95c2f616054a420cb4a2b9c6ca8'
                }
        }).then( (response) => {
                console.log(response.data.results);
        });

    }

    //--- /method 1 -- with promise using then ----


    //--- method 2 -- with async-await  ----

    //async RunSearchSubmitV2(term)
    RunSearchSubmitV2 = async (term) => {

        //console.log('from parent : ' +  term);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
                                                params: { query: term },
                                                headers : {
                                                    Authorization: 'Client-ID 04338d5f87c65f3b70ba21ac6d7e4d695889f95c2f616054a420cb4a2b9c6ca8'
                                                }
                                        });

        //console.log(response.data.results);
        this.setState( {images: response.data.results} );

    }

    //--- /method 2 -- with async-await  ----


     //--- method 3 -- with async-await and custom client object ----

    
    RunSearchSubmitV3 = async (term) => {

        //console.log('from parent : ' +  term);
        const response = await unsplash.get('/search/photos', {
                params: { query: term }                
                                        });

        //console.log(response.data.results);
        this.setState( {images: response.data.results} );

    }

    //--- /method 3 -- with async-await and custom client object ----

    render(){     
        return  (
                    <div className="ui container" style={{ marginTop: '10px'}}>
                        <SearchBar runSearch={ this.RunSearchSubmitV2} />
                        Found : {this.state.images.length} images;
                        <ImageList images={this.state.images} />
                    </div>
                );    
        }        
};

export default App;