import styled from '@emotion/styled'

export const Button = styled.button(
  {
    padding: '10px 20px',
    color: 'white',
    fontSize: '15px',
    backgroundColor: 'gray',
    border: 'none',
    '&:hover': {
      opacity: 0.8,
    },
  },
  props => {
    let styles = []
    switch (props.type) {
      case 'danger':
        styles.push({ backgroundColor: 'red' })
        break;
      case 'info':
        styles.push({ backgroundColor: 'blue' })
        break;
      default:
        styles.push({ backgroundColor: 'gray' })
    }
    switch (props.size) {
      case 'large':
        styles.push({
          padding: '20px 40px',
          fontSize: '18px',
        })
        break;
      case 'small':
        styles.push({
          padding: '7px 14px',
          fontSize: '13px',
        })
        break;
      default:
        break;
    }
    return styles;
  }
)