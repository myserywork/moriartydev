import React from "react";
import BlogChat from "./sections/BlogChat";
import BlogHeader from "./sections/BlogHeader";
import axios from "axios";

export default class Blog extends React.Component {
  state = {
    blogNews: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:3333/blog`).then((res) => {
      const blogNews = res.data;
      console.log(blogNews);
      this.setState({ blogNews });
    });
  }

  render() {
    return (
      <>
        <BlogHeader
          image={this.state.blogNews.image}
          title={this.state.blogNews.title}
        />

        <section id="article_container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 article_head">
                <h2>{this.state.blogNews.title}</h2>
              </div>
              <div class="col-lg-9 col-sm-12 col-md-12 article_content">
                {this.state.blogNews.content}
              </div>

              <div class="col-lg-3 col-sm-12 col-md-12 article_sidebar">
                <ul>
                  <li>
                    <span class="article_datatype">Postado por </span>
                    <br />
                    <span class="article_datavalue">
                      {" "}
                      {this.state.blogNews.author}
                    </span>
                  </li>
                  <li>
                    <span class="article_datatype">Data</span>
                    <br />
                    <span class="article_datavalue">
                      {" "}
                      {this.state.blogNews.creationDate}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <BlogChat />
          </div>
        </section>
      </>
    );
  }
}
