import React from 'react';

export default class intro extends React.Component {
  render() {
    return(
      <div className="section section-pad section-bg-blend nopb " id="intro">
    		<div className="container">
    			<div className="row align-items-center">
    				<div className="col-md-5 offset-md-1">
    					<div className="res-m-btm">
    						<img src="./images/agrupar.png" alt="graph" />
    					</div>
    				</div>
    				<div className="col-md-6 order-md-first order-last">
    					<div className="text-block">
    						<h2>MAIS FPS</h2>
                  <p class="lead">Já pensou que seu computador poderia rodar o seu jogo com mais FPS?</p><p>Em uma conexão remota configuramos todo o seu computador para atingir a excelência em performance que seu hardware permite, em 95% dos casos as maquinas e seus sistemas operacionais não são configurados corretamente assim diminuindo a performance em JOGOS e tarefas do dia a dia.  </p>
    						  <a href="https://www.youtube.com/watch?v=SSo_EIwHSd4" class="play-btn video-play">
    							<em class="play"><span></span></em>
    							<span>Assista o Video</span>
    							<span>aprenda como funciona</span>
    						</a>
    					</div>
    				</div>
    			</div>
    		</div>
  	</div>
    )
  }
}
