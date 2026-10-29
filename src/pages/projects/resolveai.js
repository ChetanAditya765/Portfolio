import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import { CaseStudy } from '../../components/resolveai/styles';
import {
  assetPath,
  demoVideoUrl,
  githubProfile,
  pdfPath,
  repositoryUrl,
} from '../../components/resolveai/config';

const workflow = [
  'Employee request',
  'Identity grounding',
  'Request classification',
  'Repository grounding',
  'Current permission check',
  'Policy retrieval',
  'Deterministic decision',
  'Human approval if required',
  'Typed tool execution',
  'Independent verification',
  'Resolve or escalate',
  'Automatic evaluation',
];
const highlights = [
  [
    'Durable agent execution',
    'Persisted run queues, leases and LangGraph checkpoints make progress recoverable across process restarts.',
  ],
  [
    'Human-in-the-loop approval',
    'A native interrupt waits for a permanent, scoped decision. The same run resumes after approval or rejection.',
  ],
  [
    'Policy-grounded RAG',
    'Versioned policy chunks, pgvector retrieval and reviewed evidence fingerprints ground each decision.',
  ],
  [
    'Typed tool interfaces',
    'Arguments, run scope, workflow node and lease ownership are checked at execution boundaries.',
  ],
  [
    'Deterministic authorization',
    'The model interprets requests. Current identity, policy and approval records determine what is allowed.',
  ],
  [
    'Idempotent operations',
    'Simulated effects and tool-result records share a transaction; replay reuses committed results.',
  ],
  [
    'Independent verification',
    'Permission is read again through a separate tool. A successful grant response cannot close the ticket alone.',
  ],
  [
    'Safe failure and escalation',
    'Ambiguity, stale evidence, rejected approvals and verification mismatches never become guessed grants.',
  ],
  [
    'Persistent execution evidence',
    'Requests, runs, approvals, steps, tools, effects and verification remain distinct, inspectable records.',
  ],
  [
    'Automated evaluation',
    'Live assertions and isolated scenarios check recorded behavior against explicit, versioned expectations.',
  ],
];
const description =
  'ResolveAI is a production-style agentic AI project demonstrating policy-grounded RAG, durable workflows, human approvals, verified tool execution, and automated AI evaluation.';

const ResolveAIPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="ResolveAI — Agentic AI Reliability Platform">
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content="ResolveAI — Agentic AI Reliability Platform | Chetan Aditya"
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://chetanaditya.netlify.app/resolveai/dashboard.png"
      />
      <meta name="twitter:title" content="ResolveAI | Chetan Aditya" />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://chetanaditya.netlify.app/resolveai/dashboard.png"
      />
    </Helmet>
    <CaseStudy>
      <a className="ra-back" href="/#projects">
        ← All projects
      </a>
      <p className="ra-eyebrow">Flagship engineering project / v0.1</p>
      <h1>ResolveAI</h1>
      <h2 className="ra-subtitle">Agentic AI Reliability &amp; IT Access Automation</h2>
      <p className="ra-intro">
        ResolveAI is a bounded agentic AI system for controlled repository-access automation. It
        combines policy-grounded RAG, durable LangGraph workflows, typed tools, deterministic
        authorization, persisted human approvals, independent permission verification, and an
        evaluation framework designed around observable execution evidence.
      </p>
      <div className="ra-actions">
        <a className="ra-button" href={repositoryUrl || githubProfile}>
          {repositoryUrl ? 'GitHub source' : 'GitHub profile'}
        </a>
        <a className="ra-button" href="#demo">
          {demoVideoUrl ? 'Watch demo' : 'Demo video'}
        </a>
        <a className="ra-button" href={pdfPath} download>
          Download project PDF
        </a>
        <a className="ra-button" href="#architecture">
          Architecture
        </a>
      </div>
      {!repositoryUrl && (
        <p className="ra-muted">
          Source repository publication pending. The GitHub link opens the developer profile.
        </p>
      )}
      <p className="ra-muted">
        Bounded repository-access domain · Simulated permission effects · Offline demo provider
      </p>
      <figure className="ra-hero-image">
        <a href={`${assetPath}dashboard.png`}>
          <img
            src={`${assetPath}dashboard.png`}
            alt="ResolveAI dashboard with a resolved repository-access request and permission directory"
            width="1440"
            height="1000"
          />
        </a>
        <figcaption>
          The product workspace shows persisted requests and observed outcomes from a seeded
          demonstration.
        </figcaption>
      </figure>

      <section aria-labelledby="problem-title">
        <p className="ra-eyebrow">01 / The problem</p>
        <h2 id="problem-title">A plausible answer is not proof.</h2>
        <p>
          An LLM can recommend access without proving that the employee exists, the repository is
          correct, policy permits the action, approval was obtained, or permission actually changed.
          ResolveAI turns each of those assumptions into an explicit check.
        </p>
        <div className="ra-callout">
          <strong>
            The model proposes. Deterministic controls authorize. Observed state determines success.
          </strong>
        </div>
        <p>
          Request, agent run, tool execution, policy evidence, approval, permission effect,
          verification, and evaluation are separate persisted records. A generated answer cannot
          stand in for execution evidence.
        </p>
      </section>

      <section aria-labelledby="workflow-title">
        <p className="ra-eyebrow">02 / Workflow</p>
        <h2 id="workflow-title">One request. Explicit boundaries.</h2>
        <ol className="ra-flow">
          {workflow.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="ra-callout">
          <p>“I need write access to the payments repository.”</p>
          <p>
            The requester and payments repository are grounded in stored records. Existing access is
            inspected and the retrieved write-access policy requires manager approval. The run
            pauses durably without changing permission.
          </p>
          <p>
            An eligible manager approves. The same run resumes, revalidates policy and scope,
            executes the simulated grant, and reads permission independently. The ticket closes only
            after verification; an evaluator then checks its recorded evidence.
          </p>
        </div>
      </section>

      <section id="architecture" aria-labelledby="architecture-title">
        <p className="ra-eyebrow">03 / Architecture</p>
        <h2 id="architecture-title">Interpretation is separate from authority.</h2>
        <figure>
          <a href={`${assetPath}resolveai-architecture.svg`}>
            <img
              src={`${assetPath}resolveai-architecture.svg`}
              alt="Next.js, FastAPI and domain services feed LangGraph; RAG, approval and typed tools pass deterministic controls before permission mutation, independent readback and evaluation; PostgreSQL stores durable evidence"
              width="1200"
              height="1080"
              loading="lazy"
            />
          </a>
          <figcaption>
            Open the static diagram for a full-size view. No diagramming runtime is required.
          </figcaption>
        </figure>
        <p>
          Next.js communicates with FastAPI. Domain services own transactions; one backend worker
          executes LangGraph. PostgreSQL stores domain evidence and checkpoints, while pgvector
          ranks policy chunks. The provider cannot directly authorize a permission mutation.
        </p>
      </section>

      <section aria-labelledby="engineering-title">
        <p className="ra-eyebrow">04 / Engineering</p>
        <h2 id="engineering-title">Reliability in the execution path.</h2>
        <div className="ra-grid">
          {highlights.map(([title, text]) => (
            <article className="ra-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="evidence-title">
        <p className="ra-eyebrow">05 / Product evidence</p>
        <h2 id="evidence-title">Follow the decision to its outcome.</h2>
        <div className="ra-grid ra-gallery">
          {[
            [
              'new-ticket',
              'Request entry',
              'A natural-language request is tied to a stored employee.',
            ],
            [
              'policy-evidence',
              'Policy evidence',
              'Retrieved evidence supports a deterministic write-access decision.',
            ],
            [
              'approval',
              'Manager approval',
              'The reviewer sees scope and policy before recording a permanent decision.',
            ],
            [
              'verification',
              'Verified resolution',
              'Independent readback supplies evidence for the final outcome.',
            ],
          ].map(([file, title, caption]) => (
            <figure key={file}>
              <a href={`${assetPath}${file}.png`}>
                <img
                  src={`${assetPath}${file}.png`}
                  alt={title}
                  width="1440"
                  height="1000"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <strong>{title}.</strong> {caption} Open to inspect.
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="evaluation" aria-labelledby="evaluation-title">
        <p className="ra-eyebrow">06 / Evaluation</p>
        <h2 id="evaluation-title">Measured against recorded behavior.</h2>
        <div className="ra-metrics">
          <div className="ra-metric">
            <strong>490</strong>
            <span>Backend tests passed</span>
            <small>Includes PostgreSQL / pgvector integration</small>
          </div>
          <div className="ra-metric">
            <strong>12</strong>
            <span>Chromium tests passed</span>
            <small>Production frontend; isolated test backend</small>
          </div>
          <div className="ra-metric">
            <strong>37 / 37</strong>
            <span>Scenarios passed</span>
            <small>Deterministic fixtures and injected failures</small>
          </div>
        </div>
        <p className="ra-muted">
          Fresh local verification: 9 September 2026 · demo / local_hash providers · no paid
          live-model calls
        </p>
        <p>
          Evaluation checks identity and resource grounding, policy evidence, expected and forbidden
          tool use, approval-before-grant, verification-before-close, safe escalation, and terminal
          state. It inspects workflow evidence rather than asking an LLM to judge its own answer.
        </p>
        <figure>
          <a href={`${assetPath}evaluations.png`}>
            <img
              src={`${assetPath}evaluations.png`}
              alt="ResolveAI evaluation dashboard showing a completed 37-scenario deterministic batch"
              width="1440"
              height="1000"
              loading="lazy"
            />
          </a>
          <figcaption>
            Fixed-suite scores describe these fixtures. They do not establish universal enterprise
            safety or live-model accuracy.
          </figcaption>
        </figure>
        <p>
          Backend lint, frontend lint/format/types/build, and HTTP process-restart recovery passed.
          Docker Compose configuration passed.{' '}
          <strong>
            Docker build, acceptance, and container-restart checks could not be reverified because
            the local engine was unavailable.
          </strong>{' '}
          Remote CI success is not claimed.
        </p>
        <a className="ra-button" href={`${assetPath}release-validation.md`}>
          Read validation scope and commands
        </a>
      </section>

      <section aria-labelledby="reliability-title">
        <p className="ra-eyebrow">07 / Reliability design</p>
        <h2 id="reliability-title">Authority comes from current state.</h2>
        <ul className="ra-list">
          <li>The model interprets requests; it does not authorize access.</li>
          <li>
            Retrieved prose does not automatically become policy. Reviewed evidence fingerprints
            bind the decision.
          </li>
          <li>
            Approval is durable state. Self-approval is blocked, and admin access is never granted
            automatically.
          </li>
          <li>
            Actions are revalidated against identity, policy and exact approval scope immediately
            before execution.
          </li>
          <li>
            Tool success alone cannot resolve a ticket. Permission is independently read again, and
            closure requires matching evidence.
          </li>
        </ul>
        <p>
          The simulated effect and its tool record share a database transaction. A future external
          GitHub adapter will need reconciliation for uncertain network outcomes. Persisted evidence
          is inspectable, but it is not a cryptographic audit ledger.
        </p>
      </section>

      <section aria-labelledby="stack-title">
        <p className="ra-eyebrow">08 / Technical stack</p>
        <h2 id="stack-title">Built around the workflow.</h2>
        <div className="ra-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Implemented technologies</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'AI / workflow',
                  'LangGraph, RAG, structured provider outputs, human approval, evaluation',
                ],
                ['Backend', 'Python 3.12, FastAPI, Pydantic, SQLAlchemy, Alembic'],
                ['Data', 'PostgreSQL, pgvector; SQLite for isolated tests'],
                ['Frontend', 'Next.js, React, TypeScript, Tailwind CSS'],
                [
                  'Engineering',
                  'Docker Compose, pytest, Playwright, Ruff, Git, CI workflow definitions',
                ],
              ].map(([area, tech]) => (
                <tr key={area}>
                  <th scope="row">{area}</th>
                  <td>{tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="limitations-title">
        <p className="ra-eyebrow">09 / Boundaries</p>
        <h2 id="limitations-title">An intentionally bounded v0.1.</h2>
        <ul className="ra-list">
          <li>
            Repository effects are simulated; production GitHub and Jira integration are not
            implemented.
          </li>
          <li>
            Demo identity selection is not enterprise SSO. Public route authorization and tenant
            isolation are not production-hardened.
          </li>
          <li>
            The system does not troubleshoot general IT issues or discover arbitrary autonomous
            actions.
          </li>
          <li>
            The offline provider is deterministic; local_hash is a lexical embedding baseline.
          </li>
          <li>
            Live paid OpenAI execution remains a separate validation gate. One backend worker
            process is supported.
          </li>
        </ul>
        <p>
          The public demonstration consists of this case study, screenshots, the project PDF, and a
          future recording. The writable admin application is intended for localhost use.
        </p>
      </section>

      <section aria-labelledby="roadmap-title">
        <p className="ra-eyebrow">10 / Roadmap</p>
        <h2 id="roadmap-title">Next steps that need evidence.</h2>
        <div className="ra-grid">
          <article className="ra-card">
            <h3>v0.2 / Measure live behavior</h3>
            <p>
              Controlled live-model benchmark, broader natural-language requests, semantic embedding
              comparison, and measured latency and cost.
            </p>
          </article>
          <article className="ra-card">
            <h3>v0.3 / Cross the external boundary</h3>
            <p>
              A real GitHub sandbox adapter, external-effect reconciliation, approval expiry, and
              stronger identity boundaries.
            </p>
          </article>
        </div>
        <p>
          Additional resource domains, multi-worker execution, streaming and production
          authentication should follow demonstrated need.
        </p>
      </section>

      <section id="demo" aria-labelledby="demo-title">
        <p className="ra-eyebrow">11 / Demo video</p>
        <h2 id="demo-title">See the complete access workflow.</h2>
        <div className="ra-video">
          {demoVideoUrl ? (
            <>
              <p>
                Watch the recorded request, approval, independent verification, and evaluation
                walkthrough.
              </p>
              <video
                controls
                playsInline
                preload="none"
                poster={`${assetPath}dashboard.png`}
                width="1280"
                height="790"
                aria-label="ResolveAI workflow demo"
              >
                <source src={demoVideoUrl} type="video/mp4" />
                Your browser does not support embedded video. Use the recording link below.
              </video>
              <a className="ra-button" href={demoVideoUrl}>
                Open video separately
              </a>
            </>
          ) : (
            <>
              <h3>Demo video coming soon.</h3>
              <p>
                The recording will follow a payments write-access request through policy retrieval,
                durable approval, verified execution, and evaluation. The screenshots above show the
                current product.
              </p>
            </>
          )}
        </div>
      </section>

      <section aria-labelledby="pdf-title">
        <p className="ra-eyebrow">12 / Project overview</p>
        <h2 id="pdf-title">A ten-page technical introduction.</h2>
        <p>
          Explore the problem, architecture, workflow boundaries, evaluation evidence, limitations
          and roadmap in a concise recruiter-facing overview.
        </p>
        <a className="ra-button" href={pdfPath} download>
          Download ResolveAI project PDF
        </a>
      </section>

      <section aria-labelledby="developer-title">
        <p className="ra-eyebrow">About the developer</p>
        <h2 id="developer-title">Chetan Aditya</h2>
        <p>
          AI Engineer working across agentic AI, AI evaluation, AI reliability, multimodal AI, LLM
          systems, and practical AI engineering.
        </p>
        <p>
          Designed and developed ResolveAI as a production-style agentic AI reliability project.
        </p>
        <div className="ra-links">
          <a href={githubProfile}>GitHub</a>
          <a href="https://www.linkedin.com/in/chetan-aditya-02365426a">LinkedIn</a>
          <a href="/resume.pdf">Resume</a>
          <a href="/">Portfolio</a>
        </div>
      </section>
    </CaseStudy>
  </Layout>
);

ResolveAIPage.propTypes = { location: PropTypes.object.isRequired };
export default ResolveAIPage;
