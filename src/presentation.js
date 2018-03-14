// Import React
import React from 'react';

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
  Text as SText,
  Code,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import {
  Palette,
  LineHeight,
  Saturate,
  CardWeight,
  CardFooter,
  CardShadow,
  CardOffset,
} from './examples';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'hsl(225, 35%, 25%)',
    secondary: 'hsl(200, 10%, 25%)',
    tertiary: 'hsl(200, 50%, 60%)',
    quartenary: 'hsl(35, 100%, 60%)',
  },
  {
    primary: '-apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
    secondary: 'Georgia, serif',
  }
);

const Title = ({ color = 'quartenary', size = 4, children }) => (
  <Heading size={size} textColor={color} margin="0 0 2rem 0">
    {children}
  </Heading>
);

const Text = ({ color = '#fff', margin = '0 0 2rem 0', children }) => (
  <SText textColor={color} margin={margin}>
    {children}
  </SText>
);

const Img = ({ src, size = '700' }) => <img src={src} width={size} alt="" />;

const stuff = `when in doubt, copy

---



---

unsplash, icons

---

figma

---



---


---

touch target sizes

---



---



---



---

`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress={'bar'}
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
        <Slide bgColor="secondary">
          <Title size={2}>Some thoughts</Title>
        </Slide>
        <Slide bgColor="secondary">
          <Title>When in doubt, copy</Title>
        </Slide>
        <Slide bgColor="secondary">
          <Title>Inspect element is your friend</Title>
          <Code textColor="#fff">cmd-alt-c</Code>
        </Slide>
        <Slide bgColor="secondary">
          <Title>Master the basics before you start trying weird stuff</Title>
        </Slide>
        <Slide bgColor="secondary">
          <Title>Always more space than you think</Title>
        </Slide>
        <Slide bgColor="secondary">
          <Title>You hardly ever need all-caps</Title>
        </Slide>
        <Slide bgColor="secondary">
          <Title>Left-align everything</Title>
        </Slide>
        <Slide bgColor="tertiary">
          <Title size={2} color="primary">
            Color
          </Title>
        </Slide>
        <Slide bgColor="tertiary">
          <Title color="primary">Dribbble for inspiration</Title>
          <Text>Browse by popular colours: dribbble.com/colors</Text>
          <Img src="https://i.imgur.com/k0BZbzh.jpg" />
        </Slide>
        <Slide bgColor="tertiary">
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
        <Slide transition={['fade']} bgColor="tertiary">
          <Title color="primary">Colour palettes</Title>
          <Text>If you really need a palette colorsupplyyy.com/ is great</Text>
          <Img src="/img/colorsupplyyy.png" size="640" />
        </Slide>
        <Slide
          bgColor="tertiary"
          notes="<ul><li>Avoid pure grey text on coloured bg</li><li>Better contrast and connects text to bg</li><li>HSL makes it easy to tweak this</li></ul>"
        >
          <Title color="primary">Saturate your greys</Title>
          <Saturate />
        </Slide>
        <Slide bgColor="hsl(200, 10%, 98%)">
          <Title color="hsl(200, 10%, 20%)">
            Avoid pure black <br />
            <Code>hsl(200, 10%, 20%)</Code>
          </Title>
          <Text color="hsl(200, 10%, 20%)">
            (off-white backgrounds can be nice too){' '}
          </Text>
          <Code margin="4rem 0 0 0">hsl(200, 10%, 98%)</Code>
        </Slide>
        <Slide bgColor="primary">
          <Title size={2}>Typography</Title>
        </Slide>
        <Slide bgColor="primary">
          <Title>Line-height should decrease with font-size</Title>
          <LineHeight />
        </Slide>
        <Slide bgColor="primary">
          <Title>Line-length</Title>
          <Text>
            Keep your line-length between 60 and 80 characters. The{' '}
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
          <Text color="secondary">
            Background-color can be a nicer alternative to internal borders
          </Text>
        </Slide>
        <Slide bgColor="#fff">
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
        <Slide bgColor="#fff">
          <Title>Offset shadows</Title>
          <Text color="secondary">
            Vertically offset box shadows look a lot nicer
          </Text>
          <CardOffset />
        </Slide>
      </Deck>
    );
  }
}
