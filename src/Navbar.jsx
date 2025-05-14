import iconeDashboard from "./assets/img/iconeDashboard.png";
import iconeOKR from "./assets/img/iconeOKR.png";
import iconeRelatorio from "./assets/img/iconeRelatorio.png";
import iconeMetas from "./assets/img/iconeMetas.png";
import iconeConfig from "./assets/img/iconeConfig.png";
import iconeAjuda from "./assets/img/iconeAjuda.png";
import iconeSobre from "./assets/img/iconeSobre.png";
import iconeSair from "./assets/img/iconeSair.png";
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
        <button className="NavButton" onClick={toggleSidebar}>☰</button>
      </div>

      <div className="menu">
        <div className="menu-item">
          <img className="StyleIcones" src={iconeDashboard}/> {isExpanded && <span className="NavText"> <Link to={"Home"} >Dashboard <br/> Principal</Link> </span>}
        </div>
        <div className="with-submenu">  
          <div onClick={() => toggleSubMenu("okrs")} className="menu-item">
            <img className="StyleIcones" src={iconeOKR}/> {isExpanded && <span className="NavText" >OKRs</span>}
          </div>
          {activeMenu === "okrs" && isExpanded && (
            <div className="submenu">
              <div className="submenu-item"> <Link to={"VisuOKR"}>Visualizar OKRs</Link> </div>
              <div className="submenu-item"> <Link to={"CadastrarOKR"}>Cadastrar OKR</Link> </div>
            </div>
          )}
        </div>

        <div className="menu-item">
          <img className="StyleIcones" src={iconeRelatorio}/> {isExpanded && <span className="NavText">Relatórios</span>}
        </div>

        <div className="menu-item">
          <img className="StyleIcones" src={iconeMetas}/> {isExpanded && <span className="NavText" > <Link to={"CriarMetas"}>Criar Metas</Link> </span>}
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '1rem 0px 8.5rem 0px ' }} />

        <div className="menu-item">
          <img className="StyleIcones" src={iconeConfig}/> {isExpanded && <span className="NavText" >Configurações</span>}
        </div>
        <div className="menu-item">
          <img className="StyleIcones" src={iconeAjuda}/> {isExpanded && <span className="NavText" >Ajuda e Suporte</span>}
        </div>
        <div className="menu-item">
          <img className="StyleIcones" src={iconeSobre}/> {isExpanded && <span className="NavText" >Sobre</span>}
        </div>
        <div className="menu-item">
          <img className="StyleIcones" src={iconeSair}/> {isExpanded && <span className="NavText" >Sair</span>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

