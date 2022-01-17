import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// const projectsDemo=[
//         {
//           title: 'Project 1',
//           description: "Lorem ipsum dolor sit amet itationem assumenda totam laborum modi nulla? Cumque blanditiis quam similique",

//         },
//         {
//           title: 'Project 2',
//           description: "Lorem ipsum dolor sit amet itationem assumenda totam laborum modi nulla? Cumque blanditiis quam similique",

//         },
//         {
//           title: 'Project 3',
//           description: "Lorem ipsum dolor sit amet itationem assumenda totam laborum modi nulla? Cumque blanditiis quam similique",

//         },
//         {
//           title: 'Project 4',
//           description: "Lorem ipsum dolor sit amet itationem assumenda totam laborum modi nulla? Cumque blanditiis quam similique",

//         }

//       ]

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> My Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo> {description}</CardInfo>
            <div>
              <TitleContent></TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Visit Site 🌐 </ExternalLinks>
              <ExternalLinks href={source}>Visit Github </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
