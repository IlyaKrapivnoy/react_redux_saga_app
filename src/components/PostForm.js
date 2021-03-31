import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
    
        const {title} = this.state

        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost)
        this.setState({title: ''}) // очищает инпут по клику на btn Create
        
    }
    changeInputHandler = event => [
        event.persist(),
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
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
                    value={this.state.title}
                    name="title"
                    onChange={this.changeInputHandler}
                />
             </div>
             <button className="btn btn-success mb-3" type="submit">Create</button>
        </form>
        )
    }
}
