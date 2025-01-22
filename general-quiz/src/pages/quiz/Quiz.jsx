import { CircularProgress } from '@mui/material';
import { useEffect, useState } from "react";
// import Question from "../../components/Question/Question";
import "./Quiz.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const Quiz = ({ questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const navigate = useNavigate();
  
  const arraynum =['០១','០២','០៣','០៤']
  //fetch question
  useEffect(() => {
    if (questions && questions.length > 0) {
      setOptions(
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
      );
    }
  }, [currQues, questions]);
  // console.log(questions);
  //
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  //
  //settimeLeft
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
        setShowCorrect(true);
        setSelected(questions[currQues]?.correct_answer);
        setTimeout(() => {
          handleNext();
        }, 3000);
    }
  }, [timeLeft]);
  //Select each of quiz
  const handleSelect = (i) => {
    if (selected) return;
    if (i === questions[currQues]?.correct_answer) {
      setScore(score + 10);
      setShowCorrect(true);
      setSelected(i);
    } else {
      setShowCorrect(true);
      setSelected(i);
    }
    setError(false);

    // Move to the next question after 3 seconds
    setTimeout(() => {
      handleNext();
    }, 3000);
  };

  const getButtonClass = (option) => {
    if (showCorrect) {
      if (option === questions[currQues]?.correct_answer) return "select";
      return "wrong";
    }
    return selected && handleSelect(option);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else {
      setCurrQues(currQues + 1);
      setSelected();
      setTimeLeft(15); 
      setShowCorrect(false); 
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };


  
  return (
    <div className="quiz">
      {questions && questions.length > 0 ? (
        <>
         
          <div className="barbox">
            <div className="sub-barbox">
              <h1 className="subtitle"><i>{questions[currQues].category}</i></h1>
            </div>
          </div>
       
          <div className="quizInfo">
            <span className="time">
              Time Left: <span className='text-danger'>{timeLeft}</span>s
            </span>
            <span className="score">
              Score : <span className='text-danger'>{score}</span>
            </span>
          </div>
 
    <div className="question ">
      <h1>Question <span className='text-danger'>{currQues + 1}</span> :</h1>
        <div className="singleQuestion ">
          <div className="ques-form">
            <p>{questions[currQues].question}</p>
          </div>
          <div className="options">
            {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
            {options &&
              options.map((i,index) => (
                <button
                  className={`singleOption   ${selected ? getButtonClass(i) : ""}`}
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={selected}
                  >
                  {index+1}{')'}. {i}
                </button>
                ))
              }
          </div>
          <div className="controls">
            {/* <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 185 }}
              href="/"
              onClick={() => handleQuit()}
            >
              Quit
            </Button> */}
            {/* <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ width: 185 }}
                onClick={handleNext}
              >
              {currQues > 20 ? "Submit" : "Next Question"}
              </Button> */}
           
          </div>
        </div>
    </div>

        </>
        ) : (
          <CircularProgress
          className='CircularProgress'
            style={{ margin: 100 }}
            size={150}
            thickness={1}
          />
        )}
    </div>
  );
};

export default Quiz;