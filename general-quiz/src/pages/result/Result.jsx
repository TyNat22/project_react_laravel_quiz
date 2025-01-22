import React,{useState,useEffect} from 'react';
import './Result.css';
import Button from '@mui/material/Button';
import "./Result.css";
import badge from '../../assets/badge.png'
import Footer from '../../components/footer/Footer';

function Result({score}) {
  return (
    <>
    <section className="result-page">
        <div className="result">
        <img src={badge} alt="" />
        <div className="result-score">
          <p className="title">Your Score : <span>{score}</span> score</p>
          
        </div>
        
      
      <div className="group-btn d-flex">
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Back to Quiz
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/score"
      >
        History
      </Button>
      </div>
    </div>
 
    </section>
    <Footer/>
    </>
    
  )
}

export default Result