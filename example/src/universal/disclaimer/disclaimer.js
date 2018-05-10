import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import globalCache from './cache';
import getSymbol from './getSymbol';

export const getDisclaimersForPage = () => {
  const result = [];
  if (typeof window !== 'undefined') {
    const disclaimerMap = globalCache.get(window.location);

    if(disclaimerMap) { //
      disclaimerMap.forEach((value, key) => {
        result.push({symbol: key, disclaimerText: value});
      });
    }
  }
  return result;
};

export default class Disclaimer extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  componentDidMount() {
    const disclaimerText = this.props.children;

    let disclaimerMap;
    if (!globalCache.has(window.location)) {
      disclaimerMap = new Map();
      globalCache.set(window.location, disclaimerMap);
    }

    if (!disclaimerMap) {
      disclaimerMap = globalCache.get(window.location);
    }

    if (!disclaimerMap.has(disclaimerText)) {
      disclaimerMap.set(disclaimerText, getSymbol(disclaimerText));
    }
  }

  render() {
    const disclaimerSymbol = getSymbol(this.props.children);
    return <Fragment>{disclaimerSymbol}</Fragment>;
  }
}