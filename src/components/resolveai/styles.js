import styled from 'styled-components';

export const CaseStudy = styled.main`
  max-width: 1120px;
  padding-top: 160px;
  .ra-back {
    font: var(--fz-xs) var(--font-mono);
    color: var(--green);
    margin-bottom: 38px;
  }
  .ra-eyebrow {
    font: var(--fz-xs) var(--font-mono);
    color: var(--green);
    margin-bottom: 18px;
  }
  h1 {
    font-size: clamp(52px, 8vw, 86px);
    line-height: 1;
    margin: 0 0 18px;
  }
  .ra-subtitle {
    font-size: clamp(25px, 4vw, 38px);
    font-weight: 500;
    color: var(--light-slate);
    line-height: 1.2;
  }
  .ra-intro {
    max-width: 790px;
    font-size: 22px;
  }
  .ra-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    margin: 30px 0 18px;
  }
  .ra-button {
    ${({ theme }) => theme.mixins.smallButton};
  }
  .ra-muted {
    color: var(--slate);
    font-size: 16px;
  }
  .ra-hero-image {
    margin: 38px 0 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
  }
  figure {
    margin: 24px 0;
  }
  figcaption {
    font: var(--fz-xs) var(--font-mono);
    color: var(--slate);
    margin-top: 14px;
    line-height: 1.6;
  }
  section {
    padding: 68px 0 0;
    margin: 0;
    scroll-margin-top: 105px;
  }
  h2 {
    font-size: clamp(26px, 4vw, 36px);
    margin-bottom: 24px;
  }
  h3 {
    color: var(--lightest-slate);
    font-size: 22px;
    line-height: 1.2;
  }
  p {
    line-height: 1.5;
  }
  .ra-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
  .ra-card {
    background: var(--light-navy);
    padding: 26px;
    border-radius: var(--border-radius);
  }
  .ra-card p:last-child {
    margin-bottom: 0;
  }
  .ra-callout {
    border-left: 2px solid var(--green);
    padding: 20px 26px;
    background: var(--light-navy);
    margin: 24px 0;
  }
  .ra-callout strong {
    color: var(--green);
  }
  .ra-flow {
    list-style: none;
    padding: 0;
    counter-reset: workflow;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }
  .ra-flow li {
    counter-increment: workflow;
    background: var(--light-navy);
    padding: 20px;
    font-size: 18px;
  }
  .ra-flow li::before {
    content: counter(workflow, decimal-leading-zero);
    display: block;
    color: var(--green);
    font: var(--fz-xs) var(--font-mono);
    margin-bottom: 12px;
  }
  .ra-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }
  .ra-metric {
    background: var(--light-navy);
    padding: 26px;
  }
  .ra-metric strong {
    display: block;
    color: var(--green);
    font-size: 42px;
    margin-bottom: 4px;
  }
  .ra-metric span {
    display: block;
    font-size: 18px;
  }
  .ra-metric small {
    display: block;
    color: var(--slate);
    font-size: 14px;
    margin-top: 9px;
    line-height: 1.4;
  }
  .ra-links {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    color: var(--green);
  }
  .ra-gallery a {
    display: block;
  }
  .ra-table-wrap {
    overflow-x: auto;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 18px;
  }
  th,
  td {
    padding: 17px 14px;
    border-bottom: 1px solid var(--lightest-navy);
    vertical-align: top;
    text-align: left;
  }
  th {
    color: var(--lightest-slate);
  }
  .ra-video {
    border: 1px solid var(--lightest-navy);
    padding: 32px;
    border-radius: var(--border-radius);
    background: var(--light-navy);
  }
  .ra-list li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    padding-top: 125px;
    .ra-grid,
    .ra-flow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .ra-metrics {
      grid-template-columns: 1fr;
    }
    .ra-metric {
      padding: 20px 24px;
    }
    section {
      padding-top: 52px;
    }
  }
  @media (max-width: 480px) {
    .ra-grid,
    .ra-flow {
      grid-template-columns: 1fr;
    }
    .ra-intro {
      font-size: 20px;
    }
    .ra-card,
    .ra-video {
      padding: 22px;
    }
    .ra-actions {
      gap: 12px;
    }
    th,
    td {
      padding: 12px 6px;
      font-size: 16px;
    }
  }
`;
