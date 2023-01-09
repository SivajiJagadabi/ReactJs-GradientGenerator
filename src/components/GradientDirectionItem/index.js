// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, changeDirection, isActive} = props
  const {value, displayText} = gradientDirectionDetails

  const onClickGradientDirection = () => changeDirection(value)

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
