import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img  style={{ marginBotton: '0' , marginTop: '10px', fontSize: '14px', color: "#174481"}}   src="assets/img/slider/acercalogo.png" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Migdualy Gonzalez &amp; Ingeniero de Sistemas</h3>
          <div className="description_inner">
            <div className="left">
              <p>
               -Especializada en Administración de Bases de Datos (Postgres, Microsoft SQL Server, MYSQL, ORACLE, Mongo y Redis)
               -Linux, Docker
               -Desarrolladora de Frontend CSS3, HTML5, +MVC, JavaScript,React Native , React, Angular JS
               -Desarrolladora de Backend 
               -Desarrolladora de sitios web, CMS( joomla y Wordpress)
               -REST API
               -Metodologia Scrum
               </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Leer Mas
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
             
                </li>
                <li>
                  <p>
                    <span>Edad:</span>32
                  </p>
                </li>
                <li>
                  <p>
                    <span>Direccion:</span>Macaracuay, Caracas - Venezuela
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">Migdualy@gmail.com</a>
                  </p>
                </li>
                <li>
           
                </li>
                <li>
                  <p>
                    <span>Estudio:</span>Platzi - Udemy
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Disponible
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3 style={{ textAlign: 'center' , marginTop: '10px', fontSize: '20px' , fontWeight: "bold"}} > Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div   style={{ textAlign: 'center' , marginTop: '10px', fontSize: '18px' , fontWeight: "bold"}} className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Html y Css</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">JavaScript</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Git</span>
                        <span className="number">100%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 100 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">React</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Boostrap</span>
                        <span className="number">98%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 98 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Scrum</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Node</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                      </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3 style={{ textAlign: 'center' , marginTop: '10px', fontSize: '20px' , fontWeight: "bold"}}>Otros Skills</h3> 
                  </div>
                  {/* END TITLE */}
                  <div style={{ textAlign: 'center' , marginTop: '10px', fontSize: '18px' , fontWeight: "bold"}} className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Linux</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">API</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="70">
                      <span>
                        <span className="label">Docker</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 70 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">WordPress</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 85 + '%'}}></div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="progress_inner" data-value="75">
                      <span>
                        <span className="label">Criptomonedas</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 75 + '%'}}></div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="progress_inner" data-value="75">
                      <span>
                        <span className="label">Postman</span>
                        <span className="number">98%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 98 + '%'}}></div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="progress_inner" data-value="75">
                      <span>
                        <span className="label">Base de Datos</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3> Otros Datos</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>15+</h3>
                      <span>Proyectos completados</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>10</h3>
                      <span>Clientes</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lineas de codigo</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>Tecnología usada</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
