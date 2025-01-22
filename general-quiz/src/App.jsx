import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from './components/navnar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Quiz from './pages/quiz/Quiz'
import './App.css'
import Contact from './pages/contact/Contact'
import Result from './pages/result/Result';
import Login from './pages/login/Login';
// import Card3 from './pages/home/card3/Card3';

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async (id) => {
    try  {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/category/category=${id}`);
  
      setQuestions(data.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <>
     
      <Router>
      <Navbar/>
        <Routes>
     
          <Route path='/' element={<Home fetchQuestions={fetchQuestions}/>} />
          <Route path='/quiz' element={<Quiz questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>} />
          <Route path='/result' element={<Result score={score}/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />

          
        </Routes>
        <ToastContainer />
      </Router>

    </>
  )
}

export default App
