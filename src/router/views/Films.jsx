import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom"
import Coming from "./film/Coming"
import Nowplay from "./film/Nowplay"
const Films = () => {
    return (
        <div>
            <div>Film</div>
            <Switch>
                <Route path="/film/nowplay" component={Nowplay} />
                <Route path="/film/coming" component={Coming} />
                <Redirect from="/film" to="/film/nowplay" />
            </Switch>
        </div>
    )
}

export default Films