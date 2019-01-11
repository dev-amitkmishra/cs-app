import React, {Component} from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    };
    componentDidMount() {
        console.log(this.props);
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response
                    .data
                    .slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Amit'
                    }
                })
                this.setState({posts: updatedPosts})
            })
            .catch((err) => {
                console.log(err);
            })
    }
    clickHandler = (postId) => {
        this.setState({selectedPostId: postId});

        //demo
        // this.props.history.push({
        //     pathname: '/' + postId
        // })
    }
    render() {
        const posts = this
            .state
            .posts
            .map((post) => {
                return (
                    <Link key={'key_' + post.id} to={'/' + post.id}>
                        <Post
                            clicked={() => this.clickHandler(post.id)}
                            key={post.id}
                            title={post.title}
                            author={post.author}/>
                    </Link>
                    // without Link also we can achieve the same thing check keyword demo
                    // 
                )
            })
        return (
            <section>
                {posts}
            </section>
        );
    }
}

export default Posts;