import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

const App = () => (
  <Alert
    type="info" 
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        Router Redux
        Antd 📊Antv
        滑动窗口
        {/* Nginx 前后联调 */}
        IEEE季度报告 STA5002(ddl)
      </Marquee>
    }
  />
);

export default App;