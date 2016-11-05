export const ON_HOVER = 'ON_HOVER'
export const START_COUNTER = 'START_COUNTER'

export const onHover = () => {
  return {
    type: ON_HOVER
  }
}

export const startCounter = () => ({
  type: START_COUNTER
})
