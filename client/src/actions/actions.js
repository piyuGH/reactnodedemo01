import actionTypes from '../constants/actionTypes';

function newsItemReceived(newsItem) {
    return {
        type: actionTypes.NEWSITEM_RECEIVED,
        newsItem: newsItem
    }
}

function newsReceived(news) {
    return {
        type: actionTypes.NEWS_RECEIVED,
        news: news
    }
}

function newsItemLoading() {
    return {
        type: actionTypes.NEWSITEM_LOADING
    }
}

// export function fetchNews(fakeNews){
//     console.log('presend')
//     return dispatch => {
//        // dispatch(newsReceived(fakeNews));
//        return fetch(`http://localhost:5000/news`)
//         .then( (response) =>{
//             console.log(response);
//         });
//     }
// }

//methods to process the returned data
export function fetchNews() {
    return dispatch => {
        return fetch(`/news`)
            .then((response) => response.json())
            .then((data) => dispatch(newsReceived(data.data)))
            .catch((e) => console.log(e));
    }
}

// export function fetchNewsItem(fakeNewsItem) {
//     return dispatch => {
//         dispatch(newsItemReceived(fakeNewsItem));
//     }
// }

//methods to process the returned data
export function fetchNewsItem(id) {
    return dispatch => {
        return fetch(`/news/${id}`)
            .then((response) => response.json())
            .then((data) => dispatch(newsItemReceived(data.data)))
            .catch((e) => console.log(e));
    }
}

//action for making the POST request to our API
export function submitNewsStory(data) {
    return dispatch => {
        return fetch('/news/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        })
            .catch((e) => console.log(e))
            .finally(console.log('in action.js: submitNewsStory'));
    }
}

