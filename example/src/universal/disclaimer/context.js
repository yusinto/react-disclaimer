import React from 'react';

const disclaimerContext = React.createContext({
  globalMap: new Map(),
  updateGlobalMap: () => {},
});
export default disclaimerContext;