// Exact straight-line IG for the paper's three-coordinate interacting model.
// This educational model is separate from the frozen neural-network results.
export const score = ([x1, x2, x3]) => -3 * x1 + 4 * x1 * x2 - 3 * x2 - 2 * x3;

export const analyzeExample = values => {
  const [x1, x2, x3] = values;
  const original = score(values);
  const attributions = [-3 * x1 + 2 * x1 * x2, -3 * x2 + 2 * x1 * x2, -2 * x3];
  const features = attributions.map((attribution, index) => {
    const masked = values.map((value, i) => (i === index ? 0 : value));
    const maskedScore = score(masked);
    const pull = maskedScore - original;
    const candidate = attribution < 0;
    return {
      index,
      attribution,
      masked,
      maskedScore,
      pull,
      candidate,
      validated: candidate && pull > 0,
    };
  });
  const selected = features
    .filter(feature => feature.validated)
    .sort((a, b) => b.pull - a.pull || a.index - b.index);
  // The second class is f1 = -f0, so its IG is the negative of f0's IG.
  const aflip =
    attributions.reduce((total, attribution) => total + Math.abs(2 * attribution), 0) / 6;
  const strength = selected.length
    ? selected.reduce((total, feature) => total + feature.pull, 0) / selected.length
    : null;
  return { original, features, selected, aflip, strength, predicted: original >= 0 ? 0 : 1 };
};
