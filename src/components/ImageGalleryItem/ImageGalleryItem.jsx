
export const ImageGalleryItem = ({data})=> {
  return data.map(image=>{
    return (
      <li key={image.id}>
        <img src={image.previewURL} alt={image.tags}/>
      </li>
    )
  })
}
