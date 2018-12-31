import React, {Component} from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    postDataHandler = () => {
        axios.post(axios.defaults.baseURL + '/posts', {
            method: 'POST',
            body: JSON.stringify({title: this.state.title, body: this.state.content, userId: this.state.author}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.content}
                    onChange={(event) => this.setState({content: event.target.value})}/>
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Amit">Amit</option>
                    <option value="Mishra">Mishra</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;