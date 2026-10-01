import React, { useEffect, useRef } from "react";

import Skills from "./Skills";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Certificates from "./Certificates";

const tabs = {
  about: { title: "Haqqımda", Component: About },
  skills: {
    title: "Bacarıqlar",
    Component: Skills,
  },
  portfolio: {
    title: "Portfolio",
    Component: Portfolio,
  },
  experience: {
    title: "Təcrübə",
    Component: Experience,
  },
  education: { title: "Təhsil", Component: Education },
  certificates: { title: "Sertifikatlar", Component: Certificates },
};

function Content({ activeTab }) {
  const bodyRef = useRef(null);
  const { title, sub, Component } = tabs[activeTab];

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [activeTab]);

  return (
    <main className="glass main">
      <header className="head">
        <div>
          <h2>{title}</h2>
        </div>
        <p className="head-sub">{sub}</p>
      </header>

      <div className="body" ref={bodyRef}>
        <div className="tab" key={activeTab}>
          <Component />
        </div>
      </div>
    </main>
  );
}

export default Content;