// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, isActive, selectedImg} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails
  const activeImg = isActive ? 'selected-img' : 'unselected-img'
  const onImgForSelecting = () => {
    selectedImg(id)
  }
  return (
    <div>
      <img
        src={thumbnailUrl}
        className={activeImg}
        alt={thumbnailAltText}
        onClick={onImgForSelecting}
      />
    </div>
  )
}

export default ThumbnailItem
