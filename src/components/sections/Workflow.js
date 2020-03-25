import React from 'react';

export default class Workflow extends React.Component {
  render() {
    return(
      <div className="section section-pad section-bg section-connect" id="roadmap">
    		<div className="container">

    			<div className="row text-center">
    				<div className="col">
    					<div className="section-head">
    						<h2 className="section-title">Nosso workflow
    							<span>WorkMap</span>
    						</h2>
    					</div>
    				</div>
    			</div>

    			<div className="row roadmap-list align-items-end">
    				<div className="col-lg">
    					<div className="single-roadmap roadmap-sm roadmap-done">
    						<h6>Compra</h6>
    						<p>Assim que a compra for confirmada entraremos em contato .</p>
    					</div>
    				</div>
    				<div className="col-lg width-0">
    					<div className="single-roadmap roadmap-down roadmap-done">
    						<h6>Marcando horario</h6>
    						<p>Marcaremos um horario nas proximas 24 horas para o atendimento remoto </p>
    					</div>
    				</div>
    				<div className="col-lg">
    					<div className="single-roadmap roadmap-lg">
    						<h6>Conexão</h6>
    						<p>Compartilhamos os dados da conexão.</p>
    					</div>
    				</div>
    				<div className="col-lg width-0">
    					<div className="single-roadmap roadmap-down">
    						<h6>análise1</h6>
    						<p>Fazemos o levantamento dos erros e problemas no seu sistema operacional</p>
    					</div>
    				</div>
    				<div className="col-lg">
    					<div className="single-roadmap roadmap-sm">
    						<h6>Removemos Aplicativos perigosos!</h6>
    						<p>Removemos todo o tipo de aplicativos para você e seu micro. </p>
    					</div>
    				</div>
    				<div className="col-lg width-0">
    					<div className="single-roadmap roadmap-down">
    						<h6>Foco na performance</h6>
    						<p>Alteramos todos os aplicativos inuteis que o sistema operacional usa para focar o maximo no seu JOGO!</p>
    					</div>
    				</div>
    				<div className="col-lg">
    					<div className="single-roadmap roadmap-lg">
    						<h6>Configuramos seu jogo</h6>
    						<p>Fazemos toda a configuração para seu jogo estar no maximo de desempenho do seu hardware</p>
    					</div>
    				</div>

    				<div className="col-lg">
    					<div className="single-roadmap roadmap-lg">
    						<h6>Hora do Jogo! </h6>
    						<p>Curta seu jogo com melhor desempenho sem lag, de uma forma segura.</p>
    					</div>
    				</div>
    			</div>
    		</div>
  	  </div>
    )
  }
}
