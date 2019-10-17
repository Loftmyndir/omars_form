import React, { Component } from "react";
import { render } from "react-dom";
import Form from "./src/form";

const Haus = ({ text }) => (
  <div>
    <h1 className="display-3">{text}</h1>
    <p className="lead">Þetta form er eingöngu til að prufa react</p>
    <hr className="my-4" />
    <p>Til að hafa örlítið meira fjör setti ég bootstrap thema á þetta.</p>
    <p className="lead">
      Ég læt það fara ótrúlega fyrir brjóstið á mér að class sé className í JSX
      þegar verið að að setja css class á html elements. Fyrir utan það þá er
      þetta hrikalega geðveikt stuff. Nota react búa til class og leika sér með
      state er gott stuff.
    </p>
    <br />
  </div>
);
class App extends Component {
  render() {
    return (
      <div id="contanier" className="container">
        <Haus text="Fyltu út formið... Eða ég drep þig! " />

        <p />
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

// document.getElementById("root"));
