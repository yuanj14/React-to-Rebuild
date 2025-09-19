import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

const App = () => (
  <Alert
    type="info" 
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        ❌生命周期
        滑动窗口
        context方案 
        插槽
      </Marquee>
    }
  />
);

export default App;