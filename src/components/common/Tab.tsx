import React from 'react';
import Scroll from './Scroll';

const Tab = ({content, href, idx, target_idx}) =>
  <li className={Number(target_idx) === idx ? "active" : ""}>
    <Scroll type="id" element={href}>
      <a href={`#${href}`}>{content}</a>
    </Scroll>
  </li>

export default Tab;
