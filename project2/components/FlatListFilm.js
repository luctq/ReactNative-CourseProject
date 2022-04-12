import React, { Component } from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native'
import { filmListData } from "../data/filmListData";
import FlatListFilmItem from "./FlatListFilmItem";
import Search from "./Search";
const API_KEY = "b02776da";
const API_SEARCH_BY_NAME = "https://www.omdbapi.com/?t=batman&apikey=b02776da"
const API_SEARCH_BY_ID = 'http://www.omdbapi.com/?i=tt3896198&apikey=b02776da'
export default class FlatListFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmListData: []
        }
    }
    // componentDidMount() {
    //     fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b02776da')
    //     .then((response) => response.json())
    //     .then(filmsList => {
    //         console.log(filmsList)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     });
    // }
    setDataFilm = (film) => {   
        this.setState({filmListData: film})
    }
    renderHeader = () => {
        return <Search setDataFilm={this.setDataFilm}/>;
    }
    render () {
        return (
            <View>
                <FlatList 
                numColumns={2}
                data={this.state.filmListData}
                extraData={this.state}
                keyExtractor={(item, index) => item.imdbID}
                renderItem={({item, index}) => {
                    return (
                    <FlatListFilmItem nav={this.props.nav} item={item} index={index}></FlatListFilmItem>
                    );
                }}
                ListHeaderComponent={this.renderHeader}
               />
            </View>
        );
    }
}
