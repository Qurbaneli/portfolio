import React from "react";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import xezertv from "../assets/portfolio/xezertv.png";
import payment from "../assets/portfolio/payment.png";
import myculture from "../assets/portfolio/myculture.png";
import uhf from "../assets/portfolio/uhf.png";
import legitsa from "../assets/portfolio/legitsa.png";
import aytmatov from "../assets/portfolio/aytmatov.png";
import talks from "../assets/portfolio/talks.png";
import ecabinet from "../assets/portfolio/ecabinet.png";
import fm from "../assets/portfolio/1005fm.png";

const portfolio = [
  {
    id: 1,
    title: "my.culture.gov.az",
    domain: "my.culture.gov.az",
    desc: "“My Culture” saytının front-end hissəsinin hazırlanması.",
    url: "https://my.culture.az",
    image: myculture,
  },
  {
    id: 2,
    title: "e-cabinet.culture.az",
    domain: "e-cabinet.culture.az",
    desc: "Mədəniyyət Nazirliyinin elektron kabinet platformasının front-end hissəsinin hazırlanması.",
    url: "https://e-cabinet.culture.az",
    image: ecabinet,
  },
  {
    id: 3,
    title: "uhf.culture.az",
    domain: "uhf.culture.az",
    desc: "UHF Culture saytının front-end hissəsinin hazırlanması.",
    url: "https://uhf.culture.az",
    image: uhf,
  },
  {
    id: 4,
    title: "payment.xalqsigorta.az",
    domain: "payment.xalqsigorta.az",
    desc: "Xalq Sığorta-nın onlayn ödəniş platformasının front-end hissəsinin hazırlanması.",
    url: "https://payment.xalqsigorta.az",
    image: payment,
  },
  {
    id: 5,
    title: "xezertv",
    domain: "xezertv",
    desc: "Xəzər TV-nin media platformasının full stack development işləri (front-end və back-end).",
    url: "#",
    image: xezertv,
  },
  {
    id: 6,
    title: "talks.yaradici.az",
    domain: "talks.yaradici.az",
    desc: "Yaradıcı Talks platformasının front-end hissəsinin hazırlanması.",
    url: "https://talks.yaradici.az/",
    image: talks,
  },
  {
    id: 7,
    title: "legitsa.az",
    domain: "legitsa.az",
    desc: "Legits.az saytının front-end hissəsinin hazırlanması.",
    url: "https://legitsa.az",
    image: legitsa,
  },
  // {
  //   id: 8,
  //   title: "xezerfm",
  //   domain: "xezerfm",
  //   desc: "Xəzər FM radio platformasının full stack development işləri (front-end və back-end).",
  //   url: "#",
  //   image: "",
  // },
  {
    id: 9,
    title: "1005fm",
    domain: "1005fm",
    desc: "105.5 FM saytının full stack development işləri (front-end və back-end).",
    url: "#",
    image: fm,
  },
  {
    id: 10,
    title: "aytmatov.culture.az",
    domain: "aytmatov.culture.az",
    desc: "Aytmatov Culture saytının front-end hissəsinin hazırlanması.",
    url: "https://aytmatov.culture.az",
    image: aytmatov,
  },
];

function Portfolio() {
  return (
    <div className="pf">
      {portfolio.map((item) => (
        <a
          className="pcard"
          key={item.id}
          href={item.url}
          target={item.url!=="#" ? '_blank' : ''}
          rel="noreferrer"
        >
          <div className="pv">
            <div className="bar">
              <i></i>
              <i></i>
              <i></i>
              <span>{item.domain}</span>
            </div>

            <div className="shot">
              {item.image ? (
                <img src={item.image} alt={item.title} loading="lazy" />
              ) : (
                <div className="shot-empty">
                  <ImageIcon size={26} strokeWidth={1.5} />
                </div>
              )}
            </div>
          </div>

          <div className="pi">
            <h3>
              <span>{item.title}</span>
              <ExternalLink size={15} />
            </h3>
            <p>{item.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Portfolio;
