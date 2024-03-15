import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
           With our renowned team of culinary professionals, discover the pinnacle of culinary proficiency. Every team member contributes a plethora of knowledge and enthusiasm to the kitchen, guaranteeing that each dish is prepared with care and precision. Every member of our team, from our creative and inventive chefs to our hardworking kitchen workers who work diligently in the background, is dedicated to providing an outstanding dining experience. They transform the best materials into delectable culinary creations that entice the senses and make a lasting impact on each and every guest, all thanks to their unrelenting passion and ability.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
