import ReactDOM from "react-dom/client";
import Task from "./base01/antd_demo";
import NRouter from './router/indexrouter.jsx'
import Tabbar from './component/Tabbar.jsx'
import Report from './tt'
const content = "<name>";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Task />
        <Report/>
        {/* <APP /> */}
        <NRouter>
            <Tabbar/>
        </NRouter>
    </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

