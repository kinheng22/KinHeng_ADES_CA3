import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyQuiz</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:36,
        fontWeight:'bold'
    },
    container:{
        paddingTop:40,
        justifyContent:'center',
        alignItems:'center'
    }
})