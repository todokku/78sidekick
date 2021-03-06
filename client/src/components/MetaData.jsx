import React from 'react';

class MetaData extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    let title = `${this.props.title}`;
    let artist = `${this.props.artist}`;
    const spanStyle = {
      fontSize: 15,
    }
    let detailsPage = `https://archive.org/details/${this.props.id}`
    let year;
    if (this.props.gettingSong) {
      artist = "*** Getting Next Song ***";
      title = '';
      year = ''
    }
    else if (this.props.noYear) {
      year = `[Date Unknown]`;
    } else if (`${this.props.year}` !== '') {
      year = `(19` +`${this.props.year}` + `)`;
    }
    if (title === '' && artist === '') {
      return <div>
        </div>
    } else {
      if (title.length > 25) {
        title = title.slice(0, 25) + '...\"';
      }
      if (artist.length > 25) {
        artist = artist.slice(0, 25) + '...';
      }
      return (
        // displays fetched metadata for a given song
        // need to limit song title if it is longer
        // than X number of characters
        <div id="metadata">
          <a href={detailsPage} target="_blank">
          <span>{title}</span>
          <br></br>
         <span style={spanStyle} >{artist}</span>
         <br></br>
         <span style={spanStyle}>{year}</span>
         </a>
        </div>
      )
    }
  }
}

export default MetaData
