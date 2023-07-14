import React from 'react';
import logo from '../common/logo.png';
import PP from '../common/image.jpeg';
import code from '../common/code.jpg'
import './style.css';
import { portfolio } from '../common/common';
import { Card, Col, Row } from 'antd';

const Portfolio = () => {

  const handleDownload = () => {
    fetch('PranshuPandey_CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'PranshuPandey_CV.pdf';
        alink.click();
      });
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" width={50} />
          </div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">More</a>
          </div>
          <button className="btn">Contact</button>
        </div>
      </nav>

      <section className="profile">
        <div className="row">
          <div className="col-12 col-md-6 profile-image">
            <img src={PP} alt="Profile" className="profile-image" />
          </div>
          <div className="col-12 col-md-6 profile-detail">
            {portfolio.map(item => {
              const data = item.data;
              return (
                <div>
                  <h1>{data.web_developer}</h1>
                  <p>{data.detail}</p>
                </div>
              );
            })}
            <div className="cv">
              <button onClick={handleDownload} className="btn-cv">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='row'>
            <div className="col-12 col-md-6 inner-about">
              <img src={code} alt="code" className="about-image" />
            </div>
            <div className="col-12 col-md-6 about-detail">
              <div id="skill">
              <h2>Skills</h2>
                {portfolio.map(item => {
                const data = item.data.skills;
                return data.map((skill) => (
                  <span id='inner-skill'>
                    <button className='btn-skill'>{skill}</button>
                  </span> 
                ));
                })}
              </div>
            </div>
        </div>
      </section>
      <section className='project'>
        <div className='row'>
        <h2>Projects</h2>
        <div className="col-12 about-project">
            {portfolio.map(item =>{
              const data = item.data.projects;
              return data.map(project =>{
                return (
                  <Row>
                    {/* <Col> */}
                      <Card title={project.title} bordered={true}  style={{marginTop: 16,textAlign:'center'}}>
                        {project.description}
                      </Card>
                    {/* </Col> */}
                  </Row>
                )
              });
            })}
        </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
