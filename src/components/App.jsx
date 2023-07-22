import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { getImg } from "./services/getImg";
export class App extends Component {
  state = {
    searchImg:'',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
  }

  hendleSearch=(searchImg)=>{
    this.setState({searchImg})
  }
    componentDidUpdate(prevProps, prevState) {
    if (prevState.searchImg!== this.state.searchImg) {
        if(this.state.images.length === 0){
          this.setState({isLoading:true})
        }
        getImg(this.state.searchImg)
        .then(images => {
          const { data } = images;
          this.setState({ images: [...data.hits] });
        })

        .catch((error)=>{
          this.setState({error})
        })
        .finally(()=>{
          this.setState({isLoading:false})
        })
    }
  }
  render(){
    const {isLoading} = this.state
    return (
      <>
        <Searchbar hendleSearch = {this.hendleSearch}/>
        <ImageGallery data = {this.state.images}/>
        {isLoading && <Loader/>}
      </>
      
    )
  }
};
