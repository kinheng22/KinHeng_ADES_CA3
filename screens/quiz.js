import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import questions from '../data/question'

const Quiz = ({navigation}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false)

    const [score, setScore] = useState(0);

    const handleNext = (isCorrect) => {

        if (isCorrect===true){
            // alert("correct");
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true)
        }
    }
    
    return (
        <View>
            {showScore ? (
                <View style={styles.resultContainer}>
                    <View>
                        <Text style={styles.title}>This is your result</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <Image 
                            source={require('../image/MyQuiz.png')}
                            style={styles.logo}
                            resizeMode='contain'
                        />
                        <Text style={styles.scoreText}>You scored {score} out of {questions.length}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
                            <Text style={styles.buttonText}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.questionOrder}>Question {currentQuestion+1}/{questions.length}</Text>
                        <Text style={styles.question}>{questions[currentQuestion].questionText}</Text>
                    </View>
                    <View style={styles.options}>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <TouchableOpacity style={styles.optionButton} onPress={()=>handleNext(answerOption.isCorrect)}>
                                <Text style={styles.option}>{answerOption.answerText}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>)}
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        padding:12,
        height:'100%',
        backgroundColor:'#e9ecef'
    },
    top:{
        marginVertical:16
    },
    options:{
        marginVertical:16,
        flex:1
    },
    bottom:{
        marginBottom:14,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    question:{
        fontSize:28
    },
    optionButton:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:'#0a9396',
        borderRadius:10,
        paddingHorizontal:12
    },
    option:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    questionOrder:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:22
    },
    resultContainer:{
        backgroundColor:'#e9ecef',
        height:'100%',
        justifyContent:'center',
        paddingTop:40,
        paddingHorizontal:14,
    },
    logo:{
        height:300,
        width:300
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
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
    scoreText:{
        fontSize:20
    }
})
