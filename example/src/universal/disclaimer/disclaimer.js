import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import globalMap from './cache';
import getSymbol from './getSymbol';
import DisclaimerContext from './context';

class Disclaimer extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    globalMap: PropTypes.object,
    updateGlobalMap: PropTypes.func,
  };

  componentDidMount() {
    const disclaimerText = this.props.children;
    console.log(`children looks like: ${disclaimerText}`);
    let disclaimerMap;
    if (!globalMap.has(window.location)) {
      disclaimerMap = new Map();
      globalMap.set(window.location, disclaimerMap);
    }

    if (!disclaimerMap) {
      disclaimerMap = globalMap.get(window.location);
    }

    if (!disclaimerMap.has(disclaimerText)) {
      disclaimerMap.set(disclaimerText, getSymbol(disclaimerText));
    }

    this.props.updateGlobalMap(globalMap);
  }

  render() {
    const disclaimerSymbol = getSymbol(this.props.children);
    return <Fragment>{disclaimerSymbol}</Fragment>;
  }
}

export default (props) =>
  <DisclaimerContext.Consumer>
    {
      ({globalMap, updateGlobalMap}) => <Disclaimer {...props} globalMap={globalMap} updateGlobalMap={updateGlobalMap}/>
    }
  </DisclaimerContext.Consumer>;