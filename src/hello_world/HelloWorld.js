import React from 'react';

/**
 * This example demonstrates a trivial React Class-based Component to display "Hello" message.
 */
class HelloWorld extends React.Component {


    /**
     * render() method is implemented by every class-based component in React.
     * render() method is an integral part of class-based component, since it returns "how the component is displayed".
     */
    render() {
        const { name } = this.props;
        /**
         * render() method returns an XML like syntax, called JSX (JavaScript XML) which is understood & displayed by the browser.
         * JSX is optional, not required for React to work.
         */
        return (
            <div>
                <p>
                    { `Hello, ${name}!` }
                </p>
            </div>
        );
    }

};

export default HelloWorld;