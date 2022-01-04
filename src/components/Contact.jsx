import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";


const Contact = () => {
  const [viewport, setViewport] = useState({
    latitude:   10.4642429,
    longitude: -66.8228816,
    zoom: 8,
  });


  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g09zpbe",
        "template_z8me0bp",
        e.target,
        "user_0zMmPIACuRuhLWV1GnSIg"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contacto</span>
              <h3>Ponerse en contacto</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoibWdhbGVqYW5kcmEiLCJhIjoiY2t4ejF2cHR1MjB1bTJxcGQ2eDdyNnBpNyJ9.P1Tk2kYRzV0NAwZacX65GA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Nombre" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea name="message" placeholder="Mensaje"></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
               Enviar 
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
