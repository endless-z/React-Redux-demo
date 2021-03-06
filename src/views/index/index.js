import React, { Component } from 'react'
import store from '../../store/index'
import TodoList from '../../components/todoList'
import { changeInputAction, addItemAction, delItemAction, getToList } from '../../store/actionCreators'
// import axios from 'axios'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.inputChangeValue = this.inputChangeValue.bind(this)
        this.addItem = this.addItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.delItem = this.delItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <TodoList 
                inputValue={this.state.inputValue}
                inputChangeValue={this.inputChangeValue}
                addItem={this.addItem}
                list={this.state.list}
                delItem={this.delItem}
            />
        )
    }

    componentDidMount() {
        const action = getToList()
        store.dispatch(action)
    }

    inputChangeValue(e) {
        console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    addItem () {
        const action = addItemAction()
        store.dispatch(action)
    }

    delItem (index) {
        const action = delItemAction(index)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default Index