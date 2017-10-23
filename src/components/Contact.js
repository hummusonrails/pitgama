import React from 'react';
import ben_pic from '../static_resources/images/ben.png';
import malki_pic from '../static_resources/images/malki.jpg';
import yechiel_pic from '../static_resources/images/yechiel.jpg';

class Contact extends React.Component {

  render() {

    return (
      <div>

        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">Contact</h1>
            <p className="body-intro">
              Get in touch with us
            </p>
          </div>
        </div>

        <div className="bio-display-container">
          <div className="feature-box">

          <div className="bio-container">
            <div className="image-container">
              <div className="image-content">
                <img src={ben_pic}/>
              </div>
            </div>
            <div className="right-container">
              <div className="right-content">
                <h4>Ben</h4>
                <p>I am a full stack developer who is passionate about code and about achieving excellence in all aspects of the work. I bring nearly a decade of experience in organizational leadership with me to the work adding depth and perspective to any team. I work in backend development with Ruby on Rails, APIs, identity access management and SQL (PostgreSQL, MySQL, etc.) and I work in frontend development with Javascript, React and Redux, HTML and CSS. I learn new languages and frameworks quickly and I am committed to using the tech stack that is most ideal for the project.</p>
              </div>
            </div>
          </div>

          <div className="bio-container">
            <div className="image-container">
              <div className="image-content">
                <img src={malki_pic}/>
              </div>
            </div>
            <div className="right-container">
              <div className="right-content">
                <h4>Malki</h4>
                <p>Background of IT, now venturing into the world of software engineering. Familiar with Ruby/Rails, Javascript, JQuery, React, Redux, Elixir, and many more on the list to learn!</p>
              </div>
            </div>
          </div>

          <div className="bio-container">
            <div className="image-container">
              <div className="image-content">
                <img src={yechiel_pic}/>
              </div>
            </div>
            <div className="right-container">
              <div className="right-content">
                <h4>Yechiel</h4>
                <p>Brooklyn born and bred, I Got my rabbinical training in Israel. Went on to teach third grade in the Jewish Online School and adult education through Chabad. After a brief stint in tech support, I went on to study web development. I currently live in Brooklyn, NY with my family, supporting my passions for teaching, coding, and flying.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    );
  }
}

export default Contact;
