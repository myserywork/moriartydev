import React from "react";

export default class Team extends React.Component {
  render() {
    return (
      <section id="team">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 cnt_head">
              <span class="sub_head">Por tras das cortinas </span>
              <h2 class="s_head">Conheça nosso time</h2>
              <p class="h_body">
                Especialistas incriveis para cada area do seu negocio, conheça a
                equipe que nos inspira a construir o novo mundo Web
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row team_cnt">
            <div class="col-lg-3 col-md-6 col-sm-6 team_crd">
              <div class="card">
                <div class="team_img_cnt">
                  <img
                    src="https://i.imgur.com/C9IWvHV.png"
                    class="img-fluid rounded-circle mx-auto mb-3"
                    height="400"
                    width="400"
                    alt="member"
                  />
                  <div class="m_sci">
                    <div class="d-flex justify-content-around align-items-center h-100">
                      <a
                        href="https://www.linkedin.com/in/moriartydev/"
                        class="p-2"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.behance.net/pg9d72" class="p-2">
                        <i class="fab fa-behance"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="m_name text-center">Pedro Moriarty</div>
                <div class="m_dsc text-center">CEO</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 team_crd">
              <div class="card">
                <div class="team_img_cnt">
                  <img
                    src="https://i.imgur.com/QT5ZC54.jpg"
                    class="img-fluid rounded-circle mx-auto mb-3"
                    height="400"
                    width="400"
                    alt="member"
                  />
                  <div class="m_sci">
                    <div class="d-flex justify-content-around align-items-center h-100">
                      <a href="#" class="p-2">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="m_name text-center">Ricardo Souza</div>
                <div class="m_dsc text-center">Desenvolvedor FullStack</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 team_crd">
              <div class="card">
                <div class="team_img_cnt">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGEgemKr973sw/profile-displayphoto-shrink_200_200/0/1608586140893?e=1631145600&v=beta&t=bJWxXYyu_kpz50hx-WyQAeyYVQhPXX1GrcQkTdQGx3c"
                    class="img-fluid rounded-circle mx-auto mb-3"
                    height="400"
                    width="400"
                    alt="member"
                  />
                  <div class="m_sci">
                    <div class="d-flex justify-content-around align-items-center h-100">
                      <a
                        href="https://www.behance.net/louisthecreator#"
                        class="p-1"
                      >
                        <i class="fab fa-behance"></i>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/luiscarvalhoux/"
                        class="p-1"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>

                      <a
                        href="https://dribbble.com/louisthecreator"
                        class="p-1"
                      >
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="m_name text-center">Luis Henrique</div>
                <div class="m_dsc text-center">UX/UI Designer</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 team_crd">
              <div class="card">
                <div class="team_img_cnt">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/user/115/699409106126333.5cae678d89dab.png"
                    class="img-fluid rounded-circle mx-auto mb-3"
                    height="400"
                    width="400"
                    alt="member"
                  />
                  <div class="m_sci">
                    <div class="d-flex justify-content-around align-items-center h-100">
                      <a href="https://www.behance.net/giovanni011" class="p-2">
                        <i class="fab fa-behance"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="m_name text-center">Giovanni Tiago</div>
                <div class="m_dsc text-center">
                  Designer Grafico / Ilustrador
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
