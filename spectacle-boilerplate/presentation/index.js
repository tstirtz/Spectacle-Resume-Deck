// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import "./styles.css";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {

  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={2000}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why Formidable Should Hire Me!
          </Heading>
          <a
            href="https://tstirtz.github.io/Portfolio/"
            target="_blank"
            className = "link"
          >
            <Text margin="10px 0 0" textColor="tertiary" size={2} className="sub-heading" fit>
              Click to go to Portfolio
            </Text>
          </a>
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary" >My Dev Skills</Heading>
          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" >Front End Development</Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary">Back End Development</Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              HTML5
            </Fill>
            <Fill>
              CSS3
            </Fill>
            <Fill>
              Node.js
            </Fill>
            <Fill>
              Express
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              Sass
            </Fill>
            <Fill>
              JavaScript
            </Fill>
            <Fill>
              MongoDB
            </Fill>
            <Fill>
              Mongoose
            </Fill>
          </Layout>
          <Layout fit>
            <Fill>
              ES6
            </Fill>
            <Fill>
              jQuery
            </Fill>
            <Fill>
              REST APIs
            </Fill>
          </Layout>
          <Layout>
            <Heading size={4} textColor="secondary">General Dev Skills</Heading>
            <Heading size={4} textColor="secondary">Architectural Principals</Heading>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
