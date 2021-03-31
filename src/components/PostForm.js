import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }
    submitHandler = event => [
        event.preventDefault()
    ]

    render() {
        return (
        <form onSubmit={this.submitHandler}>
             <div className="form-group">
                <label htmlFor="title">Post's title</label>
                <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="title" 
                />
             </div>
             <button className="btn btn-success mb-3" type="submit">Create</button>
        </form>
        )
    }
}
