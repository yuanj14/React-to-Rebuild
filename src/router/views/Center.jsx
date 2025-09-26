import { withRouter } from 'react-router-dom';
function Center(props) {
    return (
        <div>
            Center+
            <div onClick={()=>{
                props.history.push(`/filmorder`)
                
            }}>电影订单</div>
        </div>
    )
}
export default withRouter(Center)