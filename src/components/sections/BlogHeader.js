import React from "react";
import { Link } from "react-router-dom";

export default class BlogHeader extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img src="/assets/images/logo.png" height="40" alt="logo" />
              &nbsp;MoriartyDEV
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/#cover">
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/#introduction">
                    Sobre
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/#team">
                    Time
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/#services">
                    Serviços
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/#projects">
                    Projetos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/#news">
                    Blog
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/#contact">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section
          id="cover"
          style={{ backgroundImage: `url(${this.props.image})` }}
        >
          <div class="container">
            <div class="row cover_wrapper">
              <div class="col-lg-6 align-self-center">
                <h1 class="wrapper_head">{this.props.title}</h1>
                <h5 class="wrapper_nav">
                  <span>
                    <a href="index.html" class="wrapper_nav_link">
                      Inicio
                    </a>
                  </span>
                  &nbsp;&nbsp;/&nbsp;&nbsp;<span>Blog MoriartyDEV</span>
                </h5>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
