import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated} from 'react-native'
import Title from '../components/title'

const Home = ({navigation}) => {

    const opacity = new Animated.Value(0);

    const onLoad = () => {
        Animated.timing(opacity, {
            toValue:1,
            duration:1500,
            useNativeDriver:true
        }).start()
    } 

    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.logoContainer}>
                <Animated.Image
                    onLoad={onLoad} 
                    source={require('../image/MyQuiz.png')}
                    style={[
                        {
                            opacity:opacity,
                            transform:[
                                {
                                    scale:opacity.interpolate({
                                        inputRange:[0,1],
                                        outputRange:[0.85,1]
                                    })
                                }
                            ]
                        }
                    ]}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.startButton}>
                <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    logo:{
        height:300,
        width:300,
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    startButton:{
        width:'100%',
        backgroundColor:'#0096c7',
        padding:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:30
    },
    startButtonText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    },
    container:{
        paddingHorizontal:14,
        height:'100%',
        backgroundColor:'#e9ecef'
    }
})