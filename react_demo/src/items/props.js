import { Component } from 'react'
import Navbar from '../Navbar/topbar'
export default class extends Component {
    // 属性传参组件通信
    render() {
        return (
            <div>
                <h1 title="这是页面主标题">访问网站</h1>
                <div>
                    <h2 >首页</h2>
                    <Navbar title='首页' leftshow={false} />
                </div>
                <div>
                    <h2 >列表</h2>
                    {/* default props : undefined , change it by static defaultProps*/}
                    <Navbar title='列表' />
                </div>
                <div>
                    <h2 >我的</h2>
                    <Navbar title='我的' leftshow="true" />
                </div>
            </div>
        )
    }
}
