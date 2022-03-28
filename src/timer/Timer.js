import React from 'react';

class Timer extends React.Component {

    /**
     * constructor is the thing which runs initially in the lifecycle of a React component,
     * and gives the component some concrete meaning
     */
    constructor(props) {
        super(props);
        /**
         * Internal state of a component, if the state changes, component's render() is re-invocated or re-rendered.
         */
        this.state = {
            seconds: 0
        };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    /**
     * Fired just after the component is rendered, analogous to useEffect hook
     */
    componentDidMount() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    /**
     * Fired just before the component is about to be unmounted or destroyed, for performing any cleanups
     */
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { seconds } = this.state;

        return (
            <div>
                { `Time: ${seconds} seconds` }
            </div>
        );
    }

};

export default Timer;