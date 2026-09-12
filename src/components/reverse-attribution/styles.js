import styled from 'styled-components';
import { CaseStudy } from '../resolveai/styles';

export const ResearchPage = styled(CaseStudy)`
  max-width: 1200px;
  padding-left: clamp(25px, 7vw, 100px);
  padding-right: clamp(25px, 7vw, 100px);
  .ra-intro {
    max-width: 820px;
  }
  .ra-metrics {
    margin-bottom: 24px;
  }
  .research-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;
  }
  .research-tags span {
    padding: 8px 12px;
    border: 1px solid var(--lightest-navy);
    border-radius: 4px;
    font: 12px var(--font-mono);
  }
  .research-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 14px 24px;
    padding: 24px 0;
    margin-top: 28px;
    border-bottom: 1px solid var(--lightest-navy);
    font: 13px var(--font-mono);
    color: var(--green);
  }
  .research-signal {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    margin-top: 34px;
    border: 1px solid var(--lightest-navy);
    border-radius: 8px;
    overflow: hidden;
    background: var(--lightest-navy);
  }
  .research-signal article {
    padding: 28px;
    background: var(--light-navy);
  }
  .research-signal small {
    color: var(--green);
    font: 12px var(--font-mono);
  }
  .research-signal h3 {
    margin-top: 16px;
  }
  .research-signal p {
    margin-bottom: 0;
    font-size: 17px;
  }
  .research-equation {
    color: var(--lightest-slate);
    font: 15px/1.8 var(--font-mono);
    overflow-wrap: anywhere;
    margin: 18px 0;
  }
  .research-lab {
    border: 1px solid var(--lightest-navy);
    border-radius: 8px;
    padding: 28px;
    background: var(--light-navy);
  }
  .research-controls {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    margin: 26px 0;
  }
  .research-controls label {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: var(--lightest-slate);
    font: 14px var(--font-mono);
  }
  .research-controls input {
    width: 100%;
    min-height: 36px;
    margin: 10px 0;
    accent-color: var(--green);
    cursor: pointer;
  }
  .research-feature-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }
  .research-feature {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px;
    border: 1px solid var(--lightest-navy);
    border-radius: 4px;
    background: var(--navy);
  }
  .research-feature[data-active='true'] {
    border-color: var(--green);
  }
  .research-feature h3 {
    margin: 0;
    font-size: 20px;
  }
  .research-feature p {
    font-size: 16px;
    margin: 0;
  }
  .research-feature button {
    margin-top: auto;
    padding: 12px 8px;
    font-size: 12px;
  }
  .research-status {
    font: 12px/1.6 var(--font-mono);
    color: var(--light-slate);
  }
  .research-status[data-valid='true'] {
    color: var(--green);
  }
  .research-output {
    margin-top: 22px;
    padding: 24px;
    background: var(--navy);
    border-left: 2px solid var(--green);
  }
  .research-output h3 {
    margin-top: 0;
  }
  .research-output p:last-child {
    margin-bottom: 0;
  }
  .research-output strong {
    color: var(--green);
  }
  .research-lab-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
  }
  .research-lab-footer p {
    margin: 0;
    font-size: 15px;
  }
  .research-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 22px 0;
  }
  .research-selector button[aria-pressed='true'] {
    background: var(--green);
    color: var(--navy);
  }
  .research-evidence {
    border: 1px solid var(--lightest-navy);
    padding: 24px;
    border-radius: 8px;
  }
  .research-evidence h3 {
    margin-top: 0;
  }
  .research-evidence figure {
    margin-bottom: 0;
  }
  .research-references {
    padding-left: 22px;
  }
  .research-references li {
    padding-left: 8px;
    margin: 0 0 22px;
    line-height: 1.5;
  }
  .research-references a {
    color: var(--green);
  }
  .research-references small {
    display: block;
    color: var(--slate);
    margin-top: 6px;
  }
  .ra-table-wrap {
    border: 1px solid var(--lightest-navy);
    border-radius: 6px;
    margin: 20px 0;
  }
  table {
    min-width: 650px;
    font-size: 16px;
  }
  caption {
    text-align: left;
    padding: 16px;
    color: var(--lightest-slate);
    font-size: 17px;
  }
  th,
  td {
    padding: 14px 12px;
  }
  @media (max-width: 650px) {
    .research-signal,
    .research-feature-grid,
    .research-controls {
      grid-template-columns: 1fr;
    }
    .research-lab,
    .research-evidence {
      padding: 18px;
    }
    .research-controls {
      gap: 8px;
    }
    .research-signal article {
      padding: 22px;
    }
    .research-feature button {
      align-self: flex-start;
      padding: 12px;
    }
    .research-output {
      padding: 18px;
    }
  }
`;
