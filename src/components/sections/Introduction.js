import React from "react";

export default class Introduction extends React.Component {
  render() {
    return (
      <section id="introduction">
        <div class="container">
          <div class="row justify-content-center icont">
            <div class="col-lg-6 col-md-12 in_img align-self-center">
              <img
                src="https://i.imgur.com/GHXOVqK.png"
                class="img-fluid"
                alt="in_img"
              />
            </div>
            <div class="col-lg-6 col-md-12 align-items-center">
              <span class="sub_head">MoriartyDEV</span>
              <h2 class="s_head">Sobre nós</h2>
              <p class="h_body">
                Aplicamos a o seu negocio soluções digitais estrategicas,
                otimizando todos os passos e usabilidade do seu produto com as
                mais novas Tecnologias do Mercado. Design Grafico, Soluções de
                IA, e-Commerces e Especialização em desenvolvimento web focado
                no e-Sports , com elegante coleção de elementos de interface do
                usuário, todos flexíveis e modulares.
              </p>
              <div class="row">
                <div class="icard col-sm-6">
                  <div class="card c1">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <i class="fas fa-globe-asia"></i>
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">
                          + de 1,000,000 de pessoas conectadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="icard col-sm-6">
                  <div class="card c2">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <i class="fas fa-server"></i>
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">Especialistas em servidores.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="icard col-sm-6">
                  <div class="card c3">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <i class="fas fa-shield-alt"></i>
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">Milhões de dados seguros.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="icard col-sm-6">
                  <div class="card c4">
                    <div class="d-flex flex-row align-items-center h-100 crd_cnt">
                      <div class="p-2">
                        <div class="card-title">
                          <i class="fa fa-trophy"></i>
                        </div>
                      </div>
                      <div class="crd_bdy">
                        <p class="card-text">Premios UX/UI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
