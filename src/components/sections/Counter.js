import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <section id="counter_up">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-xs-6 text-center cocnt">
              <h3>
                <span class="count counter" data-count="3000">
                  100
                </span>
                <span class="count_txt">+</span>
              </h3>
              <span class="count_bdy">Clientes Satisfeitos</span>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 text-center cocnt">
              <h3>
                <span class="count_txt">R$</span>
                <span class="count counter" data-count="10">
                  0
                </span>
                <span class="count_txt">+</span>
              </h3>
              <span class="count_bdy">Milhões dos nossos clientes </span>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 text-center cocnt">
              <h3>
                <span class="count counter" data-count="135">
                  0
                </span>
                <span class="count_txt">+</span>
              </h3>
              <span class="count_bdy">Projetos Completos</span>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 text-center cocnt">
              <h3>
                <span class="count counter" data-count="5">
                  0
                </span>
                <span class="count_txt">+</span>
              </h3>
              <span class="count_bdy">Membros de uma Equipe Incrivel</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
