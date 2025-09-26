import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Switch } from 'react-router-dom/cjs/react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import Center from '../router/views/Center'
import Cinema from '../router/views/Cinemas'
import Film from '../router/views/Films'
import F404 from '../router/views/NotF404'
import Detail from './views/film/Detail'
import Login from './views/Login'

export default function indexrouter(props) {
    const islogin = () =>{
        return localStorage.getItem('token')
    }
    return (
        <Router>
            {props.children}
            <Switch>
                {/* 路径前缀匹配 */}
                <Route path="/film" component={Film} />
                <Route path="/cinema" component={Cinema} />
                {/* 路由拦截 */}
                <Route path="/center" component={() =>{
                    return islogin() ? <Center/> : <Redirect to='/login'/>
                }} />

                <Route path="/detail/:filmId" component={Detail} />
                <Route path="/login" component={Login} />
                
                {/* 万能匹配 默认页面 前缀匹配*/}
                <Redirect from="/" to="/film" exact />
                <Route component={F404} />
            </Switch>
        </Router>
    )
}
