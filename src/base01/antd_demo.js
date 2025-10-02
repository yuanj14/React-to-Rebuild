import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

const App = () => (
  <Alert
    type="info" 
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        Antd 📊Antv
        JointJs
        滑动窗口
        IEEE季度报告
      </Marquee>
    }
  />
);

export default App;