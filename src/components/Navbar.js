import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return(
      <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
        <nav className="container">

          <a className="navbar-brand" href="/">

            <img className="logo logo-light" alt="logo" src="./images/logo_300.png"  />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle">
            <span className="navbar-toggler-icon">
              <span className="ti ti-align-justify"></span>
            </span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarToggle">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link menu-link" href="/#intro">SOBRE<span className="sr-only">(current)</span></a></li>
              <li className="nav-item"><a className="nav-link menu-link" href="/#apps">Serviços</a></li>
              <li className="nav-item"><a className="nav-link menu-link" href="/#roadmap">WorkFlow</a></li>
              <li className="nav-item"><a className="nav-link menu-link" href="/#comprar">Comprar</a></li>
            </ul>
            <ul className="navbar-nav navbar-btns">
              <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link"  href="/agenda">Agendar minha manutenção</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
