import React, { Component } from "react";
import Navbar from "./components/Navbar/index.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Footer from "./components/Footer/footer.js"
import bands from "./bands.json";
import BandCard from "./components/Body/bands.js";
import Wrapper from "./components/Wrapper/index.js"
import "./app.css"

class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    clicks: [],
    bands
  };

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  checkClick = id => {
    if(this.state.clicks.includes(id)){
      this.setState({ score: 0, clicks: []});

    } else {
        if (this.state.score + 1 > this.state.topscore) {
          this.setState({
              topscore: this.state.score + 1
          })
        }
      this.state.clicks.push(id)
      this.setState({ score: this.state.score + 1});
    }
  };

  handleOnchange = (id, phrase) => {
    this.checkClick(id)
    this.shuffleArray(this.state.bands)
    this.setState({quote: phrase})
  };


  render() {
    return (
      <div>
        <Navbar score = {this.state.score} topscore={this.state.topscore}/>
        <Jumbotron/>
          <Wrapper>
            {this.state.bands.map(bands => (
              <span key={bands.id}>
                <BandCard
                  handleOnchange={this.handleOnchange}
                  id={bands.id}
                  name={bands.name}
                  image={bands.image}
                  phrase={bands.catchphrase}
                />
                </span>
            ))}
          </Wrapper>
        <Footer />
    </div>
    );
  }
}

export default App;
