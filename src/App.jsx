import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="orb o1"></div>
        <div className="orb o2"></div>
        <div className="orb o3"></div>
        <div className="grid-bg"></div>
      </div>
      <div className="page">
        <div className="shell">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Content activeTab={activeTab} />
        </div>
      </div>
    </>
  );
}

export default App;