import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import contactimg from  '../../assets/contact.webp'
import './Contact.css'
import Footer from '../../components/footer/Footer';

function Contact() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    const animationVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
  return (
    <>
        <section className="contact">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animationVariants}
         
        >
        <div className="item-box">
            
            <div className="left-box">
            <motion.div
                initial={{ opacity: 0, translateX: 300 }}
                animate={{ opacity: 1, translateX:0 }}
                transition={{ duration: 1 }}
              >
            <h1>Contact Us</h1>
              </motion.div>
                
                <div className="">
                <motion.div
                initial={{ opacity: 0, translateY: 300 }}
                animate={{ opacity: 1, translateY:0 }}
                transition={{ duration: 1 }}
              >
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
              </motion.div>
                       
                </div>
            </div>
            <div className="right-box">
                <div>
                <motion.div
                initial={{ opacity: 0, translateX: -300 }}
                animate={{ opacity: 1, translateX:0 }}
                transition={{ duration: 1 }}
               
              >
                <img src={contactimg} alt="" />
              </motion.div>
                   
                </div>
            </div>
           
        </div>
        </motion.div>
            
            <Footer/>
           
        </section>
        
    </>
    
  )
}

export default Contact