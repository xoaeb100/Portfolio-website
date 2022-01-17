import React from "react";
import { DiFirebase, DiReact, DiIllustrator } from "react-icons/di";
// change icons from here
// https://react-icons.github.io/react-icons/search?q=php
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Designing to Back-End
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Web Fundamentals, ReactJS, NEXTJS, TailWindCSS, Wordpress{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJS, Firebase, SQL, MongoDB, PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiIllustrator size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Designing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Wordpress, Adobe Photoshop, Adobe Illustrator
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
