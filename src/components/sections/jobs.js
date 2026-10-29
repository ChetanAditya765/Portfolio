import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 850px;
  .experience-layout {
    display: block;
  }
  .roles {
    min-width: 0;
  }
  .role {
    position: relative;
    padding: 0 0 32px 26px;
    border-left: 1px solid var(--lightest-navy);
  }
  .role::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 8px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--green);
  }
  .role:last-child {
    padding-bottom: 0;
  }
  .role-meta {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin-bottom: 12px;
    font: var(--fz-xs) var(--font-mono);
  }
  .company {
    color: var(--green);
  }
  .range {
    color: var(--slate);
  }
  .role h3 {
    margin-bottom: 8px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    line-height: 1.35;
  }
  .location {
    font-size: var(--fz-sm);
    margin-bottom: 20px;
  }
  .role-body {
    font-size: var(--fz-md);
    line-height: 1.6;
  }
  .role-body ul {
    ${({ theme }) => theme.mixins.fancyList};
  }
  .role-body strong {
    color: var(--light-slate);
    font-weight: 500;
  }
  @media (max-width: 480px) {
    .role {
      padding-left: 20px;
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="experience-layout">
        <div className="roles">
          {data.jobs.edges.map(({ node }, i) => {
            const { title, company, location, range, url } = node.frontmatter;
            return (
              <article className="role" key={`${company}-${range}`} aria-labelledby={`role-${i}`}>
                <div className="role-meta">
                  <a className="company" href={url}>
                    {company}
                  </a>
                  <span className="range">{range}</span>
                </div>
                <h3 id={`role-${i}`}>{title}</h3>
                <p className="location">{location}</p>
                <div className="role-body" dangerouslySetInnerHTML={{ __html: node.html }} />
              </article>
            );
          })}
        </div>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
