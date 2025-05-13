import { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="menu-item">
          📈 {isExpanded && <span> <Link to={"Home"} >Dashboard Principal</Link> </span>}
        </div>

        <div onClick={() => toggleSubMenu("okrs")} className="menu-item">
          📊 {isExpanded && <span>OKRs</span>}
        </div>
        {activeMenu === "okrs" && isExpanded && (
          <div className="submenu">
            <div className="submenu-item"> <Link to={"VisuOKR"}>Visualizar OKRs</Link> </div>
            <div className="submenu-item"> <Link to={"CadastrarOKR"}>Cadastrar OKR</Link> </div>
          </div>
        )}

        <div className="menu-item">
          📋 {isExpanded && <span>Relatórios</span>}
        </div>

        <div className="menu-item">
          ⭐ {isExpanded && <span> <Link to={"CriarMetas"}>Criar Metas</Link> </span>}
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '1rem 0' }} />

        <div className="menu-item">
          ⚙️ {isExpanded && <span>Configurações</span>}
        </div>
        <div className="menu-item">
          ❓ {isExpanded && <span>Ajuda e Suporte</span>}
        </div>
        <div className="menu-item">
          📨 {isExpanded && <span>Sobre</span>}
        </div>
        <div className="menu-item">
          🚪 {isExpanded && <span>Sair</span>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

