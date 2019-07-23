import React from 'react';
import {connect } from 'react-redux';
import {  makingAsyncCall } from '../actions';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class QuizComponent extends React.Component{
    state = { loading : true, count : 0 }
    
    componentDidMount(){
        this.props.makingAsyncCall();
    }

    isCorrect(event, right, wrong){
        console.log(event.target.innerText , right, wrong)
        if(event.target.innerText !== wrong[0]){
            event.target.style.backgroundColor = "green"
        }else {
            event.target.style.backgroundColor = "red"  
            this.setState({
                count : this.state.count + 1 
            }) 
        }
    }

    render(){
        const {questions} = this.props ;
        console.log( this.props, this.state.count) ;        
        return(
            <>
                {
                    questions ? questions.map(
                        (question, index) =>
                        <Card title={question.question} style={{ width: "70rem", margin: "10px"}} key={index}>
                            <button style={{ backgroundColor: "white" , cursor: "pointer" }}

                           onClick={(event) => this.isCorrect(event, question.correct_answer, question.incorrect_answers )}
                            >{question.correct_answer}</button> 

                        <hr ></hr>

                            <button style={{ backgroundColor: "white" , cursor: "pointer" }}
                                onClick={(event) => this.isCorrect(event, question.correct_answer,question.incorrect_answers)}
                            >
                            {question.incorrect_answers[0]}</button>
                        </Card>
                        ) : <ClipLoader
                                css={override}
                                sizeUnit={"px"}
                                size={150}
                                color={'#123abc'}
                                loading={questions.length > 0 ? false : true}
                            />
                    }   
                  <Button type="primary">
                        <Link to="/end">Finish</Link>
                  </Button>
            </>
        )}
}

const mapStateToProps = ( questions ) =>{
    return { questions  }
}

export default connect(mapStateToProps, { makingAsyncCall })(QuizComponent) ;





