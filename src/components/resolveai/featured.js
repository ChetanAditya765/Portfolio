import React from 'react';
import styled from 'styled-components';
import { projectPath, assetPath } from './config';

export const Card = styled.article`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 36px;
  margin: 30px 0 100px;
  padding: 30px;
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  background: var(--light-navy);
  .resolveai-overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    margin-bottom: 14px;
  }
  h3 {
    font-size: clamp(28px, 4vw, 40px);
    margin: 0 0 8px;
  }
  h4 {
    color: var(--lightest-slate);
    font-size: 21px;
    font-weight: 400;
  }
  p {
    font-size: 18px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 7px 14px;
    padding: 0;
    list-style: none;
  }
  li {
    font: var(--fz-xxs) var(--font-mono);
    color: var(--light-slate);
  }
  .resolveai-link {
    ${({ theme }) => theme.mixins.smallButton};
    margin-top: 12px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 24px;
    margin-bottom: 70px;
  }
`;

const ResolveAIFeatured = () => (
  <Card aria-labelledby="resolveai-featured-title">
    <div>
      <p className="resolveai-overline">Flagship engineering project</p>
      <h3 id="resolveai-featured-title">
        <a href={projectPath}>ResolveAI</a>
      </h3>
      <h4>Agentic AI Reliability &amp; IT Access Automation</h4>
      <p>
        Production-style agentic AI system that converts repository-access requests into
        policy-grounded workflows with durable execution, human approvals, verified tool actions,
        and automated evaluation.
      </p>
      <ul aria-label="ResolveAI technologies">
        {[
          'Python',
          'FastAPI',
          'LangGraph',
          'PostgreSQL',
          'pgvector',
          'Next.js',
          'RAG',
          'Docker',
        ].map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a className="resolveai-link" href={projectPath}>
        View project
      </a>
    </div>
    <a href={projectPath} aria-label="Explore the ResolveAI engineering case study">
      <img
        src={`${assetPath}dashboard.png`}
        alt="ResolveAI dashboard showing a verified repository-access request"
        width="1440"
        height="1000"
        loading="lazy"
      />
    </a>
  </Card>
);

export default ResolveAIFeatured;
