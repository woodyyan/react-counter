import React, { Component } from 'react'
import Counter from './Counter'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props)

        this.initArray = this.initArray.bind(this)
        this.onChange = this.onChange.bind(this)

        this.state = {
            size: 2
        }
    }

    onChange(event) {
        const value = event.target.value
        this.setState({
            size: value.length > 0 ? parseInt(value) : 0
        })
    }

    initArray(size) {
        return Array.from(Array(size).keys())
    }

    render() {
        let counters = this.initArray(this.state.size)
        return (
            <div>
                <form>
                    <input type="text" onChange={this.onChange} value={this.state.size}/>
                </form>
                {
                    counters.map(value => (
                        <Counter key={value}/>
                    ))
                }
            </div>
        )
    }
}
