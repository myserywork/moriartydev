import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import swal from 'sweetalert';

export default class Agenda extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          id: 1,
          title: 'Horário Fechado',
          start: '2020-03-23T08:00',
          color: '#747474',
          extendedProps: {
            state: 'close'
          }
        },
        {
          id: 2,
          title: 'Horário Disponível',
          start: '2020-03-26T17:00',
          extendedProps: {
            state: 'open'
          }
        },
        {
          id: 3,
          title: 'Horário Agendado',
          start: '2020-03-27T08:00',
          color: '#bc4200',
          extendedProps: {
            state: 'close'
          }
        }
      ],
      codigoAgendamento: ''
    }

    this.handleEventClick = this.handleEventClick.bind(this);
    this.handleCodigoAgendamentoChange = this.handleCodigoAgendamentoChange.bind(this);
  }

  handleEventClick(e) {
    if (e.event.extendedProps.state == 'open') {
      if (this.state.codigoAgendamento) {
        swal({
          title: "Confirmação",
          text: "Deseja agendar o atendimento para o dia\n" + this.formatDateTime(e.event.start) + "?",
          icon: "warning",
          buttons: [
            {
              text: "Cancelar",
              value: false,
              visible: true,
              closeModal: true,
            },
            {
              text: "Agendar",
              value: true,
              visible: true,
              closeModal: true,
            }
          ]
        })
        .then((ok) => {
          if (ok) {
            swal("Pronto!", "Agendamento realizado com sucesso!", "success");
          }
        });
      } else {
        swal("Ops!", "Digite o código de agendamento para agendar esse horário!", "error");
      }
    } else {
      swal("Ops!", "Esse horário não está disponível para agendamento!", "error");
    }
  }

  formatDateTime(dt) {
    const date = new Date(dt);
    let y = date.getFullYear();
    let n = date.getMonth();
    if (n < 10) { n = '0' + n; }
    let d = date.getDay();
    if (d < 10) { d = '0' + d; }
    let h = date.getHours();
    if (h < 10) { h = '0' + h; }
    let m = date.getMinutes();
    if (m < 10) { m = '0' + m; }


    return `${d}/${n}/${y} às ${h}:${m}`;
  }

  handleCodigoAgendamentoChange(e) {
    this.setState({ codigoAgendamento: e.target.value });
  }

  render() {
    return (
      <div className="section section-pad section-bg-alt">
    		<div className="container">
          <div className="row text-center">
            <div className="col">
              <div className="section-head">
                <h2 className="section-title">Agendamento
                  <span>Agenda</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6 mx-auto">
              <div className="form-group text-center">
                <label>Código de Agendamento</label>
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="Digite o código de agendamento"
                  value={this.codigoAgendamento}
                  onChange={this.handleCodigoAgendamentoChange} />
                <p className="text-info">Após digitar o código, clique em um horário disponível para agendar o atendimento.</p>
              </div>
            </div>
          </div>


    			<div class="row align-items-center">
    				<div class="col-md-10 offset-md-1">
              <FullCalendar
                defaultView="dayGridMonth"
                events={this.state.events}
                locale="pt-br"
                eventTimeFormat={{
                  hour: 'numeric',
                  minute: '2-digit',
                  meridiem: false
                }}
                eventClick={this.handleEventClick}
                plugins={[ dayGridPlugin ]} />
    				</div>
    			</div>
    		</div>
	    </div>
    )
  }
}
