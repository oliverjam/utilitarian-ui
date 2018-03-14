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
  Layout,
  Fill,
  Quote,
  Slide,
  Text as SText,
  Code,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import {
  Palette,
  LineHeight,
  Saturate,
  CardWeight,
  CardFooter,
  CardShadow,
  CardOffset,
  Buttons
} from "./examples";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "hsl(225, 35%, 25%)",
    secondary: "hsl(200, 10%, 25%)",
    tertiary: "hsl(200, 50%, 60%)",
    quartenary: "hsl(35, 100%, 60%)"
  },
  {
    primary: "-apple-system, BlinkMacSystemFont, Helvetica, sans-serif",
    secondary: "Georgia, serif"
  }
);

const Title = ({ color = "quartenary", size = 4, children }) => (
  <Heading size={size} textColor={color} margin="0 0 2rem 0">
    {children}
  </Heading>
);

const Text = ({ color = "#fff", margin = "0 0 2rem 0", children }) => (
  <SText textColor={color} margin={margin}>
    {children}
  </SText>
);

const Img = ({ src, size = "700" }) => <img src={src} width={size} alt="" />;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        progress={"bar"}
        textAlign="left"
      >
        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            margin="0 0 24px 0"
            textColor="quartenary"
          >
            Utilitarian UI
          </Heading>
          <video
            src="https://media.giphy.com/media/OCMGLUo7d5jJ6/giphy.mp4
"
            autoPlay
            muted
            loop
          />
          <Text margin="24px 0 0" textColor="tertiary" size={3} bold>
            Center For Devs Who Can't Design Good
          </Text>
        </Slide>
        <Slide>
          <Title textColor="quartenary">I'm Oli and I like CSS</Title>
          <Text textColor="tertiary">FAC10 & Ticketmaster</Text>
        </Slide>
        <Slide>
          <Title textColor="quartenary">The plan</Title>
          {/* <List textColor="tertiary"> */}
          <Text>Ramble about design</Text>
          <Text>Some practical examples</Text>
          <Text>Live coding! 🙀</Text>
          <Text>Questions</Text>
          {/* </List> */}
        </Slide>
        <Slide bgColor="secondary">
          <Title size={2}>Some thoughts</Title>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="Copy for practice, and copy because you don't have a designer and they had a whole team"
        >
          <Title>When in doubt, copy</Title>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="Use it every time you see some cool UI. Also plz use it to debug!"
        >
          <Title>Inspect element is your friend</Title>
          <Code textColor="#fff">cmd-alt-c</Code>
        </Slide>
        <Slide bgColor="secondary">
          <Title>Master the basics before you start trying weird stuff</Title>
          <Layout>
            <Fill>
              <Img src="/img/picasso-early.jpg" size="350" />
            </Fill>
            <Fill>
              <Img src="/img/picasso-late.jpg" size="350" />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary" notes="Users don't mind scrolling">
          <Title>Always more space than you think</Title>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="They're hard to read and hard to get right"
        >
          <Title>YOU HARDLY EVER NEED ALL-CAPS</Title>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="Centre-align is hard to read. You're not making a powerpoint"
        >
          <Title>Left-align everything (except these slides)</Title>
        </Slide>
        <Slide bgColor="primary">
          <Title size={2} color="quartenary">
            Assets
          </Title>
        </Slide>
        <Slide
          bgColor="primary"
          notes="Performance hit for something the user is looking at anyway"
          bgImage="/img/desk.jpg"
        >
          <Title size={2} color="quartenary">
            Don't use stock photos for the sake of it
          </Title>
          <Text color="hsl(200, 10%, 25%)">
            But if you have a good reason unsplash.com is nice
          </Text>
        </Slide>
        <Slide
          bgColor="primary"
          notes="SVG is easy to copy paste and prototype fast"
        >
          <Title color="quartenary">Use SVG for icons</Title>
          <Text>Simple line icons: github.com/danklammer/bytesize-icons</Text>
          <Layout>
            <Fill>
              <svg
                viewBox="0 0 32 32"
                width={32}
                height={32}
                stroke="#fff"
                fill="none"
              >
                <circle cx="14" cy="14" r="12" />
                <path d="M23 23 L30 30" />
              </svg>
              <svg
                viewBox="0 0 32 32"
                width={32}
                height={32}
                stroke="#fff"
                fill="none"
              >
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
              <svg
                viewBox="0 0 32 32"
                width={32}
                height={32}
                stroke="#fff"
                fill="none"
              >
                <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
                <circle cx="16" cy="16" r="4" />
              </svg>
            </Fill>
          </Layout>
          <Text margin="2rem 0">thenounproject.com for more niche stuff</Text>
        </Slide>
        <Slide bgColor="primary" notes="Cross-platform and collaborative!">
          <Title color="quartenary">Figma for mockups</Title>
          <Text>
            If you want to make mockups figma.com is like Sketch but free and
            in-browser
          </Text>
          <Img src="/img/figma.png" size="840" />
        </Slide>
        <Slide bgColor="tertiary">
          <Title size={2} color="primary">
            Color
          </Title>
        </Slide>
        <Slide
          bgColor="tertiary"
          notes="Each entry has an auto-extracted colour palette"
        >
          <Title color="primary">Dribbble for inspiration</Title>
          <Text>Browse by popular colours: dribbble.com/colors</Text>
          <Img src="https://i.imgur.com/k0BZbzh.jpg" />
        </Slide>
        <Slide bgColor="tertiary" notes="">
          <Title color="primary">
            HSL is an intuitive way to manage colours
          </Title>
          <Palette />
        </Slide>
        <Slide bgColor="tertiary">
          <Title color="primary">Start in greyscale</Title>
          <Text>
            Add one, maybe two accent colours. This isn't Facebook, it doesn't
            need 10 shades of blue
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Title color="primary">Colour palettes</Title>
          <Text>If you really need a palette colorsupplyyy.com is great</Text>
          <Img src="/img/colorsupplyyy.png" size="640" />
        </Slide>
        <Slide
          bgColor="tertiary"
          notes="<ul><li>Avoid pure grey text on coloured bg</li><li>Better contrast and connects text to bg</li><li>HSL makes it easy to tweak this</li></ul>"
        >
          <Title color="primary">Saturate your greys</Title>
          <Saturate />
        </Slide>
        <Slide
          bgColor="#fff"
          notes="Making focus states a core part of the design makes sure a11y isn't forgotten. Outline-offset and box-shadow"
        >
          <Title color="primary">Style your focus states</Title>
          <Text color="hsl(200, 10%, 25%)">
            Helps your app feel polished and cohesive.
          </Text>
          <Buttons />
        </Slide>
        <Slide bgColor="hsl(200, 10%, 98%)">
          <Title color="hsl(200, 10%, 25%)" margin="0">
            Avoid pure black <br />
          </Title>
          <Code>hsl(200, 10%, 25%)</Code>
          <Text color="hsl(200, 10%, 20%)" margin="4rem 0 2rem 0">
            (off-white backgrounds can be nice too){" "}
          </Text>
          <Code>hsl(200, 10%, 98%)</Code>
        </Slide>
        <Slide bgColor="primary">
          <Title size={2}>Typography</Title>
        </Slide>
        <Slide bgColor="primary">
          <Title>Line-height should decrease with font-size</Title>
          <LineHeight />
        </Slide>
        <Slide bgColor="primary" notes="Readability">
          <Title>Line-length</Title>
          <Text>
            Keep your line-length between 60 and 80 characters. The{" "}
            <Code textColor="#fff">ch</Code> unit can help
          </Text>
        </Slide>
        <Slide bgColor="#fff">
          <Title>Use weight and contrast</Title>
          <Text color="secondary">
            Try to differentiate how important text is by weight or colour
            contrast rather than just size
          </Text>
          <CardWeight />
        </Slide>
        <Slide bgColor="#fff">
          <Title size={2}>Layout</Title>
        </Slide>
        <Slide bgColor="#fff" notes="">
          <Title>Think about desktop too</Title>
          <Text color="secondary">
            <Code>max-width</Code> can go a long way
          </Text>
        </Slide>
        <Slide bgColor="#fff" notes="de-emphasises content">
          <Title>Avoid borders</Title>
          <Text color="secondary">
            Background-color can be a nicer alternative to internal borders
          </Text>
          <CardFooter />
        </Slide>
        <Slide bgColor="#fff">
          <Title>Shadows are nice</Title>
          <Text color="secondary">
            Box shadows can enhance external borders
          </Text>
          <CardShadow />
        </Slide>
        <Slide bgColor="#fff" notes="Consistent natural light source">
          <Title>Offset shadows</Title>
          <Text color="secondary">
            Vertically offset box shadows look a lot nicer
          </Text>
          <CardOffset />
        </Slide>
        <Slide bgColor="tertiary">
          <Title color="primary" size={1}>
            Thank you
          </Title>
          <Text>(code time)</Text>
        </Slide>
      </Deck>
    );
  }
}
