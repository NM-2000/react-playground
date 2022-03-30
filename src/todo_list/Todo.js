import React from 'react';
import './styles.css';
import TodoList from './TodoList';
import _ from 'lodash';

class Todo extends React.Component {

    /**
     * constructor is the initial phase of the component lifecycle
     */
    constructor(props) {
        /**
         * calling the super() method which executes the constructor of the parent class, recursive behaviour
         */
        super(props);
        /**
         * Defining internal state for our component
         * items: List of items added in our todo list
         * text: current text state of the InputField (controlling it like a "react controlled component")
         */
        this.state = {
            items: [],
            text: "",
        };
        /**
         * binding the custom defined methods
         */
        this.onTextChange = this.onTextChange.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onCrossClick = this.onCrossClick.bind(this);
    }

    /**
     * Executed when we are altering the text inside the InputField
     * Firing this method while listening to onChange event of InputField
     */
    onTextChange(e) {
        const value = e.target.value;
        this.setState({
            text: value
        });
    }

    /**
     * Fired on clicking Add button
     * Changing state {items, text} provided a valid value is entered into InputField, 
     * triggers re-render and updates todo-list
     */
    onClickAdd(e) {
        e.preventDefault();
        const { items, text } = this.state;
        if(text.trim()) {
            this.setState({
                items: [...items, text.trim()],
                text: ""
            });
        }
        else{
            this.setState({
                text: ""
            });
        }
    }

    /**
     * Deletes the clicked item from the list
     * filters the existing items based on their own index and the index-to-be-deleted.
     */
    onCrossClick(deleteIndex) {
        const { items } = this.state;
        const filteredItems = _.filter(items, (item, index) => {
            return (index !== deleteIndex);
        });
        this.setState({
            items: filteredItems
        });
    }

    render() {
        const { items, text } = this.state;

        return (
            <div className="main-container" >
                <h2 className="heading" >TO-DO(s)</h2>
                <TodoList items={items} onCrossClick={this.onCrossClick} />
                <form className="form" onSubmit={this.onClickAdd} >
                    <input className="input" placeholder="Enter..." value={text} onChange={this.onTextChange} />
                    <button className="add-btn" >
                        { `Add #${items.length + 1}` }
                    </button>
                </form>
            </div>
        );
    }

};

export default Todo;