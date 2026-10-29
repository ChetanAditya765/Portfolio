import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const certifications = [
  {
    title: 'Artificial Intelligence: Knowledge Representation and Reasoning',
    provider: 'NPTEL',
    type: 'Certification',
  },
  { title: 'LLM Trainer Certification', provider: 'micro1', type: 'Certification' },
  { title: 'Machine Learning Foundations', provider: 'AWS Academy', type: 'Certification' },
  { title: 'Cloud Foundations', provider: 'AWS Academy', type: 'Certification' },
  {
    title: 'AI-ML Virtual Internship',
    provider: 'AICTE–EduSkills · Supported by Google for Developers',
    type: 'Virtual training',
  },
  {
    title: 'Android Developer Virtual Internship',
    provider: 'AICTE–EduSkills · Supported by Google for Developers',
    type: 'Virtual training',
  },
  {
    title: 'AI-ML Virtual Internship',
    provider: 'AICTE–EduSkills · Supported by AWS Academy',
    type: 'Virtual training',
  },
  { title: 'Machine Learning Training', provider: 'Bharat Intern', type: 'Training' },
];

const StyledCertifications = styled.section`
  max-width: 1000px;
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 48px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    padding: 24px 0;
    border-top: 1px solid var(--lightest-navy);
  }
  .credential-type {
    color: var(--green);
    font: var(--fz-xs) var(--font-mono);
  }
  h3 {
    margin: 10px 0 8px;
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.5;
  }
  p {
    margin: 0;
    font-size: var(--fz-sm);
    line-height: 1.6;
  }
  @media (max-width: 600px) {
    ul {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`;

const Certifications = () => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(container.current, srConfig());
    }
  }, []);
  return (
    <StyledCertifications
      id="certifications"
      ref={container}
      aria-labelledby="certifications-title">
      <h2 id="certifications-title" className="numbered-heading">
        Certifications &amp; Training
      </h2>
      <ul>
        {certifications.map(({ title, provider, type }) => (
          <li key={`${title}-${provider}`}>
            <span className="credential-type">{type}</span>
            <h3>{title}</h3>
            <p>{provider}</p>
          </li>
        ))}
      </ul>
    </StyledCertifications>
  );
};

export default Certifications;
