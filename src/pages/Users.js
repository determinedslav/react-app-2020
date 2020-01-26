import React from 'react';
import {connect} from 'react-redux';
import setActionTitle from '../redux/actions/title';

class User extends React.Component{

    componentDidMount = () =>{
        //this.props.getMovies();
    }

    changeProfileTitle = () => {
        this.props.setTitle("title");
    }

    render(){
        return <div>
            <input type = "text" value ={this.props.title} className="form-control" onChange={ e => this.props.setTitle(e.target.value)}/>
            <ul className="list-group">

           </ul>
           <button onClick={this.changeProfileTitle} type="button" className="btn btn-primary mb-3">change profile title</button>
        </div>
    }
}

//function getGlobalMovies() { 
//    return dispatch => {
//   return fetch('https://facebook.github.io/react-native/movies.json') 
//    .then(response => response.json())
//    .then(responseJson => {
//        console.log(responseJson);
//        dispatch ({
//          type: "FETCHED_MOVIES",
//          payload: responseJson.movies
//      })
//    })
//    .catch((error) => {
//      console.error(error);
//    });
//    }
//}

//const mapStateToProps = state => ({movies : state.movies});
//const mapStateToDispatch = dispatch => {
//    return{
//        getMovies: () => dispatch(getGlobalMovies())
//    }
//}

const mapStateToProps = state => {
    return {
        title: state.title
    }
}

const mapStateToDispatch = dispatch => {
    return {
        setTitle: title => dispatch(setActionTitle(title))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(User);