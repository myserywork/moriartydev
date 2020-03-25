import React from 'react';

export default class Faq extends React.Component {
  render() {
    return(

      <div className="section section-pad no-pb section-bg-alt" id="faq">
      		<div className="container">
      			<div className="row text-center">
      				<div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      					<div className="section-head">
      						<h2 className="section-title">Perguntas frequentes
      							<span>FAQS</span>
      						</h2>
      						<p>Tentamos resolver todas as perguntas mais frequentes sobre o nosso negocio, então de uma olhadinha aqui em baixo!.</p>
      					</div>
      				</div>
      			</div>
      			<div className="row">
      				<div className="col-md-8 offset-md-2">
      					<div className="tab-custom">

      						<ul className="nav nav-tabs text-center">
      							<li className="nav-item">
      								<a className="nav-link active" data-toggle="tab" href="#tab-1">FPS</a>
      							</li>
      							<li className="nav-item">
      								<a className="nav-link" data-toggle="tab" href="#tab-2">Conexão</a>
      							</li>
      							<li className="nav-item">
      								<a className="nav-link" data-toggle="tab" href="#tab-3">Pagamento</a>
      							</li>
      							<li className="nav-item">
      								<a className="nav-link" data-toggle="tab" href="#tab-4">Outros</a>
      							</li>
      						</ul>

      						<div className="tab-content">
      							<div className="tab-pane fade show active" id="tab-1">
      								<div className="accordion" id="accordion-1">
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a data-toggle="collapse" data-target="#collapse-1-1">
      													É seguro?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-1-1" className="collapse show" data-parent="#accordion-1">
      											<div className="card-body">
      												<p>Sim, usamos o pagseguro como forma de pagamento para manter todos em um ambiente seguro.</p>
      											</div>
      										</div>
      									</div>
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a className="collapsed" data-toggle="collapse" data-target="#collapse-1-2">
      												 Realmente vou ganhar mais FPS?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-1-2" className="collapse" data-parent="#accordion-1">
      											<div className="card-body">
      												<p>A grande maioria de nossos clientes ganham de 5 a 40% de FPS boost</p>
      											</div>
      										</div>
      									</div>
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a className="collapsed" data-toggle="collapse" data-target="#collapse-1-3">
      												  Meu grafico vai ficar ruim?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-1-3" className="collapse" data-parent="#accordion-1">
      											<div className="card-body">
      												<p>Iremos ajustar o maximo possivel para regular grafico/fps de acordo com seu hardware</p>
      											</div>
      										</div>
      									</div>
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a className="collapsed" data-toggle="collapse" data-target="#collapse-1-4">
      												  Quanto tempo dura essa otimização?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-1-4" className="collapse" data-parent="#accordion-1">
      											<div className="card-body">
      												<p>Basicamente limpamos todos os arquivos maliciosos então um longo prazo.</p>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      							<div className="tab-pane fade" id="tab-2">
      								<div className="accordion" id="accordion-2">
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a data-toggle="collapse" data-target="#collapse-2-1">
      												  Como vocês irão conectar ao meu computador?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-2-1" className="collapse show" data-parent="#accordion-2">
      											<div className="card-body">
      												<p>Usaremos o <a href="https://www.teamviewer.com/pt/?pid=google.teamviewer_ex.s.pt&gclid=EAIaIQobChMI1Oaa6d_s2QIVlQqRCh1eyQBpEAAYASAAEgLkOvD_BwE">Teamviewer</a> um programa gratuito e seguro do mercado .</p>
      											</div>
      										</div>
      									</div>
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a className="collapsed" data-toggle="collapse" data-target="#collapse-2-2">
      													Vocês irão instalar algo em meu computador? <span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-2-2" className="collapse" data-parent="#accordion-2">
      											<div className="card-body">
      												<p>Sim, instalaremos alguns otimizadores feitos por nós para garantir 100% a seguraça de vocês.</p>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      							<div className="tab-pane fade" id="tab-3">
      								<div className="accordion" id="accordion-3">
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a data-toggle="collapse" data-target="#collapse-3-1">
      													Como é o pagamento?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-3-1" className="collapse show" data-parent="#accordion-3">
      											<div className="card-body">
      												<p>Via pagseguro, poderá ser pago com cartão de crédito, boleto bancario , debito online , BITCOIN, ETHEREUM, ZCASH</p>
      											</div>
      										</div>
      									</div>
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a className="collapsed" data-toggle="collapse" data-target="#collapse-3-2">
      												  E se houver  algum problema?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-3-2" className="collapse" data-parent="#accordion-3">
      											<div className="card-body">
      												<p>Caso não goste do resultado, você tem 7 dias para pedir seu dinheiro de volta.</p>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      							<div className="tab-pane fade" id="tab-4">
      								<div className="accordion" id="accordion-4">
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a data-toggle="collapse" data-target="#collapse-4-1">
      													Posso fazer em mais de um PC?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-4-1" className="collapse show" data-parent="#accordion-4">
      											<div className="card-body">
      												<p>Claro, se for para a mesma pessoa você ainda ganha 40% de desconto para o proximo computador</p>
      											</div>
      										</div>
      									</div>
      									<div className="card">
      										<div className="card-header">
      											<h5>
      												<a className="collapsed" data-toggle="collapse" data-target="#collapse-4-2">
      												  Tem um tempo de suporte?<span className="plus-minus"><span className="ti ti-angle-up"></span></span>
      												</a>
      											</h5>
      										</div>
      										<div id="collapse-4-2" className="collapse" data-parent="#accordion-4">
      											<div className="card-body">
      												<p>Estamos sempre online no nosso chat para responder suas perguntas</p>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
    )
  }
}
