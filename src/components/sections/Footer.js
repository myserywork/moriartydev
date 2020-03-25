import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
      <div className="section footer-scetion no-pt section-pad-sm section-bg">
    		<div className="container">
    			<div className="row text-center">
    				<div className="col-md-12">
    					<ul className="social">
    						<li><a href="#"><em className="fa fa-facebook"></em></a></li>
    						<li><a href="#"><em className="fa fa-twitter"></em></a></li>
    						<li><a href="#"><em className="fa fa-youtube-play"></em></a></li>
    						<li><a href="#"><em className="fa fa-github"></em></a></li>
    						<li><a href="#"><em className="fa fa-bitcoin"></em></a></li>
    						<li><a href="#"><em className="fa fa-medium"></em></a></li>
    					</ul>
    					<span className="copyright-text">
    						Copyright &copy; 2020, MAIS FPS by <a href="http://moriartydev.com.br/" rel="noopener noreferrer">MoriartyDEV</a>
    						<span>All trademarks and copyrights belong to their respective owners.</span>
    					</span>
    				</div>
    			</div>
    		</div>
  	</div>
    )
  }
}
