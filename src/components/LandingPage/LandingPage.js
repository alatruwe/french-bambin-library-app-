import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>French Bambin Library</h1>
          <h2>sharing french culture one book at a time</h2>
        </header>
        <section>
          <header>
            <h3>Browse books and games</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of the items list interface</em>]
          </p>
          <p>
            French Bambin Library helps you connect with other parents and find
            books and games written in french.
          </p>
        </section>
        <section>
          <header>
            <h3>Connect, share and exchange</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of user checkout cart</em>]
          </p>
          <p>
            French Bambin Library provides you with a quick and simple interface
            that helps you browse french books and games.
          </p>
          <p>Connect with the community to share and exchange.</p>
        </section>
        <section>
          <header>
            <h3>Add books and games</h3>
          </header>
          <p>
            [<em>placeholder for screenshot to add a new item interface</em>]
          </p>
          <p>
            French Bambin Library provides you with a quick and simple interface
            that helps you share and list your books and games.
          </p>
        </section>
      </div>
    );
  }
}

export default LandingPage;