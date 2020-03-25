import React from 'react';

export default class Subscribe extends React.Component {
  render() {
    return(
      <div className="section subscribe-section section-pad-md section-bg section-connect">
      		<div className="container">
      			<div className="row text-center">
      				<div className="col-md-6 offset-md-3">
      					<h4 className="section-title-md">Não perca nada, receba e-mails</h4>
      					<form id="subscribe-form" action="http://demo.themenio.com/ico/form/subscribe.php" method="post" className="subscription-form inline-form">
      						<input type="text" name="youremail" className="input-round required email" placeholder="seu melhor email" />
      						<input type="text" className="d-none" name="form-anti-honeypot" value="" />
      						<button type="submit" className="btn btn-plane">Inscrever-se</button>
      						<div className="subscribe-results"></div>
      					</form>
      				</div>
      			</div>
      		</div>
      	</div>
    )
  }
}
