import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm Shoaib, <br />I love developing Web Applications!
      </SectionTitle>
      <SectionText>
        A computer science student based in Mumbai, focused on creating
        interactive digital experiences on Web, I enjoy the logic and structure
        of coding and strive to write elegant and efficient code 😇
      </SectionText>
      <Button onClick={() => (window.location = "https://github.com/xoaeb100")}>
        Visit my Git
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
