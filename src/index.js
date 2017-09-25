import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/Layout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={CreatePost} />
        <Route path="/show/:_id" component={ShowPost} />
        <Route path="/show" component={PostList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
