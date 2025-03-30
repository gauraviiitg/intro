import React, { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";

// components 
import { Design, Develope } from "./AllSvgs";
import { LightTheme } from "./Themes";
import Loading from "../subComponents/Loading";
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() => import("../subComponents/ParticleComponent"))
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Suspense fallback={<Loading />}>
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          <ParticleComponent theme="light" />

          <Main>
            <Title>
              <Develope width={40} height={40} /> Full-Stack Developer
            </Title>
            <Description>
              I build scalable web applications and intelligent AI-driven solutions,  
              ensuring efficiency and performance.
            </Description>
            <Description>
              <strong>Skills</strong>
              <ul>
                <li>Python, JavaScript, Java</li>
                <li>Django, React, Node.js, Express</li>
                <li>SQL, MongoDB, Firebase</li>
                <li>Docker, Git, REST APIs</li>
              </ul>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>VS Code, GitHub, Postman, Linux</p>
            </Description>
          </Main>

          <Main>
            <Title>
              <Design width={40} height={40} /> AI & Machine Learning Enthusiast
            </Title>
            <Description>
              Passionate about AI-powered applications, leveraging models like  
              SVM, BERT, and Alpha-Beta pruning for intelligent decision-making.
            </Description>
            <Description>
              <strong>Skills</strong>
              <ul>
                <li>Machine Learning, NLP</li>
                <li>OpenAI, TensorFlow, Scikit-learn</li>
                <li>Model Deployment on Cloud</li>
              </ul>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>Jupyter, Google Cloud, Hugging Face</p>
            </Description>
          </Main>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
