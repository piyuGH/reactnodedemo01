import React, { Component } from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import { connect } from 'react-redux'
import { fetchNewsItem } from '../../actions/actions'

class NewsArticle extends Component {

    componentDidMount() {

        // var fakeNewsItem = {
        //     id: '1',
        //     title: 'Mad owl chases car',
        //     teaser: 'Mad owl seen tormenting drivers in Morecambe',
        //     body: `Morecambe - Tuesday 8th August 2017

        //     Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
        //     Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for" CLIENT`
        // };        
        // this.props.dispatch(fetchNewsItem(fakeNewsItem));

        //NewsArticle will now use the id parameter passed in by the router and call the API requesting the news story data.
        this.props.dispatch(fetchNewsItem(this.props.match.params.id));
    }

    render() {
        let { newsItem } = this.props;

        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    {/* newsItem ? <NewsItemDetail data={newsItem} /> : null*/}
                    {!this.props.newsItemLoading ? <NewsItemDetail data={this.props.newsItem} /> : <div>Loading</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem,
        newsItemLoading: state.news.newsItemLoading
    }
}

export default connect(mapStateToProps)(NewsArticle)