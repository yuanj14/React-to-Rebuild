import { NavLink } from "react-router-dom/cjs/react-router-dom"
export default function Tabbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/film" activeClassName="kerwinactive">电影</NavLink>
                </li>
                <li>
                    <NavLink to="/cinema" activeClassName="kerwinactive">影院</NavLink>
                </li>
                <li>
                    <NavLink to="/center" activeClassName="kerwinactive">我的</NavLink>
                </li>
            </ul>
        </div>
    )
}
