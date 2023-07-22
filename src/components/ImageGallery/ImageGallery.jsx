import { getImg } from 'components/services/getImg';
const { Component } = require('react');

export class ImageGallery extends Component {
  state = {
    images: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImg !== this.props.searchImg) {
      getImg(this.props.searchImg).then(images => {
        const { data } = images;
        this.setState({ images: data.hits });
      });
    }
  }
  render() {
    const { images } = this.state;
    return (
      images &&
      images.map(el => {
        return (
          <li key={el.id}>
            <img src={el.previewURL} alt={el.tags} />
          </li>
        );
      })
    );
  }
}
