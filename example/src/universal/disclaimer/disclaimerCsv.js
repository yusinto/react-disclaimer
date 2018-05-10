import React from 'react';
import DisclaimerContext from './context';

export default (props) =>
  <DisclaimerContext.Consumer>
    {
      ({globalMap}) => {
        const result = [];
        if (typeof window !== 'undefined') {
          const disclaimerMap = globalMap.get(window.location);

          if (disclaimerMap) {
            disclaimerMap.forEach((value, key) => {
              result.push(value);
            });
          }
        }
        return <div>{result.join(', ')}</div>;
      }
    }
  </DisclaimerContext.Consumer>;


