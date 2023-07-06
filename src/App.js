import './App.css';

function App() {
  return (
    <div className="AppContainer">
      <header className="navbar w-nav">
        <div className="menu-content">
          <a href="#topo" className="brand w-nav-brand w--current">
            <div className="logo-text">Nicolas Rodrigues</div>
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="#trabalho" className="nav-link w-nav-link">Trabalhos</a>
            <a href="#projetos-paralelos" className="nav-link w-nav-link">Projetos Pessoais</a>
            <a href="#manifesto" className="nav-link w-nav-link">Manifesto</a>
            <a href="#habilidades" className="nav-link w-nav-link">Habilidades</a>
            <a href="" className="nav-link w-nav-link">Currículo</a>
            <a href="" className="nav-link-contact w-nav-link">Vamos Conversar</a>
          </nav>
        </div>
        <div className="w-nav-overlay" id="w-nav-overlay-0"></div>
      </header>
      <div id="topo" className="content-container"></div>
      <div id="trabalho" className="content-container"></div>
      <div id="projetos-paralelos" className="content-container"></div>
      <div id="manifesto" className="content-container"></div>
      <div id="habilidades" className="content-container"></div>
      <div id="contato" className="content-container"></div>
      <footer className="footer-container"></footer>
    </div>
  );
}
export default App;
