import React from 'react';
import { Link } from "react-router-dom";
import Exception from 'components/Exception/index.js';

const Exception404 = () => (
  <Exception
    type="404"
    linkElement={Link}
  />
);

export default Exception404;
