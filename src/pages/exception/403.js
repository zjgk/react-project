import React from 'react';
import { Link } from "react-router-dom";
import Exception from 'components/Exception/index.js';

const Exception403 = () => (
  <Exception
    type="403"
    desc={"抱歉，你无权访问该页面"}
    linkElement={Link}
    backText={"返回首页"}
  />
);
console.log('Exception403',Exception403)

export default Exception403;
