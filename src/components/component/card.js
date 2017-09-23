import React from 'react'

class Card extends React.Component {
  getImage = (imagePath) => {
    return `https://image.tmdb.org/t/p/w300${imagePath}`;
  }

  addFavourite = () => {
    this.props.handleClick(this.props.data);
  }

  render () {
    return (
      <div className="movieCard">
        <img className="movieImage" alt={this.props.data.title} src={this.getImage(this.props.data.poster_path)} />
        <div className="imageTitle">
          <p className="language">{this.props.data.original_language}</p>
          <p className="title">{this.props.data.title}</p>
        </div>
        <div className="imageHeader">
          <i className="releaseDate">{this.props.data.release_date}</i>
          <div className="icons">
            <i className="glyphicon glyphicon-heart" aria-hidden="true" onClick={this.addFavourite.bind(this)}></i>
            <i className="glyphicon glyphicon-comment" aria-hidden="true"></i>
            <i className="glyphicon glyphicon-star" aria-hidden="true"></i>
            <i className="vote_count">{this.props.data.vote_count}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;