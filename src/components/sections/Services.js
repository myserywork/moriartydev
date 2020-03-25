import React from 'react';

export default class Services extends React.Component {
  render() {
    return(
      <div className="section section-pad section-bg-btoa" id="apps">
      		<div className="container">

      			<div className="row text-center">
      				<div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      					<div className="section-head">
      						<div className="heading-animation">
      							<span className="line-1"></span><span className="line-2"></span>
      							<span className="line-3"></span><span className="line-4"></span>
      							<span className="line-5"></span><span className="line-6"></span>
      							<span className="line-7"></span><span className="line-8"></span>
      						</div>
      						<h2 className="section-title">Serviços
      							<span>MAIS FPS</span>
      						</h2>
      						<p>Como qualquer empresa pensamos na evolução, mantendo a honestidade.</p>
      					</div>
      				</div>
      			</div>

      			<div className="row align-items-center">
      				<div className="col-md-6">
      					<div className="res-m-btm">
      						<img src="http://maisfps.com/logo.gif" alt="graph" />
      					</div>
      				</div>

      				<div className="col-md-5 offset-md-1">
      					<div className="text-block">
      						<p>Algumas funções para aumentar seu FPS nos JOGOS </p>
      						<ul>
      							<li>Removemos softwares nocivos e que podem ocasionar problemas ao seu sistema</li>
      							<li>Checar temperatura dos componentes de sua máquina</li>
      							<li>Configuramos seu computador para performance</li>
      							<li>Configuramos o seu jogo</li>
                    <li>Atualizamos seus drivers</li>
                    <li>Otimização da GPU </li>
      							<li>Configuramos seu DNS</li>
                    <li>Suporte via E-mail / WhatsApp / Facebook Messenger.</li>
      						</ul>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>

    )
  }
}
