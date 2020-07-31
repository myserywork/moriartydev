import React from "react";
import Navbar from "./Navbar";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
          <div class="container">
            <a class="navbar-brand" href="index1.html">
              <img src="assets/images/logo.png" height="40" alt="logo" />
              &nbsp;MoriartyDEV
            </a>

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
                  <a class="nav-link" href="#cover">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#introduction">
                    Sobre
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#services">
                    Serviços
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#projects">
                    Projetos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#news">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#team">
                    Time
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="cover">
          <div class="container cvr_cnt">
            <div class="row cvr_row">
              <div class="col-lg-6 cvr-ttl align-self-center">
                <p class="cvr-title">
                  <span class="cvr-title-tp">MoriartyDEV</span>
                </p>
                <p class="cvr-body">
                  <h1> Soluções digitais estratégicas. </h1>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex p-2 justify-content-between cvr-ftr align-items-center flex-wrap">
                <div class="p-2 ftr-sc d-flex flex-row justify-content-between">
                  <a href="https://www.facebook.com/moriartydev" class="ml-2">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/moriartydev" class="ml-2">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
