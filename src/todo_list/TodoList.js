import React from 'react';
import _ from 'lodash';

class TodoList extends React.Component {

    render() {
        const { items, onCrossClick } = this.props;

        return (
            <div>
                <ul className="todos" >
                    {
                        _.map(items, (item, index) => (
                            <li key={index.toString()} id={index.toString()} className={"todo-item"} >
                                <p>
                                    { item }
                                </p>
                                <button className="cross-btn" onClick={() => onCrossClick(index)} >
                                    x
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

};

export default TodoList;