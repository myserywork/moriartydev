import React from 'react';

export default class Banner extends React.Component {
  render() {
    return(
      <div id="header" className="banner banner-curb banner-particle d-flex align-items-center">
        <div className="container">
  				<div className="banner-content">
  					<div className="row align-items-center mobile-center">
  						<div className="col-lg-6 col-md-12 order-lg-first">
  							<div className="header-txt">
  								<h1>Turbine seu computador</h1>
  								<p className="lead color-secondary">Configuramos completamente seu computador e deixamos turbinado.</p>
  								<ul className="btns">
  									<li><a href="#intro" className="btn">Como Funciona</a></li>
  									<li><a href="#contact" className="btn btn-alt">Contato</a></li>
  								</ul>
  								<ul className="social">
  									<li><a href="https://www.facebook.com/maisfps/" target="_blank"><em className="fa fa-facebook"></em></a></li>
  								  <li><a href="#"><em className="fa fa-twitter"></em></a></li>
  									<li><a href="#"><em className="fa fa-youtube-play"></em></a></li>
  								</ul>
  							</div>
  						</div>
  						<div className="col-lg-6 col-md-12 order-first">
  							<div className="header-image">
  								<img src="./images/baner.png" alt="header" />
  								<img className="header-image-icon left-icon" src="./images/header-icon-a.gif" alt="header-icon" />
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
     </div>
    )
  }
}
