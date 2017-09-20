import React from 'react'

class MovieCard extends React.Component {
  getImage = (imagePath) => {
    return `https://image.tmdb.org/t/p/w300${imagePath}`;
  }

  addFavourite = () => {
    this.props.handleLike(this.props.movie);
  }

  render () {
    return (
      <div className="movieCard">
        <img className="movieImage" alt={this.props.movie.title} src={this.getImage(this.props.movie.poster_path)} />
        <div className="imageTitle">
          <p className="language">{this.props.movie.original_language}</p>
          <p className="title">{this.props.movie.title}</p>
        </div>
        <div className="imageHeader">
          <i className="releaseDate">{this.props.movie.release_date}</i>
          <div className="icons">
            <i className="fa fa-heart" aria-hidden="true" onClick={this.addFavourite.bind(this)}></i>
            <i className="fa fa-comment" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="vote_count">{this.props.movie.vote_count}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;