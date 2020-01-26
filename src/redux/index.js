import { combineReducers } from "../../node_modules/redux";

const counter = function(count = 1, action) {
    switch(action.type){
        case "INCREMENT_COUNT" : {
            return action.payload + 1;
        }
        default : return count;
    }
}

const movies = function(movies = [], action) {
    switch(action.type){
        case "FETCHED_MOVIES" : {
            return [...action.payload]
        }
        default : 
            return movies;
    }
}

const title = function(title = "some title", action) {
    switch(action.type){
        case "CHANGE_TITLE" : {
            return action.payload;
        }
        default : 
            return title;
    }
}

export default combineReducers({
    counterOne : counter,
    movies,
    title,
})