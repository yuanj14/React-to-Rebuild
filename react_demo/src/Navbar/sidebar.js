export default function sidebar(props) {
    let { bg } = props
    console.log(bg);

    let style1 = {
        backgroundColor: bg // bg 假设是 'yellow'
    }
    let style2 = {
        textAlign: "center"
    }
    // 函数式组件通信 本地style合并
    let finstyle = { ...style1, ...style2 }
    console.log(finstyle);

    return (
        <div style={finstyle}>
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    )
}
