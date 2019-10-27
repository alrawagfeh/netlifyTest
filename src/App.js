import React, { Component } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Container,
  Divider
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";

class App extends Component {
  state = {
    images: [
      { name: "lily1", alt: "lily One", selected: false },
      { name: "lily2", alt: "lily Two", selected: false },
      { name: "lily3", alt: "lily Three", selected: true },
      { name: "lily4", alt: "lily Four", selected: false },
      { name: "lily5", alt: "lily Five", selected: false },
      { name: "lily6", alt: "lily Six", selected: false },
      { name: "lily7", alt: "lily seven", selected: false },
      { name: "lily8", alt: "lily eight", selected: false },
      { name: "lily9", alt: "lily nine", selected: false }
    ]
  };
  styles = {
    img: { width: "50vmin", height: "50vmin" }
  };
  render() {
    return (
      <React.Fragment>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=6gPnXHMLSOE"
          playing
        />

        <img src="./images/assignment3.gif" style={this.styles.img} />
        <img src="./images/assignment3.svg" style={this.styles.img} />
        <Divider />
        <Container>
          <GridList
            cellHeight={200}
            spacing={1}
            style={{ width: "50vmax", height: "30vmax", margin: "10vmin" }}
          >
            {this.state.images.map(tile => (
              <GridListTile
                key={tile.name}
                cols={tile.selected ? 2 : 1}
                rows={tile.selected ? 2 : 1}
              >
                <img src={`./images/${tile.name}.jpg`} alt={tile.alt} />
                <GridListTileBar
                  title={tile.alt}
                  titlePosition="bottom"
                  actionIcon={
                    <IconButton style={{ color: "white" }}>
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </GridListTile>
            ))}
          </GridList>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
