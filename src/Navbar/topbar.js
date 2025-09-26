import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class topbar extends Component {
    state = {

    }
    //类式组件通信  
    //  类属性合并
    static propTypes = {
        title: PropTypes.string.isRequired,
        leftshow: PropTypes.bool.isRequired
    }

    static defaultProps = {
        leftshow : true
    }

    render() {
        // console 
        // console.log(this.props);
        // console.log(this.props.title);
        // console.log(PropTypes);
        let { title, leftshow } = this.props
        // console.log(typeof leftshow);

        return (

            <div>
                {leftshow && <button>返回</button>}
                topbar - {title}
                {true && <button>Home</button>}
            </div>
        )
    }
}




