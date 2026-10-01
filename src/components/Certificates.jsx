import React from "react";
import { Award, Download } from "lucide-react";
import coders from "../assets/cert/coders.svg";
import tech from "../assets/cert/tech.svg";
import english from "../assets/cert/british.png";

const groups = [
  {
    title: "Frontend",
    items: [
      {
        id: 1,
        img: coders,
        file: null, // yükləmə yoxdur
        title: "Coders Azerbaijan",
        desc: "Frontend Bootcamp",
        years: "2021 – 2022",
      },
      {
        id: 2,
        img: tech,
        file: "/cert/tech.pdf",
        title: "Tech Academy",
        desc: "Advanced React.js Bootcamp",
        years: "2022 – 2023",
      },
    ],
  },
  {
    title: "İngilis dili",
    items: [
      {
        id: 3,
        img: english,
        file: "/cert/english.pdf",
        title: "English",
        desc: "Intermediate B1+",
        years: "2026",
      },
    ],
  },
];

function Certificates() {
  return (
    <div>
      {groups.map((group) => (
        <div className="group" key={group.title}>
          <h3>
            {group.title} <em>{group.items.length}</em>
          </h3>

          <div className="cert-grid">
            {group.items.map((item) => (
              <div className="card cert" key={item.id}>
                <div className={`cert-img ${item.img ? "has" : `empty t${item.id % 3}`}`}>
                  {item.img ? (
                    <img src={item.img} alt={item.title} loading="lazy" />
                  ) : (
                    <Award size={30} strokeWidth={1.5} />
                  )}

                  {item.file && (
                    <a
                      className="cert-dl"
                      href={item.file}
                      download
                      aria-label={`${item.title} sertifikatını yüklə`}
                      title="Yüklə"
                    >
                      <Download size={14} strokeWidth={2.2} />
                    </a>
                  )}
                </div>

                <div className="cert-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="yr">{item.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certificates;