import React, { Component } from 'react';
import './App.css';
import { Router, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import NewsItemDetail from './components/presentation/NewsItemDetail';
import { Provider } from 'react-redux';
import store from './store/store';
import NewsArticle from './components/containers/NewsArticle';
import NewsSubmit from './components/containers/NewsSubmit';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news/:id" component={NewsArticle} /> {/* component={NewsItemDetail} */}
            <Route path='/submit' component={NewsSubmit}/>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;