import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Card } from '../resolveai/featured';
import { featuredDescription, projectPath } from './config';

const ReverseAttributionFeatured = ({ image }) => (
  <Card aria-labelledby="reverse-attribution-featured-title">
    <div>
      <p className="resolveai-overline">Featured Research Project</p>
      <h3 id="reverse-attribution-featured-title">
        <a href={projectPath}>Reverse Attribution</a>
      </h3>
      <h4>Supervised Model Analysis &amp; Counter-Evidence</h4>
      <p>{featuredDescription}</p>
      <ul aria-label="Reverse Attribution technologies">
        {['Python', 'PyTorch', 'Captum IG', 'BERT / RoBERTa', 'ResNet-56'].map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a className="resolveai-link" href={projectPath}>
        View research project
      </a>
    </div>
    <a href={projectPath} aria-label="Explore the Reverse Attribution research case study">
      <GatsbyImage image={image} alt="Reverse Attribution research paper: title and abstract" />
    </a>
  </Card>
);

ReverseAttributionFeatured.propTypes = { image: PropTypes.object.isRequired };
export default ReverseAttributionFeatured;
