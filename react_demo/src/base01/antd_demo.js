import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

const App = () => (
  <Alert
    type="info" 
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        ✅Github repository
        ❌组件通信
        ✅Leetcode
      </Marquee>
    }
  />
);

export default App;