import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import api from '../services/api';

const loginStyles = {
    loginContainer: {
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60
    },

    loginForm: {
        minWidth: 400
    }
}

function Login() {
    const history = useHistory();

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

        api.authenticate(login)
            .then(response => {
                if (response) {
                    localStorage.setItem('authToken', response.token);
                    history.push('/admin/1');
                }
            });
    }

    return (
        <div style={loginStyles.loginContainer}>
            <form onSubmit={handleSubmit} style={loginStyles.loginForm}>
                <h1 className="mb-5 text-center">MoriartyDev</h1>
                <div className="form-group text-center">
                    <input type="email"
                        className="form-control text-center"
                        id="email"
                        placeholder="E-mail"
                        value={login.email}
                        onChange={e => setLogin({ ...login, email: e.target.value })}
                        required />
                </div>
                <div className="form-group text-center">
                    <input type="password"
                        className="form-control text-center"
                        id="password"
                        placeholder="Senha"
                        value={login.password}
                        onChange={e => setLogin({ ...login, password: e.target.value })}
                        required />
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Entrar</button>
            </form>
        </div>
    )
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('authToken') ? (
                    <Component {...props} />
                ) : (
                        <Login />
                    )
            }
        />
    )
}

function Admin() {
    return (
        <div className="container">
            <Switch>
                <PrivateRoute path="/admin/novo" component={NovoPost} />
                <PrivateRoute path="/admin/post/:id" component={EditarPost} />
                <PrivateRoute path="/admin" component={Index} />
            </Switch>
        </div>
    );
}

function Index() {
    const history = useHistory();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const checkLogin = () => {
            const authToken = localStorage.getItem('authToken');

            api.user(authToken)
                .then(response => {
                    if (!response) {
                        localStorage.removeItem('authToken');
                        history.push('/admin');
                    }
                })
        }

        const getPosts = () => {
            api.posts().then(response => {
                setPosts(response);
            })
        }

        checkLogin();
        getPosts();
    }, []);

    const logout = () => {
        localStorage.removeItem('authToken');
        history.push('/admin');
    }

    const deletarPost = (id) => {
        const authToken = localStorage.getItem('authToken');

        api.deletePost(id, authToken)
            .then(response => {
                if (response) {
                    api.posts().then(response => {
                        setPosts(response);
                    });
                } else {
                    alert('Não foi possível deletar o post.');
                }
            })
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center py-5">
                <h1>Publicações</h1>

                <div>
                    <button className="btn btn-primary mr-3" onClick={e => history.push('/admin/novo')}>Nova Publicação</button>
                    <button className="btn btn-primary" onClick={e => logout()}>Sair</button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered text-light">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th colSpan={2}>Publicado Em</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.created_at}</td>
                                <td style={{ width: 200, textAlign: 'center' }}>
                                    <button className="btn btn-primary mr-3" onClick={e => history.push('/admin/post/' + post.id)}>Editar</button>
                                    <button className="btn btn-danger" onClick={e => deletarPost(post.id)}>Deletar</button>
                                </td>
                            </tr>
                        ))}

                        {posts.length === 0 ? (
                            <tr>
                                <td colSpan={5}>
                                    Nenhuma publicação até o momento.
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>
        </>
    )
}

function NovoPost() {
    const history = useHistory();

    const [post, setPost] = useState({
        title: '',
        author: '',
        content: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

        const authToken = localStorage.getItem('authToken');

        api.publishPost(post, authToken)
            .then(response => {
                console.log(response);
                if (response) {
                    history.push('/admin');
                }
            });
    }

    useEffect(() => {
        const checkLogin = () => {
            const authToken = localStorage.getItem('authToken');

            api.user(authToken)
                .then(response => {
                    if (!response) {
                        localStorage.removeItem('authToken');
                        history.push('/admin');
                    }
                })
        }

        checkLogin();
    }, []);

    const logout = () => {
        localStorage.removeItem('authToken');
        history.push('/admin');
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center py-5">
                <h1>Nova Publicação</h1>

                <div>
                    <button className="btn btn-primary mr-3" onClick={e => history.push('/admin')}>Inicio</button>
                    <button className="btn btn-primary" onClick={e => logout()}>Sair</button>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="title">Título da Publicação</label>
                    <input type="text" className="form-control" value={post.title} id="title" onChange={e => setPost({ ...post, title: e.target.value })} required />
                </div>

                <div className="form-group">
                    <label for="autor">Autor da Publicação</label>
                    <input type="text" className="form-control" value={post.author} id="autor" onChange={e => setPost({ ...post, author: e.target.value })} required />
                </div>

                <div className="form-group">
                    <label for="autor">Conteúdo</label>
                    <div className="text-dark">
                        <CKEditor
                            editor={ClassicEditor}
                            data={post.content}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setPost({ ...post, content: data });
                            }}

                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Publicar</button>
            </form>
        </>
    )
}

function EditarPost() {
    const history = useHistory();
    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        const checkLogin = () => {
            const authToken = localStorage.getItem('authToken');

            api.user(authToken)
                .then(response => {
                    if (!response) {
                        localStorage.removeItem('authToken');
                        history.push('/admin');
                    }
                })
        }

        const loadPost = () => {
            api.post(id)
                .then(response => {
                    if (response) {
                        setPost(response);
                        console.log(response.content.toString('utf8'));
                    } else {
                        history.push('/admin');
                    }
                })
        }

        checkLogin();
        loadPost();
    }, []);

    const logout = () => {
        localStorage.removeItem('authToken');
        history.push('/admin');
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center py-5">
                <h1>Editar Publicação</h1>

                <div>
                    <button className="btn btn-primary mr-3" onClick={e => history.push('/admin')}>Inicio</button>
                    <button className="btn btn-primary" onClick={e => logout()}>Sair</button>
                </div>
            </div>

            {post ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="title">Título da Publicação</label>
                        <input type="text" className="form-control" value={post.title} id="title" onChange={e => setPost({ ...post, title: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label for="autor">Autor da Publicação</label>
                        <input type="text" className="form-control" value={post.author} id="autor" onChange={e => setPost({ ...post, author: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label for="autor">Conteúdo</label>
                        <div className="text-dark">
                            <CKEditor
                                editor={ClassicEditor}
                                data={post.content}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setPost({ ...post, content: data });
                                }}

                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Salvar</button>
                    {post.content.toString()}
                </form>
            ) : null}
        </>
    );
}

export default Admin;