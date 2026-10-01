import React from "react";
import profilePic from "../assets/profile5.jpg";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const GithubIcon = () => (
  <svg {...iconProps}>
    <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5a3 3 0 00-1-2.5c3 0 6-1.5 6-6a4.5 4.5 0 00-1.2-3 4 4 0 000-3s-1 0-3 1.3a10 10 0 00-5.6 0C7.2 3 6.2 3 6.2 3a4 4 0 000 3A4.5 4.5 0 005 9c0 4.5 3 6 6 6a3 3 0 00-1 2.5V21" />
  </svg>
);

const LinkedinIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
  </svg>
);

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/qurbaneli",
    icon: <GithubIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/qurbaneli-veliyev-1633501a9/",
    icon: <LinkedinIcon />,
    external: true,
  },
  {
    label: "E-poçt",
    href: "mailto:vqurbaneli@gmail.com",
    icon: <Mail />,
  },
];

const contacts = [
  {
    label: "E-poçt",
    value: "vqurbaneli@gmail.com",
    href: "mailto:vqurbaneli@gmail.com",
    icon: <Mail />,
  },
  {
    label: "Telefon",
    value: "050 227 27 85",
    href: "tel:+994502272785",
    icon: <Phone />,
  },
  {
    label: "Ünvan",
    value: "Bakı, Azərbaycan",
    icon: <MapPin />,
  },
];

function About() {
  return (
    <div className="bento">
      <div className="card prof">
        <div className="ring">
          <div className="ring-inner">
            <img src={profilePic} alt="Qurbanəli Vəliyev" />
          </div>
        </div>

        <h1>Qurbanəli Vəliyev</h1>
        <span className="pill">Frontend developer</span>

        <div className="soc">
          {socials.map(({ label, href, icon, external }) => (
            <a
              key={label}
              className="soc-btn"
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="right">
        <div className="card bio">
          <div className="label">Haqqımda</div>
          <p>
            Mən React və Next.js ilə işləyən frontend developeram. Komponent
            əsaslı, təmiz və təkrar istifadə oluna bilən kodla müasir və
            istifadəçi dostu interfeyslər hazırlayıram. Layihələrdə kodun
            keyfiyyətinə, performansa və komanda ilə səmərəli əməkdaşlığa xüsusi
            diqqət yetirirəm.
          </p>
        </div>

        <div className="card c-card">
          {contacts.map(({ label, value, href, icon }) => {
            const content = (
              <>
                <span className="c-ic">{icon}</span>
                <span className="c-k">{label}</span>
                <span className="c-v">{value}</span>
                {href && <ArrowUpRight className="c-ar" size={16} />}
              </>
            );

            return href ? (
              <a key={label} className="c-row" href={href}>
                {content}
              </a>
            ) : (
              <div key={label} className="c-row">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;