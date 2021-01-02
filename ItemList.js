import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ItemList = ({text}) => {
    return (
        <View>
            <Text style={style.card}>{text}</Text>
        </View>
    )
}
const style=StyleSheet.create({
    card:{
        padding:10,
        fontSize:20,
        color:'#FFF',
        backgroundColor:'#583d72',
        marginBottom:5


    }
})

export default ItemList
