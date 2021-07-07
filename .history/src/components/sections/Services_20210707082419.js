import React from "react";

export default class Services extends React.Component {
  render() {
    return (
      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 cnt_head">
              <span class="sub_head">
                Trabalhamos sempre pensando na performance do seu negócio.
              </span>
              <h2 class="s_head">Nossos Serviços</h2>
              <p class="h_body">
                Te fornecemos os serviços mais exenciais. <br />
                Fazemos todos os esforços para sempre surpeender o cliente
                entregando uuma experiência Incrivel.
              </p>
            </div>
          </div>
          <div class="row ser_cnt">
            <div class="col-lg-4 col-md-12 col-xs-12 serv">
              <div class="card">
                <span class="ser_ico">
                  <i class="far fa-edit"></i>
                </span>
                <span class="ser_ttl">Criação de Conteudo </span>
                <p class="ser_dsc card-text">
                  Criamos conteudo para seu Blog, e todas as midias sociais
                  &nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12 serv">
              <div class="card">
                <span class="ser_ico">
                  <i class="fas fa-laptop-code"></i>
                </span>
                <span class="ser_ttl">Desenvolvimento</span>
                <p class="ser_dsc card-text">
                  Desenvolvemos todos os tipos de sistemas, sites e aplicativos
                  mobile &nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12 serv">
              <div class="card">
                <span class="ser_ico">
                  <i class="fas fa-chart-line"></i>
                </span>
                <span class="ser_ttl">Marketing Digital</span>
                <p class="ser_dsc card-text">
                  Google Ads, Instagram x Face Ads e<b>Lançamentos Digitais</b>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12 serv">
              <div class="card">
                <span class="ser_ico">
                  <i class="fas fa-file-invoice-dollar"></i>
                </span>
                <span class="ser_ttl">Otimização de Busca</span>
                <p class="ser_dsc card-text">
                  Seus clientes precisam te encontrar! <br />
                  Te colocamos a onde você deve ficar no Google, no TOPO!
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12 serv">
              <div class="card">
                <span class="ser_ico">
                  <i class="far fa-file-alt"></i>
                </span>
                <span class="ser_ttl">UI/UX Design</span>
                <p class="ser_dsc card-text">
                  Desenvolvemos interfaces <b>Incriveis</b> pensadas na
                  usabilidade e experiencia do seu cliente
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12 serv">
              <div class="card">
                <span class="ser_ico">
                  <i class="far fa-file-code"></i>
                </span>
                <span class="ser_ttl">Automação</span>
                <p class="ser_dsc card-text">
                  Reduzimos o trabalho manual da sua empresa, que tal focar no
                  que realmente importa?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
