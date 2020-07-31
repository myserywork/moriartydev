import React from "react";
import { Link } from "react-router-dom";

export default class News extends React.Component {
  render() {
    return (
      <section id="news">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 cnt_head">
              <span class="sub_head">nos conheça</span>
              <h2 class="s_head">MORIARTYDEV</h2>
              <p class="h_body">
                Conheça um pouco sobre as soluções aplicadas e como gostamos de
                trabalhar em cada projeto
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 bl_sec mb-3">
              <div class="card">
                <div class="bl_img">
                  <Link to="#">
                    <img
                      src="https://i.imgur.com/JWUXZsR.png"
                      class="img-fluid"
                      alt="thumb"
                      style={{ top: -50 }}
                    />
                  </Link>
                </div>
                <div class="bl_body">
                  <div class="bl_main">
                    <span class="bl_title">
                      <Link to="#">
                        Liga Brasileira de Esportes Eletronicos
                      </Link>
                    </span>
                    <br />
                    <p class="bl_text">
                      Uma plataforma de campeonatos, um marketplace, com dezenas
                      de integrações e uma Inteligencia aritificial.
                    </p>
                  </div>
                  <div class="bl_ftr d-flex justify-content-between align-items-center">
                    <Link to="#" class="ln1 d-flex align-items-center">
                      <span class="lns1">
                        <img
                          src="https://i.imgur.com/C9IWvHV.png"
                          class="image-fluid rounded-circle usr_img"
                          height="35"
                          width="35"
                          alt="user"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <div class="lns2">
                        <span class="usr_name">PedroMoriarty</span>
                        <span class="usr_date"></span>
                      </div>
                    </Link>
                    <Link to="#" class="ln2">
                      <span class="usr_cmt">
                        <i class="far fa-comment-dots"></i>&nbsp;&nbsp;2.3K
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 bl_sec mb-3">
              <div class="card">
                <div class="bl_img">
                  <Link to="#">
                    <img
                      src="https://i.imgur.com/D3q94qT.png"
                      class="img-fluid"
                      alt="thumb"
                      style={{ top: -50 }}
                    />
                  </Link>
                </div>
                <div class="bl_body">
                  <div class="bl_main">
                    <span class="bl_title">
                      <Link to="/blog/2#cover">Scorpion Shop</Link>
                    </span>
                    <br />
                    <p class="bl_text">
                      eCommerce completo que movimenta milhões, sem nenhum item
                      fisico... &nbsp;
                      <br />
                      <br />.
                    </p>
                  </div>
                  <div class="bl_ftr d-flex justify-content-between align-items-center">
                    <Link to="#" class="ln1 d-flex align-items-center">
                      <span class="lns1">
                        <img
                          src="https://i.imgur.com/C9IWvHV.png"
                          class="image-fluid rounded-circle usr_img"
                          height="35"
                          width="35"
                          alt="user"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <div class="lns2">
                        <span class="usr_name">PedroMoriarty</span>
                      </div>
                    </Link>
                    <Link to="#" class="ln2">
                      <span class="usr_cmt">
                        <i class="far fa-comment-dots"></i>&nbsp;&nbsp;3.1K
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 bl_sec mb-3">
              <div class="card">
                <div class="bl_img">
                  <Link to="#">
                    <img
                      src="https://i.imgur.com/vNYNpyg.png"
                      class="img-fluid"
                      alt="thumb"
                      style={{ top: -50 }}
                    />
                  </Link>
                </div>
                <div class="bl_body">
                  <div class="bl_main">
                    <span class="bl_title">
                      <Link href="/blog/3">MaisFPS</Link>
                    </span>
                    <br />
                    <p class="bl_text">
                      Primeiro FPS Booster Brasileiro, Aplicação multi
                      plataforma com marketplace interno. <br />
                      &nbsp;&nbsp; &nbsp;&nbsp;
                    </p>
                  </div>
                  <div class="bl_ftr d-flex justify-content-between align-items-center">
                    <Link to="#" class="ln1 d-flex align-items-center">
                      <span class="lns1">
                        <img
                          src="https://i.imgur.com/C9IWvHV.png"
                          class="image-fluid rounded-circle usr_img"
                          height="35"
                          width="35"
                          alt="user"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <div class="lns2">
                        <span class="usr_name">PedroMoriarty</span>
                      </div>
                    </Link>
                    <Link to="#" class="ln2">
                      <span class="usr_cmt">
                        <i class="far fa-comment-dots"></i>&nbsp;&nbsp;2.9K
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 bl_full_ln">
              Quer nos conhecer mais? dá uma olhada no nosso
              <Link to="/blog" class="button_mainy">
                {" "}
                BLOG
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
