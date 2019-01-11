import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            {/* using Link instead of anchor tag to prevent reloading page everytime
                            path changed from the browser */}
                            {/* Link-> NavLink is done because NavLink gives some stylings props */}
                            {/* activeClassName will change the name of default active class */}
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home2</h1>} /> */}
                <Switch>
                    {/* order is important */}
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;