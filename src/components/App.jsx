import { Component } from "react";
import { Button } from "./Button/Button";
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
    this.setState({searchImg , page:1, images:[]})
  }
  onMoreBtnClick = () =>{
    this.setState(prevState =>({
      page:prevState.page+1
    }))
  }
    componentDidUpdate(prevProps, prevState) {
    
    if (prevState.searchImg!== this.state.searchImg || prevState.page!==this.state.page) {
        const {searchImg,page,images}= this.state
        if(images.length === 0 || page ===1){
          this.setState({isLoading:true})
        }
        getImg(searchImg,page)
        .then(images => {
          const { data } = images;
          this.setState({ 
          images: [...prevState.images, ...data.hits],
          isLoading: false,});
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
    const {isLoading,images} = this.state
    return (
      <>
        <Searchbar hendleSearch = {this.hendleSearch}/>
        <ImageGallery data = {this.state.images}/>
        {images.length >0 && <Button onMoreBtnClick = {this.onMoreBtnClick}/>}
        {isLoading && <Loader/>}
      </>
      
    )
  }
};
