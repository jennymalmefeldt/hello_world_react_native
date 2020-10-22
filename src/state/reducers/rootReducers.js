
const initialState = {
  mainPageGreeting: "Hello main page",
  secondPageGreeting: {
    title: "Hello second page",
    body: "This is fun"
  }
}
const rootReducer = (state = initialState) => {
  return state
}
export default rootReducer