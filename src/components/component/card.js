import React from 'react'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

class Card extends React.Component {
  componentWillMount = () => {
    let favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
    let flag = false;
    favouriteMovies.forEach((favourite) => {
      if (favourite.id === this.props.data.id) {
        flag = true;
      }
    });
    this.setState({
      isFavourite: flag
    })
  }

  getImage = (imagePath) => {
    return `https://image.tmdb.org/t/p/w300${imagePath}`;
  }

  addFavourite = () => {
    this.setState({
      isFavourite: !this.state.isFavourite
    });
    this.props.handleClick(this.props.data);
  }

  getDetails = () => {
    console.log('Img Clicked');
  }

  render () {
    let tooltip;
    if (this.state.isFavourite) {
      tooltip = (
        <Tooltip id="tooltip"><strong>Remove from Watchlist</strong></Tooltip>
      )
    } else {
      tooltip = (
        <Tooltip id="tooltip"><strong>Add to Watchlist</strong></Tooltip>
      )
    }
    return (
      <div className="movieCard">
        <img className="movieImage" href="/details" alt={this.props.data.title ? this.props.data.title : this.props.data.name} src={this.getImage(this.props.data.poster_path)} onClick={this.getDetails.bind(this)}/>
        <div className="imageTitle">
          <p className="language">{this.props.data.original_language}</p>
          <p className="title">{this.props.data.title ? this.props.data.title : this.props.data.name}</p>
        </div>
        <div className="imageHeader">
          <i className="releaseDate">{this.props.data.release_date}</i>
          <div className="icons">
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <i className={this.state.isFavourite ? 'glyphicon glyphicon-eye-open' : 'glyphicon glyphicon-eye-close'} aria-hidden="true" onClick={this.addFavourite.bind(this)}></i>
            </OverlayTrigger>
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