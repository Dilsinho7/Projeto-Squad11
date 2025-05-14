import imgBanco from './assets/img/img-branco.png';
import "./index.css";
import iconeRobo from './assets/img/iconeRobo.png';


function Topbar() {
  return (
    <div style={{
      backgroundColor: "#FCFB30",
      padding: "0.78rem 2rem 0.78rem 0",
      height: 53,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div><img className='Logobanco' src={imgBanco}/></div>
      <div style={{width: '90px' ,display:'flex', alignItems:'center', justifyContent: 'space-between'}} >
        <div> <img style={{width: '20px'}} src={iconeRobo} /> </div>
        <div style={{fontFamily: 'Montserrat, sans-serif', color: '#465EFF', fontWeight: 600, fontSize: '14px'}} >ADM</div>
      </div>
    </div>
  );
}

export default Topbar;
