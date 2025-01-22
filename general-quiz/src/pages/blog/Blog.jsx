import React from 'react';
import './Blog.css';
import Footer from '../../components/footer/Footer';

function Blog() {
  return (
    <>
    <div className="Blog">
      <section className="header">
        <div className="temple">
          <div class="card mb-3 card-box">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://ucarecdn.com/ea7e5840-a3a7-43b6-a9ca-314ce60bd7e0/-/crop/4240x2387/0,223/-/preview/" class="img-fluid" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body" style={{marginLeft:"5px"}}>
                  <h1 class="card-title">Temple</h1>
                  <p class="card-text">A temple is a religious building that's meant for worshipping or praying. Hindu temples are typically devoted to one specific god. While temples tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in temples as well.</p>
                  <p class="card-text">Cambodia has around 4000 temples in total, from the pristine to the ruinous, with most of them being found in Siem Reap, Battambang, Kampong Thom, and Preah Vihar.</p>
                  <ul>
                      <h1>The best temples in Cambodia</h1>
                    <li>Angkor Wat</li>
                    <li>Ta Prohm </li>
                    <li>Bayon</li>
                    <li>Neak Pean</li>
                    <li>Pre Rup</li>
                    <li>Phnom Krom</li>
                    <li>Banteay Kdei</li>
                    <li>Beng Mealea</li>   
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item-img">
            <div className="item-list-img">
              <div className="row">
              <img src="https://cdn.britannica.com/35/171035-050-8423095A/Angkor-Wat-Siemreab-Cambodia.jpg" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Ta_Prohm_%28III%29.jpg" alt="" />
              <img src="data:image/jpeg;base64,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" alt="" />
              <img src="https://smarthistory.org/wp-content/uploads/2021/05/Prasat_Bayon_2014-scaled.jpg" alt="" />
              <img src="https://justsiemreap.com/wp-content/uploads/2018/05/neak-pean-temple-guide.jpg" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Preah_Khan%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_26.JPG" alt="" />
              <img src="https://www.renown-travel.com/images/pre-rup-angkor-l.jpg" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOml-EUWmAl093WYNSrrAApcq7t-kbuLg2dw&s" alt="" />
     
              </div>

            </div>
          </div>
        </div>
        <div className="Province" style={{marginTop:'50px'}}>
          <div class="card mb-3 card-box">
            <div class="row g-0">
              <div class="col-md-4" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Phnom_Penh_Independence_Monument.jpg/800px-Phnom_Penh_Independence_Monument.jpg" style={{marginLeft:'10px'}} class="img-fluid" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h1 class="card-title">Province</h1>
                  <p class="card-text">Cambodia is divided into 25 provinces. The capital Phnom Penh is not a province but an "autonomous municipality", equivalent to a province governmentally and administered at the same level as the other 24 provinces. </p>
                  <p class="card-text">Phnom Penh has both the highest population and the highest population density of all provinces, but is the second smallest in land area. The largest province by area is Mondulkiri and the smallest is Kep which is also the least populated province. Mondulkiri has the lowest population density.</p>
                  <ul>
                      <h1>The Most visit province in Cambodia</h1>
                    <li> Kampot province</li>
                    <li>Sihanoukville</li>
                    <li>Kep provinces</li>
                    <li>Siem Reap</li>
                    <li>Battambang</li>
                     
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="item-img">
            <div className="item-list-img">
              <div className="row">
              <img src="https://www.battambang.com/wp-content/uploads/2020/11/Lok-Ta-Dombong-Kronhoung-1-1200x800.jpg" alt="" />
              <img src="https://images.realestate.com.kh/__sized__/files/2020-06/landmark-thumbnail-750x562-70.jpg" alt="" />
            
              <img src="https://tap-core-bucket.s3.ap-southeast-1.amazonaws.com/Golden_Lion_Monument_Sihanoukville_6f638305d8.png" alt="" />
              <img src="https://lh4.googleusercontent.com/proxy/-ctE6PqKAr5TwWRqxnkzAvtSxNoSoGoM42rNbRDX9ItotoJGyhtjCh90M7bNZkZ-iUrw_DEUdklPnTyJJ7K9hA4LPHPBFqY6o9hD14iTaxKP118deBIBv944HcJuYYqy8uVEKQYd5EyeUwVyxgoIeZAOQRAbB5i78MLRDB5MuFl4" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Pn6OFHAdTxB6LguOtiNiZTyQ93uM5RUxCQ&s" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1zX7suf9VDuN3VwnM-Gil4-QjmWdPIbI-Q&s" alt="" />
              <img src="https://i.pinimg.com/originals/3b/08/2e/3b082e37351a1d75b275462fda4c2535.jpg" alt="" />
              <img src="https://lh5.googleusercontent.com/proxy/jhyXC4uUjBxklH0jEcO1jKfbWZO6Cvr0MBjLgM-co5qU4X_6DRZQBihfbcuTJPdcgKnNLLoCs-kyp78rnMTDxZq-xC-vuDUXfGOhID0hY1n92CHX53WYa7c3NVjRpdXQtKSc5TOQgWB3pNGFpMm8YCPhmUthPpLg4tFxiw2WtVck" alt="" />
              <img src="https://angkorfocus.com/userfiles/Kampong-Speu-Economy-3.jpg" alt="" />
              <img src="https://3.bp.blogspot.com/-iQKW8bs7Mnc/UrQFANmCW_I/AAAAAAAAADE/raQ3961yq_8/s1600/pichet_pen_-_kampong_cham_city_januray_20_2011_1.jpg" alt="" />
        
              </div>

            </div>
          </div>
        </div>
        <Footer/>
      </section>
      
    </div>
 
    
    </>
  )
}

export default Blog