import React, {Component} from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios
                    .get(axios.defaults.baseURL + '/posts/' + this.props.id)
                    .then((resp) => {
                        this.setState({loadedPost: resp.data});
                    })
            }
        }
    }

    deletePostHandler = (postId) => {
        axios.delete(axios.defaults.baseURL + '/posts/' + postId, {
            method: 'DELETE'
        }).then(response => {
            console.log(response)
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        let post = <p style={{
            textAlign: 'center'
        }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{
                textAlign: 'center'
            }}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={() => this.deletePostHandler(this.state.loadedPost.id)}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;