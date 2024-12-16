import "./index.css"
const ImageItem = props => {
    const {imageDetails, onClickImageItem, isActive} = props;
    const {id, thumbnailUrl, thumbnailAltText} = imageDetails;
    const imageClassName = isActive ? 'active' :  "";
    const onClickImage = () => {
        onClickImageItem(id)
    }
    return(
        <li className="list-items">
            <button type="button" onClick={onClickImage}>
                <img 
                    src={thumbnailUrl} 
                    alt={thumbnailAltText} 
                    className = {`thumbnail ${imageClassName}`} 
                />
            </button>
        </li>
    )
}

export default ImageItem;

