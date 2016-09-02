import React from 'react';

const App = (props) =>
    <div className="h100">
        {props.children}
    </div>
;

App.propTypes = {
    children: React.PropTypes.node
};

export default App;
