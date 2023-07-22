import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
export class App extends Component {
  state = {
    searchImg:'',
  }

  hendleSearch=(searchImg)=>{
    this.setState({searchImg})
  }
  render(){
    return (
      <>
        <Searchbar hendleSearch = {this.hendleSearch}/>
        <ImageGallery searchImg={this.state.searchImg}/>
      </>
      
    )
  }
};
