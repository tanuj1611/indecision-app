import React from "react";
import ReactDOM from "react-dom";

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}

ReactDOM.render((
    <Layout>
        <p>inline</p>
    </Layout>
    ), document.getElementById('app'));