import React, { useState } from 'react';
import { analyzeExample } from './math';

const number = value => (Math.abs(value) < 0.0005 ? '0.000' : value.toFixed(3));
const status = feature => {
  if (feature.validated) {
    return 'Validated counter-evidence';
  }
  return feature.candidate ? 'Candidate only' : 'Not a negative candidate';
};
const interpretation = feature => {
  if (feature.validated) {
    return 'This negative-attribution candidate increases the true-class logit when replaced. It qualifies as validated counter-evidence.';
  }
  if (feature.candidate) {
    return 'The attribution is negative, but replacement does not increase the true-class logit. A candidate is not automatically validated.';
  }
  return 'This feature has no negative true-class attribution at the current input, so RA does not nominate it as a candidate.';
};

const Playground = () => {
  const [values, setValues] = useState([1, 1, 1]);
  const [active, setActive] = useState(0);
  const result = analyzeExample(values);
  const feature = result.features[active];
  return (
    <div className="research-lab">
      <p className="ra-eyebrow">Interactive mathematical example</p>
      <h3>Try an intervention.</h3>
      <p>
        Move the inputs, then choose a feature to replace with zero. This small interacting model
        computes exact attributions and logit changes in your browser. The neural-network study
        below uses saved observations and numerical Integrated Gradients.
      </p>
      <p className="research-equation">
        f₀(x) = −3x₁ + 4x₁x₂ − 3x₂ − 2x₃
        <br />
        f₁(x) = −f₀(x)
      </p>
      <p className="ra-muted">
        Known true class: 0 · Reference: [0, 0, 0] · Three scalar feature groups
      </p>
      <div className="research-controls">
        {values.map((value, index) => (
          <div key={index}>
            <label htmlFor={`ra-input-${index}`}>
              Feature x{index + 1} <span>{value.toFixed(1)}</span>
            </label>
            <input
              id={`ra-input-${index}`}
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={value}
              onChange={event => {
                const next = Number(event.target.value);
                setValues(previous => previous.map((item, i) => (i === index ? next : item)));
              }}
            />
          </div>
        ))}
      </div>
      <div className="research-feature-grid">
        {result.features.map(item => (
          <article
            className="research-feature"
            data-active={active === item.index}
            key={item.index}>
            <h3>Feature x{item.index + 1}</h3>
            <p>True-class IG: {number(item.attribution)}</p>
            <span className="research-status" data-valid={item.validated}>
              {status(item)}
            </span>
            <button
              type="button"
              className="ra-button"
              aria-pressed={active === item.index}
              onClick={() => setActive(item.index)}>
              Replace x{item.index + 1} with zero
            </button>
          </article>
        ))}
      </div>
      <div className="research-output" aria-live="polite" aria-atomic="true">
        <h3>Replacing x{active + 1}</h3>
        <p className="research-equation">
          Δ = {number(feature.maskedScore)} − ({number(result.original)}) ={' '}
          <strong>{number(feature.pull)} logits</strong>
        </p>
        <p>{interpretation(feature)}</p>
        <p>
          A-Flip: <strong>{number(result.aflip)}</strong> · Validated:{' '}
          <strong>{result.selected.length} / 3</strong> · CE strength:{' '}
          <strong>
            {result.strength === null
              ? 'Undefined (empty selection)'
              : `${number(result.strength)} logits`}
          </strong>
        </p>
      </div>
      <div className="research-lab-footer">
        <p>At [1, 1, 1], all three features are candidates. Only x3 is validated.</p>
        <button
          type="button"
          className="ra-button"
          onClick={() => {
            setValues([1, 1, 1]);
            setActive(0);
          }}>
          Reset example
        </button>
      </div>
    </div>
  );
};

export default Playground;
