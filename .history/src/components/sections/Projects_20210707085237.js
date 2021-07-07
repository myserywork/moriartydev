import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import OwlCarousel from "react-owl-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const carrouselItemStyle = (img) => {
  return {
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 320,
    height: 420,
    borderRadius: 20,
    alignItens: "center",
    color: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textShadowColor: "#000",
    fontFfamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 25,
    marginTop: 50,
  };
};

const carrouselItemImgStyle = () => {
  return {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 320,
    height: 420,
    borderRadius: 20,
    alignItens: "center",
    color: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textShadowColor: "#000",
    fontFfamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 25,
    marginTop: 50,
    objectFit: "cover",
    margin: 100,
  };
};

const options = {
  items: 8,
  rewind: true,
  nav: true,
  autoplay: true,
};

export default class Projects extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1400: {
        items: 6,
      },
    },
  };

  render() {
    return (
      <section id="projects">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 cnt_head">
              <span class="sub_head">projetos </span>
              <h2 class="s_head">Nossos trabalhos</h2>
              <p class="h_body">Soluções aplicadas</p>
            </div>
          </div>
        </div>

        <OwlCarousel className="owl-theme" responsive={this.state.responsive}>
          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/D3q94qT.png")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">eCommerce</div>
                <div class="pr_head">Scorpion Shop</div>
                <div class="pr_lnk">
                  <a href="http://maisfps.com/" class="button_main">
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/tTN7qkG.png")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Plataforma de Atendimento Online</div>
                <div class="pr_head">Produtivamente</div>
                <div class="pr_lnk">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.produtivamente&hl=pt_BR&gl=US"
                    class="button_main"
                  >
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/D3q94qT.png")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">APP + Web</div>
                <div class="pr_head">Gesto Amigo</div>
                <div class="pr_lnk">
                  <a href="http://gestoamigo.com.br" class="button_main">
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle(
              "https://cdn.dribbble.com/users/1831658/screenshots/13932069/media/f91717403a2ad81993ebaaaf0db040c5.png"
            )}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Mobile iOS</div>
                <div class="pr_head">Livepets iOS app</div>
                <div class="pr_lnk">
                  <a
                    href="https://dribbble.com/shots/13932069-Livepets-iOS-app"
                    class="button_main"
                  >
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle(
              "https://pbs.twimg.com/profile_images/1030298061032116229/Q94LkCgQ_400x400.jpg"
            )}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Desenvolvimento MultiPlataforma</div>
                <div class="pr_head">FKLEAGUE</div>
                <div class="pr_lnk">
                  <a
                    href="https://web.archive.org/web/20180422180230/http://fkleague.com/"
                    class="button_main"
                  >
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle(
              "https://pbs.twimg.com/profile_images/825403586335109120/L-Ecc3P2.jpg"
            )}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">eCommerce</div>
                <div class="pr_head">Roxpin</div>
                <div class="pr_lnk">
                  <a
                    href="https://web.archive.org/web/20170519123808/http://www.roxpin.com/"
                    class="button_main"
                  >
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/vNYNpyg.png")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Desenvolvimento MultiPlataforma</div>
                <div class="pr_head">MaisFPS</div>
                <div class="pr_lnk">
                  <a href="http://maisfps.com/" class="button_main">
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/JWUXZsR.png")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Desenvolvimento Web</div>
                <div class="pr_head">
                  <span>LBEE</span>
                </div>
                <div class="pr_lnk">
                  <a href="https://lbee.com.br" class="button_main">
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/56lS1o3.png")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Design Grafico</div>
                <div class="pr_head">PILATERIA</div>
                <div class="pr_lnk">
                  <a
                    href="https://www.behance.net/gallery/63182579/PILATERIA-Design-and-Brand-Guidelines"
                    class="button_main"
                  >
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/gLITSHw.jpg")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Design Grafico</div>
                <div class="pr_head">Gunnar</div>
                <div class="pr_lnk">
                  <a
                    href="https://www.behance.net/gallery/78784259/Gunnar-Outdoor-Poste-2014"
                    class="button_main"
                  >
                    Ver Mais &nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle("https://i.imgur.com/HJRvI5c.png")}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Desing Grafico</div>
                <div class="pr_head">Levant</div>
                <div class="pr_lnk">
                  <a
                    href="https://www.behance.net/gallery/69317895/Levant-branding-and-stationery"
                    class="button_main"
                  >
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="item"
            style={carrouselItemStyle(
              "https://cdn.dribbble.com/users/1831658/screenshots/13644660/media/eabc49c108a80531a0bcd17f22cb699c.png"
            )}
          >
            <div class="pr_obj">
              <div class="p-3 pr_main">
                <div class="pr_subhead">Desing Grafico</div>
                <div class="pr_head">PUBG Champions</div>
                <div class="pr_lnk">
                  <a
                    href="https://dribbble.com/shots/13644660-PUBG-Project"
                    class="button_main"
                  >
                    Ver Mais&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-angle-right arrow_go"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <OwlCarousel
                margin={10}
                ref="projects"
                options={options}
              ></OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
