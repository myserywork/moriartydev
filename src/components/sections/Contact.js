import React from 'react';

export default class Contact extends React.Component {
  render() {
    return(
      <div className="section section-pad section-bg-alt" id="contact">
    		<div className="container">
    			<div className="row text-center">
    				<div className="col">
    					<div className="section-head">
    						<h2 className="section-title">Contate-nos
    							<span>CONTATO</span>
    						</h2>
    						<p>Alguma pergunta? fale conosco</p>
    					</div>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-lg-8 offset-lg-2">
    					<ul className="contact-info">
    						<li><em className="fa fa-whatsapp"></em><span><a href="https://api.whatsapp.com/send?phone=5561998009987&text=Oi,%20queria%20conversar%20sobre%20a%20MAIS%20FPS"> 61 - 9 9800-9987</a></span></li>
    						<li><em className="fa fa-envelope"></em><span>contato@maisfps.com</span></li>
    						<li><em className="fa fa-facebook"></em><span><a href="https://www.facebook.com/maisfps">Pagina Facebook</a></span></li>
    					</ul>
    				</div>
    			</div>
    		</div>
     </div>
    )
  }
}
