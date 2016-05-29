import React, { Component } from 'react';
import Date from '../common/date';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
        posts: [{
          "userId": 1,
          "id": 1,
          "date": "May 27, 2016",
          "title": "Web Development Reading List #139: jQuery 3, Web Payment API, And ES6 Tricks",
          "url": "https://www.smashingmagazine.com/2016/05/web-development-reading-list-139/"
        },
        {
          "userId": 1,
          "id": 2,
          "date": "May 27, 2016",
          "title": "jQuery 3.0 Release Candidate…Released!",
          "body": "https://blog.jquery.com/2016/05/20/jquery-3-0-release-candidate-released/"
        }]
    }
  }

  render() {
    const notes = this.state.posts.map(function(post) {
      return(
        <div key={post.id} className="article list-item">
          <a href="#">
            <h2>
              <span className="title">{post.title}</span>
              <Date date={post.date} />
            </h2>
          </a>
        </div>
      )
    });

    return (
      <div>
        {notes}
      </div>
    )
  }
}

export default Note;
