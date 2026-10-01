import React from "react";
import qafqaz from "../assets/edu/qafqaz.png";
import aztu from "../assets/edu/aztu.png";
import bdu from "../assets/edu/bdu.png";

const education = [
  {
    id: 1,
    img: bdu,
    university: "Bakı Dövlət Universiteti",
    degree: "Doktorantura",
    years: "2018 – 2021",
    desc: "Maye, qaz, plazma mexanikası",
  },
  {
    id: 2,
    img: aztu,
    university: "Azərbaycan Texniki Universiteti",
    degree: "Magistratura",
    years: "2016 – 2018",
    desc: "Kompyuter texnikasının layihələndirilməsi",
  },
  {
    id: 3,
    img: qafqaz,
    university: "Qafqaz Universiteti",
    degree: "Bakalavr",
    years: "2012 – 2016",
    desc: "Kompyuter mühəndisliyi",
  },
];

function Education() {
  return (
    <div className="tl">
      {education.map((item) => (
        <div className="ti" key={item.id}>
          <div className="card">
            <div className="logo">
              <img src={item.img} alt={item.university} />
            </div>
            <div className="ti-text">
              <h3>{item.university}</h3>
              <span className="deg">{item.degree}</span>
              <p>{item.desc}</p>
            </div>
            <span className="yr">{item.years}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
