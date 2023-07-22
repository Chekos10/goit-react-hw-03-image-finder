import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({data}) =>{
    return (
        <ul className="gallery">
        <ImageGalleryItem data={data}/>
        </ul>
    )
}