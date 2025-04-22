import imgBranco from './assets/img/img-branco.png';

function App() {
    return(
    <>
    <header className="header-color">
        <div className='header-logo'>
            <img className='logo-img' src={imgBranco} alt="" />
        </div>
    </header>
    <main className='tela-centro'>
        <form className='centro-login' action="/login" method="POST">
            <div className='logo'>
                <img className='logo-img' src={imgBranco} alt="" />
            </div>
            <div className='metodo-login'>
                <h5 className='Entre'>ENTRE COMO</h5>
                <h5 className='administrador'>Administrador</h5>
            </div>
            <div className="Campo-usuario">
                <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    placeholder="Usuário"
                    required
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    required
                    />
                </div>
            </div>
            <div className='button-entrar'>
                 <button className='oBotao' type="submit">Entrar</button>
            </div>
        </form>
    </main>
    </>
);
}

export default App