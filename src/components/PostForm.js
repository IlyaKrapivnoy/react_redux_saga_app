import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
    
        const {title} = this.state

        if (!title.trim()) { 
            return // если input пустой, пост создаваться не будет
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)
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

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)