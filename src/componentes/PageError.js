import React from 'react';

import './estilos/PageError.css';

function PageError(props) {
  return <div className="PageError">{props.error.message}</div>;
}

export default PageError;
