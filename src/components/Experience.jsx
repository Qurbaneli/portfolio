import React from "react";
import geotech from "../assets/work/geotech.jpg";
import mas from "../assets/work/mas.svg";
import xs from "../assets/work/xs.png";
import xezer from "../assets/work/xezer.jpg";
import upwork from "../assets/work/upwork.png";

const works = [
  { id: 1, img: xs, title: "Xalq Insurance", role: "Front-end developer", years: "2024" },
  { id: 2, img: mas, title: "Mass Solution", role: "Front-end developer", years: "2023 – 2024" },
  { id: 3, img: geotech, title: "AT-Geotech", role: "Front-end developer", years: "2022 – 2023" },
  { id: 4, img: upwork, title: "Upwork", role: "Freelance developer", years: "2020 – 2022" },
  { id: 5, img: xezer, title: "Xəzər TV", role: "Full stack developer", years: "2016 – 2020" },
];

function Experience() {
  return (
    <div className="tl">
      {works.map((item) => (
        <div className="ti" key={item.id}>
          <div className="card">
            <div className="logo">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="ti-text">
              <h3>{item.title}</h3>
              <p>{item.role}</p>
            </div>
            <span className="yr">{item.years}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;