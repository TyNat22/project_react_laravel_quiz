import React, { useEffect, useState,useRef } from 'react'
import './Home.css'
import qiuzpic from '../../assets/online-quiz-system.png'
import Footer from '../../components/footer/Footer'
import { GoTriangleRight } from "react-icons/go";
import Rating from '@mui/material/Rating';
import { FaHeart } from "react-icons/fa";
import contactimg from  '../../assets/contact.webp'
import { useNavigate } from 'react-router-dom';
import Categories from "../../Data/Categories.jsx";
function Home({fetchQuestions}) {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //get each category
useEffect(() => {
  const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/category');
        const data = await response.json();
        setData(data.data);
        setLoading(false);
      } catch (error) {
          setError(error);
          setLoading(false);
        }

      }; 
      fetchData(); 
    }, []);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleClick = (id) => {
    if(!id){
      setError(true);
      return;
    }else{
      setError(false);
      fetchQuestions(id);
      navigate("/quiz");
    }
  };

  return (
<div className='home'>
    <section className="section-hearder">
      <div class="card mb-3 card-box">
          <div class="row g-0">
              <div class="col-md-8" style={{width:'50%'}}>
              <div class="card-body" style={{marginTop:'100px',marginLeft:'50px'}}>
                  <h1 class="card-title">General Quizzing Website</h1>
                  <p class="card-text">quiz is a form of game or mind sport in which players attempt to answer questions correctly on one or several specific topics. In this website, we focus on a variety of topics to cater to diverse interests and knowledge areas. Whether you're passionate about Asian culture, fascinated by ancient temples, intrigued by history, enthusiastic about sports, or curious about different provinces.</p>
                  <button className="btn btn-primary " onClick={scrollToSection}>Start Quiz <span><GoTriangleRight /></span></button>
              </div>
              </div>
              <div class="col-md-4 box-img" style={{width:'50%'}}>
              <img src={qiuzpic} class="" alt="..."/>
              </div>
          </div>
      </div>
    </section>
    <section className='section-vision'>
        <div className="">
          <h1>Our Vision</h1>
          {/* <hr className="divider" /> */}
          <div class="card-group">
  <div class="card">
    <img src="https://www.pngall.com/wp-content/uploads/10/Knowledge-PNG-File-Download-Free.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">Knowledge</h2>
      <p class="card-text">We aim to share knowledge that is relevant to our country with all users. By doing so, we hope to provide valuable insights and information that can benefit everyone. This initiative is designed to foster understanding and awareness about various aspects related to our nation's culture, history, and current affairs.</p>
     
    </div>
  </div>
  <div class="card">
    <img src="https://www.razorse.com/img/5-Media-and-Entertainment.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">Entertainment</h2>
      <p class="card-text">We aim to provide entertainment options that users can enjoy during their free time. Whether through games, videos, or other interactive content, we want to offer engaging and fun experiences that can help users relax and unwind.</p>
     
    </div>
  </div>
  <div class="card">
    <img src="https://www.labfellows.com/wp-content/uploads/2020/11/userfriendly.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">User Friendly</h2>
      <p class="card-text">Our goal is to create a user-friendly quizzing website that provides an engaging and seamless experience for all users. The interface is designed to be intuitive and easy to navigate, ensuring that users can quickly access quizzes and find relevant information. </p>
     
    </div>
  </div>
</div>
        </div>
    </section>
    <section className="section-quiz" ref={sectionRef}>
      <h1>Our Update Quiz</h1>
      <div class="card-group">
          {data.map((item) => (
          <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-3 item-box">
                <div className="card p-3 sub-item-box">
                
                  <div className=''>
                  <img src={item.image_url} />
                  <span className='faheart'><FaHeart/></span>
                  </div>
  
                  <div class="card-body">
                    <h2 class="card-title"><i>{item.name}</i></h2>
                    <Rating className='rating' name="size-large" defaultValue={0} size="large" />

                  </div>
                  <div className="button-bottom d-flex ms-4">
                    <button type="button" class="btn btn-submit btn-primary d-flex"  >Add to Whislist</button>
                    <button type="button" class="btn btn-submit btn-primary" onClick={() => handleClick(item.id)}>Play Now</button>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      
    </section>
    <section className="section-contact">
  
        <div className="item-box">
            
            <div className="left-box">
        
            <h1>Contact Us</h1>
           
                
                <div className="">
           
            
         
             <form>
                        <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Feedback</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type='submit' className="">Submit</button>
                        </form>
        
                </div>
            </div>
            <div className="right-box">
                <div>
         
                <img src={contactimg} alt="" />
            
                   
                </div>
            </div>
           
        </div>
 
            
         
           
    </section>

<Footer/>
</div>
  )
}

export default Home