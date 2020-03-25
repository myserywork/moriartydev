
import React from 'react';

export default class Buy extends React.Component {
  render() {
    return(
      <div className="section section-pad no-pb section-bg-alt section-fix" id="comprar">
        <div className="container">

          <div className="row text-center">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="section-head">
                <h2 className="section-title">Pagamento & Agenda
                  <span>Adiquirir</span>
                </h2>
                <p>Trabalhamos com os melhores e mais seguros metódos de pagamento para garantir sua segurança</p>
              </div>
            </div>
          </div>

          <div className="row text-center">

            <div className="col-md-6 col-lg-12">
              <div className="team-circle">
                  <h4>Pagamento e agendamento de horario</h4>
                  <p>Após pagamento você agenda manutenção na nossa <a href="https://www.facebook.com/maisfps/appointments/" target="_blank" rel="noopener noreferrer">Agenda Online</a>

                   <h6><b>Horários para manutenção</b></h6>
                   Segundas a sextas 10:00 - 20:00 <br />
                   Sabados, domingos e feriados 12:00 - 19:00
                  </p>

                  <form action="https://pagseguro.uol.com.br/checkout/v2/payment.html" method="post" onsubmit="PagSeguroLightbox(this); return false;">

                  <input type="hidden" name="code" value="5525FA8A5252EDD334134FAA73A4E4BE" />
                  <input type="hidden" name="iot" value="button" />


                  <script type="text/javascript" src="https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js"></script>

                  <input type="image" src="https://lh3.googleusercontent.com/uE7iqwPm0jXleGBJ340LGnNbg7c0Nepjm3PXx6YPoab4YIwrhf7AGaFyJkp9hgzM6ms=w300" alt="" />

                  </form>

                <div className="team-info">
                  <h5 className="team-name">Pagseguro</h5>
                  <span className="team-title">Cartões nacionais, crédito, débito e boleto. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
