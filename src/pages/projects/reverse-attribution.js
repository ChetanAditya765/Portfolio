/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- Named table scroll regions must be keyboard-scrollable. */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import { ResearchPage } from '../../components/reverse-attribution/styles';
import Playground from '../../components/reverse-attribution/playground';
import {
  assetPath,
  datasets,
  description,
  formatMetric,
  pdfPath,
  projectPath,
  repositoryUrl,
} from '../../components/reverse-attribution/config';
import summary from '../../../static/reverse-attribution/summary.json';

const method = [
  [
    'Start with a known label',
    'Analyze one labeled input with a frozen classifier. Keep the true class separate from the model’s prediction.',
  ],
  [
    'Attribute to each class',
    'Compute Integrated Gradients for the true class and the two leading predictions. Sum signed coordinates within each feature group.',
  ],
  [
    'Nominate negative groups',
    'Keep eligible groups with negative true-class attribution. Test up to 20, starting with the most negative attribution.',
  ],
  [
    'Replace one feature',
    'Independently replace a subword’s word embedding with zero, or one RGB pixel with the dataset-mean color.',
  ],
  [
    'Measure the logit change',
    'Subtract the original true-class logit from the logit after replacement. Validate only candidates with a strictly positive change.',
  ],
  [
    'Select and compare',
    'Select up to five validated features by positive pull. Separately compute A-Flip across the two leading classes.',
  ],
];

const ReverseAttributionPage = ({ location }) => {
  const [datasetKey, setDatasetKey] = useState('cifar10');
  const selected = datasets.find(dataset => dataset.key === datasetKey);
  const selectedSummary = summary[datasetKey];
  return (
    <Layout location={location}>
      <Helmet title="Reverse Attribution — Research & Interactive Demo">
        <meta name="description" content={description} />
        <meta property="og:title" content="Reverse Attribution | Chetan Aditya" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://chetanaditya.netlify.app${assetPath}paper-preview.png`}
        />
        <meta name="twitter:title" content="Reverse Attribution | Chetan Aditya" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://chetanaditya.netlify.app${assetPath}paper-preview.png`}
        />
        <link rel="canonical" href={`https://chetanaditya.netlify.app${projectPath}`} />
      </Helmet>
      <ResearchPage>
        <a className="ra-back" href="/#projects">
          ← All projects
        </a>
        <p className="ra-eyebrow">Research project / Explainable machine learning</p>
        <h1>Reverse Attribution</h1>
        <h2 className="ra-subtitle">Investigating evidence against the true class.</h2>
        <p className="ra-intro">
          A negative attribution suggests a feature may suppress the correct class. Reverse
          Attribution tests that suggestion: replace the feature, measure the true-class logit
          change, and distinguish candidates from validated counter-evidence.
        </p>
        <div className="ra-actions">
          <a className="ra-button" href="#demo">
            Try the interactive example
          </a>
          <a className="ra-button" href={pdfPath}>
            Read the research paper
          </a>
          <a className="ra-button" href={repositoryUrl}>
            GitHub source
          </a>
        </div>
        <div className="research-tags">
          <span>Supervised analysis</span>
          <span>Frozen classifiers</span>
          <span>Integrated Gradients</span>
          <span>Text + vision</span>
        </div>
        <div className="research-signal" aria-label="The three stages of Reverse Attribution">
          <article>
            <small>01 / ATTRIBUTE</small>
            <h3>Find candidates.</h3>
            <p>Negative attribution to the known true class.</p>
          </article>
          <article>
            <small>02 / INTERVENE</small>
            <h3>Test the effect.</h3>
            <p>One reference replacement. One measured logit change.</p>
          </article>
          <article>
            <small>03 / VALIDATE</small>
            <h3>Keep positive pulls.</h3>
            <p>Counter-evidence specific to that model and intervention.</p>
          </article>
        </div>
        <nav className="research-nav" aria-label="Research page sections">
          <a href="#method">Method</a>
          <a href="#demo">Interactive example</a>
          <a href="#results">Results</a>
          <a href="#examples">Observed examples</a>
          <a href="#limitations">Limitations</a>
          <a href="#references">Paper &amp; references</a>
        </nav>

        <section id="method" aria-labelledby="method-title">
          <p className="ra-eyebrow">01 / How it works</p>
          <h2 id="method-title">From attribution to a measured intervention.</h2>
          <p>
            RA is a supervised diagnostic procedure. It uses the known true label, including when
            the model predicts a different class. The implemented explainer is Integrated Gradients
            for differentiable models; text is analyzed through word embeddings.
          </p>
          <ol className="ra-flow">
            {method.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <div className="ra-grid">
            <article className="ra-card">
              <h3>Counterfactual pull</h3>
              <p className="research-equation">Δᵢ = fᵧ(x with group i replaced) − fᵧ(x)</p>
              <p>
                A candidate is validated only when Δᵢ &gt; 0. Pull uses logits, not probabilities.
                CE strength is the mean selected positive pull; an empty selection has undefined
                strength.
              </p>
            </article>
            <article className="ra-card">
              <h3>Attribution–Flip</h3>
              <p className="research-equation">
                A-Flip = Σᵢ |φᵢ(top class) − φᵢ(runner-up)| / (2d)
              </p>
              <p>
                Sum signed coordinates inside each group first, then compare the leading classes.
                The denominator counts eligible groups. This measures attribution disagreement, not
                calibrated uncertainty.
              </p>
            </article>
          </div>
          <p className="ra-muted">
            Text: eligible subword embeddings, with special tokens, padding, attention and positions
            held fixed. Images: RGB pixels replaced by dataset-mean color, equivalent to zero in
            normalized input space.
          </p>
        </section>

        <section id="demo" aria-labelledby="demo-title">
          <p className="ra-eyebrow">02 / Interactive example</p>
          <h2 id="demo-title">Negative attribution does not guarantee a positive pull.</h2>
          <Playground />
        </section>

        <section id="results" aria-labelledby="results-title">
          <p className="ra-eyebrow">03 / Research results</p>
          <h2 id="results-title">Measured on frozen text and vision models.</h2>
          <div className="ra-metrics">
            <div className="ra-metric">
              <strong>{datasets.reduce((n, dataset) => n + summary[dataset.key].n, 0)}</strong>
              <span>Labeled observations</span>
              <small>200 images + two 16-review pilots</small>
            </div>
            <div className="ra-metric">
              <strong>3</strong>
              <span>Frozen classifiers</span>
              <small>BERT-base · RoBERTa-base · ResNet-56</small>
            </div>
            <div className="ra-metric">
              <strong>50</strong>
              <span>IG quadrature steps</span>
              <small>Seed 42 · up to 20 interventions per example</small>
            </div>
          </div>
          <p>
            Examples were sampled uniformly without replacement from the official test splits,
            without conditioning on correctness. Tables below use the same recorded observations as
            Tables IV and V of the paper.
          </p>
          <div
            className="ra-table-wrap"
            role="region"
            aria-label="RA statistics, horizontally scrollable"
            tabIndex="0">
            <table>
              <caption>Mean RA statistics · Table IV</caption>
              <thead>
                <tr>
                  <th scope="col">Dataset / model</th>
                  <th scope="col">n</th>
                  <th scope="col">A-Flip</th>
                  <th scope="col">Selected</th>
                  <th scope="col">CE strength</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map(dataset => {
                  const s = summary[dataset.key];
                  return (
                    <tr key={dataset.key}>
                      <th scope="row">
                        {dataset.label}
                        <br />
                        <small>{dataset.model}</small>
                      </th>
                      <td>{s.n}</td>
                      <td>{formatMetric(s.a_flip_mean)}</td>
                      <td>{formatMetric(s.selected_ce_mean)}</td>
                      <td>{formatMetric(s.ce_strength_mean_nonempty)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="ra-muted">
            Strength is in logit units and averages nonempty per-example selections. A-Flip scales
            are not comparable across datasets.
          </p>
          <div
            className="ra-table-wrap"
            role="region"
            aria-label="Associations, horizontally scrollable"
            tabIndex="0">
            <table>
              <caption>Exploratory associations · Table V</caption>
              <thead>
                <tr>
                  <th scope="col">Dataset</th>
                  <th scope="col">Errors</th>
                  <th scope="col">Confidence ρ</th>
                  <th scope="col">Logit-margin ρ</th>
                  <th scope="col">Error AUROC</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map(dataset => {
                  const s = summary[dataset.key];
                  return (
                    <tr key={dataset.key}>
                      <th scope="row">{dataset.label}</th>
                      <td>{s.errors}</td>
                      <td>{formatMetric(s.spearman_confidence.rho)}</td>
                      <td>{formatMetric(s.spearman_logit_margin.rho)}</td>
                      <td>{formatMetric(s.error_auroc.value)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="ra-callout">
            <strong>A weak association, with substantial uncertainty.</strong>
            <p>
              CIFAR-10 error AUROC is {formatMetric(summary.cifar10.error_auroc.value)} with a 95%
              bootstrap interval of [
              {summary.cifar10.error_auroc.ci_95.map(formatMetric).join(', ')}], which includes
              chance performance. Both text pilots contain zero errors, so their error AUROC is
              unavailable. These results do not establish reliable error detection across domains.
            </p>
          </div>
          <figure>
            <a href={`${assetPath}cifar10_observations.png`}>
              <img
                src={`${assetPath}cifar10_observations.png`}
                alt="A-Flip histogram and confidence scatter for 200 CIFAR-10 examples, with correct and incorrect predictions distinguished"
                width="1540"
                height="594"
                loading="lazy"
              />
            </a>
            <figcaption>
              Observed CIFAR-10 records. Confidence Spearman ρ = −0.156; ten examples are
              misclassified. Open the figure to inspect.
            </figcaption>
          </figure>
        </section>

        <section id="examples" aria-labelledby="examples-title">
          <p className="ra-eyebrow">04 / Observed examples</p>
          <h2 id="examples-title">Inspect the interventions behind the paper.</h2>
          <p>
            Choose a dataset to inspect its recorded qualitative case. These figures show saved
            model outputs, separate from the mathematical example above.
          </p>
          <div className="research-selector" role="group" aria-label="Choose an observed dataset">
            {datasets.map(dataset => (
              <button
                type="button"
                className="ra-button"
                key={dataset.key}
                aria-pressed={datasetKey === dataset.key}
                aria-controls="research-evidence"
                onClick={() => setDatasetKey(dataset.key)}>
                {dataset.label}
              </button>
            ))}
          </div>
          <div className="research-evidence" id="research-evidence">
            <h3>
              {selected.label} · test example {selected.sampleId}
            </h3>
            <p className="ra-muted">
              {selected.model} · {selectedSummary.n} analyzed examples · {selectedSummary.errors}{' '}
              errors in the subset
            </p>
            <figure>
              <a href={`${assetPath}${datasetKey}_example.png`}>
                <img
                  src={`${assetPath}${datasetKey}_example.png`}
                  alt={
                    datasetKey === 'cifar10'
                      ? 'CIFAR-10 example 226: original image, signed true-class attribution, and selected pixels replaced by dataset-mean RGB'
                      : `${selected.label} example ${selected.sampleId}: selected subword positions and independent true-class logit pulls`
                  }
                  width={datasetKey === 'cifar10' ? '1540' : '1320'}
                  height={datasetKey === 'cifar10' ? '528' : '616'}
                  loading="lazy"
                />
              </a>
              <figcaption>
                {datasetKey === 'cifar10'
                  ? 'The first misclassified example in sorted sample order. The right panel shows intervention locations; individual pulls were measured separately, not as a joint effect.'
                  : 'The first saved example in an all-correct text pilot. Bars show independent zero-word-embedding interventions. Token labels are subwords, not semantic annotations.'}
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="limitations" aria-labelledby="limitations-title">
          <p className="ra-eyebrow">05 / Scope &amp; limitations</p>
          <h2 id="limitations-title">A diagnostic procedure within a defined setting.</h2>
          <div className="ra-grid">
            <article className="ra-card">
              <h3>Known labels and fixed references</h3>
              <p>
                Counter-evidence analysis requires ground truth. Zero embeddings and mean-color
                pixels can create off-manifold inputs. A positive logit change describes that
                intervention, not semantic causality or label preservation.
              </p>
            </article>
            <article className="ra-card">
              <h3>Numerical approximation</h3>
              <p>
                The neural-network study uses finite-step IG with nonzero completeness residuals.
                Maximum absolute residuals are 3.397 logits for IMDb, 0.376 for Yelp, and 2.323 for
                CIFAR-10. Near-zero signs need care.
              </p>
            </article>
            <article className="ra-card">
              <h3>Selection bias and small samples</h3>
              <p>
                Original checkpoints were selected using official-test monitoring. Frozen-model
                analysis does not undo that bias. Text pilots contain only 16 reviews each; the
                CIFAR subset contains just ten errors.
              </p>
            </article>
            <article className="ra-card">
              <h3>Evidence still needed</h3>
              <p>
                The study does not establish SHAP/LIME superiority, calibrated uncertainty, or
                general error-detection reliability. Larger independent evaluations and
                reference-robustness comparisons remain future work.
              </p>
            </article>
          </div>
        </section>

        <section id="references" aria-labelledby="references-title">
          <p className="ra-eyebrow">06 / Paper, source &amp; references</p>
          <h2 id="references-title">Read the method. Inspect the evidence.</h2>
          <p>
            <strong>Reverse Attribution: Identifying Counter-Evidence in Model Predictions</strong>
            <br />
            Chetan Aditya · Five-page research manuscript
          </p>
          <div className="ra-actions">
            <a className="ra-button" href={pdfPath} download>
              Download research paper
            </a>
            <a className="ra-button" href={repositoryUrl}>
              Explore source code
            </a>
            <a className="ra-button" href={`${assetPath}summary.json`}>
              View results JSON
            </a>
          </div>
          <p className="ra-muted">
            The figures and summaries come from the paper’s recorded runs.{' '}
            <a href={`${assetPath}provenance.json`}>Figure provenance</a> and{' '}
            <a href={`${assetPath}asset-manifest.json`}>portfolio asset hashes</a> identify the
            source artifacts. Full neural-network reproduction requires the exact checkpoints and
            dataset files; they are not bundled into this page.
          </p>
          <ol className="research-references">
            <li>
              <a href="https://proceedings.mlr.press/v70/sundararajan17a.html">
                Axiomatic Attribution for Deep Networks
              </a>
              <small>Sundararajan, Taly &amp; Yan · ICML 2017 · Integrated Gradients</small>
            </li>
            <li>
              <a href="https://aclanthology.org/N19-1423/">
                BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding
              </a>
              <small>Devlin et al. · NAACL 2019 · IMDb backbone</small>
            </li>
            <li>
              <a href="https://arxiv.org/abs/1907.11692">
                RoBERTa: A Robustly Optimized BERT Pretraining Approach
              </a>
              <small>Liu et al. · 2019 · Yelp Polarity backbone</small>
            </li>
            <li>
              <a href="https://openaccess.thecvf.com/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html">
                Deep Residual Learning for Image Recognition
              </a>
              <small>He et al. · CVPR 2016 · Residual network foundation</small>
            </li>
          </ol>
          <p>
            Developed by Chetan Aditya, exploring feature attribution, model evaluation, and
            interpretable machine learning.
          </p>
          <a className="ra-button" href="/#projects">
            Back to portfolio projects
          </a>
        </section>
      </ResearchPage>
    </Layout>
  );
};

ReverseAttributionPage.propTypes = { location: PropTypes.object.isRequired };
export default ReverseAttributionPage;
