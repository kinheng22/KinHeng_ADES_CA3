import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import questions from '../data/question'
import Quiz from './quiz'
const Result = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>This is your result</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../image/MyQuiz.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <Text>You scored {Quiz.score} out of {questions.length}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    logo:{
        height:300,
        width:300
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    container:{
        backgroundColor:'#e9ecef',
        height:'100%',
        justifyContent:'center',
        paddingTop:40,
        paddingHorizontal:14,

    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center'
    },
    button:{
        width:'100%',
        backgroundColor:'#0096c7',
        padding:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:30
    },
    buttonText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    },
})
