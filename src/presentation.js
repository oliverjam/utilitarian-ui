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
  Text,
  Code,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'orange',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: '-apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
    secondary: 'Georgia, serif',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide', 'spin', 'fade']}
        transitionDuration={500}
        theme={theme}
        progress={'bar'}
        textAlign="left"
      >
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Center For Devs Who Can't Design Good
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
            And Wanna Learn To Do CSS Good Too
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <CodePane
            lang="javascript"
            source={`<List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>`}
          />
        </Slide>
      </Deck>
    );
  }
}
