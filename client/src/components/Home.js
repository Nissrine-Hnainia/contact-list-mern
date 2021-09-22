import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (

        <div className="container">
          <div className="container-inner">
            <div className="main-content">
              <div className="main-headings main-headings-js" >
                <p id="by-line">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="heading">
                  <h3 id="heading1">Decouvrez</h3>
                  <h3 id="heading2">la Jeune,</h3>
                  <h1 id="heading3">Beaute</h1>
                </div>
                <div className="short-bio">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat, quod sed optio nesciunt aspernatur inventore ab, nostrum accusantium harum dolor voluptate nulla!</p>
                </div>
                {/* <a href="#" className="link" onclick="readMore()">Read More</a> */}
                <Link to="/" className="link"> Read More </Link>
              </div>
              <div className="more-info more-info-js">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse expedita impedit iste, quibusdam debitis fugit repudiandae voluptatum vero quod nulla!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus iusto facere dignissimos quaerat facilis voluptatibus fuga quod impedit. Atque tenetur amet officia repudiandae odit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni saepe suscipit deleniti porro fugit! Atque nisi alias a porro fugiat incidunt exercitationem! Nihil, consectetur. Expedita.</p>
              </div>
            </div>
            <div className="image-wrapper">
              <div className="image-container">
                <img className="image" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=755bbb2b0afd5808494a8723774cd141" alt="young woman." />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Home
