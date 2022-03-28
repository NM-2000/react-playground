import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello_world';
import Timer from './timer';

/**
 * render the React component (along with its props) passed as the 1st argument,
 * inside the element specified using 2nd argument.
 */

// ReactDOM.render(<HelloWorld name="John Doe" />, document.getElementById("root"));



/**
 * render the Timer component.
 */

ReactDOM.render(<Timer />, document.getElementById("root"));


