import React from "react";
import {
  User,
  Package,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  Award,
  ArrowDownToLine,
} from "lucide-react";

const menuItems = [
  { id: "about", label: "Haqqımda", icon: User },
  { id: "skills", label: "Bacarıqlar", icon: Package, count: 21 },
  { id: "portfolio", label: "Portfolio", icon: BriefcaseBusiness, count: 11 },
  { id: "experience", label: "Təcrübə", icon: Building2 },
  { id: "education", label: "Təhsil", icon: GraduationCap },
  { id: "certificates", label: "Sertifikatlar", icon: Award },
];

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="glass side">
      <div className="brand">
        <div className="av">QV</div>
        <div>
          <h4>Qurbanəli Vəliyev</h4>
          <p>Frontend developer</p>
        </div>
      </div>

      <nav>
        {menuItems.map(({ id, label, icon: Icon, count }) => (
          <button
            key={id}
            type="button"
            className={`nav-btn ${activeTab === id ? "active" : ""}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={18} strokeWidth={1.8} />
            <span>{label}</span>
            {count && <b className="nav-count">{count}</b>}
          </button>
        ))}
      </nav>

      <a className="cv" href="/Qurbaneli-Veliyev-frontend-az.pdf" download>
        <ArrowDownToLine size={16} strokeWidth={2.2} />
        CV yüklə
      </a>
    </aside>
  );
}

export default Sidebar;