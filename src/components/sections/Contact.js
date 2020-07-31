import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-6 cnt_head align-self-center">
              <span class="sub_head">
                Que tal nos contar mais sobre seu negocío ?
              </span>
              <h2 class="s_head">Contate-nos</h2>
              <p class="h_body">
                Se precisar ajudar com nossos serviços, perguntas sobre nossos
                trabalhos ou estiver enfrentando dificuldades técnicas, por
                favor, não hesite em entrar em contato conosco.
              </p>
              <div class="cntc_info d-flex flex-row flex-wrap">
                <div class="cntc_info_e">
                  <div class="cntc_info_head">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Endereço
                    </span>
                    <br />
                  </div>
                  <span class="cntc_info_b">CSG 3 LOTE 7</span>
                </div>
                <div class="cntc_info_e">
                  <div class="cntc_info_head">
                    <span>
                      <i class="fas fa-phone-alt"></i>&nbsp;&nbsp;Telefones
                    </span>
                    <br />
                  </div>
                  <span class="cntc_info_b">61998009987</span>
                  <br />
                  <span class="cntc_info_b">61981223370</span>
                </div>
                <div class="cntc_info_e">
                  <div class="cntc_info_head">
                    <span>Outros</span>
                    <br />
                  </div>

                  <span class="cntc_info_b">
                    <i class="fas fa-envelope"></i>
                    &nbsp;&nbsp;contato@moriartydev.com.br
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 cntc_form align-self-center">
              <form>
                <div class="form-group">
                  <label>Nome</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Seu nome"
                  />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Digite seu melhor e-mail"
                  />
                </div>
                <div class="form-group">
                  <label>Telefone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="digite seu telefone"
                  />
                </div>
                <div class="form-group">
                  <label>Mensaegm</label>
                  <textarea
                    class="form-control"
                    placeholder="Olá ... "
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="button_main"
                  style={{ marginTop: 40, marginLeft: 28 }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
