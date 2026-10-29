export const projectPath = '/projects/reverse-attribution/';
export const assetPath = '/reverse-attribution/';
export const pdfPath = `${assetPath}reverse-attribution.pdf`;
export const repositoryUrl = 'https://github.com/ChetanAditya765/Reverse-Attribution';
export const description =
  'Supervised analysis of frozen classifiers using true-class Integrated Gradients, measured logit interventions, and A-Flip attribution disagreement. Explore the method, interactive example, and research results.';
export const featuredDescription =
  'Research in supervised model analysis: identify negative true-class attributions, test their logit effects, and measure class-wise disagreement with A-Flip. Explore an interactive example and results from frozen BERT, RoBERTa, and ResNet-56 classifiers.';

export const datasets = [
  { key: 'imdb', label: 'IMDb', model: 'BERT-base', sampleId: 2147 },
  { key: 'yelp', label: 'Yelp Polarity', model: 'RoBERTa-base', sampleId: 3265 },
  { key: 'cifar10', label: 'CIFAR-10', model: 'ResNet-56', sampleId: 226 },
];

export const formatMetric = value => (value === null ? 'Unavailable' : value.toFixed(3));
