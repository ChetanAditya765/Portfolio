import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;
const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = [
    'Artificial Intelligence (AI)',
    'Machine Learning',
    'Deep Learning',
    'Explainable AI (XAI)',
    'Large Language Models (LLMs)',
    'Python',
    'PyTorch',
    'TensorFlow',
    'MERN & MEAN (Basics)',
    'HTML, CSS & JavaScript',
    'Java',
    'Model Evaluation & Optimization',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is <strong>Chetan Aditya Lakka</strong>. I build intelligent systems
              that make complex problems easier to solve — with a focus on reliable ML, model
              interpretability, and practical AI productisation. I became fascinated by software
              engineering and AI during my undergraduate studies and have steadily moved from
              prototyping ideas to shipping reproducible research and production-ready pipelines.
            </p>

            <p>
              Professionally, I've contributed to programs at{' '}
              <a href="https://about.google/">Google</a> and{' '}
              <a href="https://aws.amazon.com/">AWS</a>, and I currently work as an LLM Trainer at{' '}
              <a href="https://turing.com">Turing</a>, where I analyse model behaviour, produce
              structured annotations, and help improve the reliability of agentic systems.
            </p>

            <p>
              On the research side, I authored <em>Reverse Attribution</em>, a model-agnostic
              debugging framework that surfaces counter-evidence and explains why models fail —
              implemented using SHAP, Integrated Gradients, and PyTorch. I also build applied ML
              projects such as{' '}
              <a href="https://github.com/ChetanAditya765/Autism-Prediction">Autism Detection</a>{' '}
              and{' '}
              <a href="https://github.com/ChetanAditya765/Plant-Leaf-Prediction">Crop Detection</a>.
            </p>

            <p>
              I enjoy contributing to open-source, leading technical initiatives, and turning
              research insights into tools that engineers and stakeholders can actually use.
            </p>

            <p>Here are a few technologies and areas I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
