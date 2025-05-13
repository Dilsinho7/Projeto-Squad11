import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="top-bar">
        <button onClick={toggleSidebar}>☰</button>
      </div>

      <div className="menu">
        <div onClick={() => toggleSubMenu("okrs")} className="menu-item">
          📊 {isExpanded && <span>OKRs</span>}
        </div>
        {activeMenu === "okrs" && isExpanded && (
          <div className="submenu">
            <div className="submenu-item">Visualizar OKRs</div>
            <div className="submenu-item">Cadastrar OKR</div>
          </div>
        )}

        <div className="menu-item">⚙️ {isExpanded && <span>Configurações</span>}</div>
        <div className="menu-item">❓ {isExpanded && <span>Ajuda</span>}</div>
        <div className="menu-item">📨 {isExpanded && <span>Sobre</span>}</div>
        <div className="menu-item">🚪 {isExpanded && <span>Sair</span>}</div>
      </div>
    </div>
  );
}

export default Navbar;
