import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Footer() {
    return (
        <footer id="footer">
            <div className="container ftr_main">
                <div className="row">
                    <div className="col-lg-4 col-md-6 align-self-center">
                        <div className="ftr_brand">
                            <Link to="/">
                                <img
                                    src="./assets/images/logo.png"
                                    height="40"
                                    alt="logo"
                                />
                                &nbsp;&nbsp;MoriartyDEV
                            </Link>
                        </div>
                        <div className="ftr_intro">
                            <p>
                                Criamos estratégias de marca orientadas a resultados e refinamos
                                continuamente suas campanhas para obter o melhor resultado.
                            </p>
                        </div>
                        <div className="ftr_nwsltr">
                            <label>Newsletter</label>
                            <form action="#0">
                                <div className="form-group d-flex flex-wrap flex-row">
                                    <input
                                        type="email"
                                        className="p-2 mr-3"
                                        placeholder="Digite seu melhor e-mail"
                                    />
                                    <button type="submit" className="btn btn_sub p-2">
                                        Inscrever-se
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftr_btm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6>2020 <a href="https://moriartydev.com.br/">MoriartyDEV</a></h6>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;