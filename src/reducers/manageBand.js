import uuid from "uuid";

export default function manageBand(
  state = {
  bands: [],
}, action
) {
  switch(action.type) {
    case "ADD_BAND":
      const band ={
        id: uuid(),
        text: action.payload.text,
      }
      return {...state, bands: state.bands.concat(action.name)}
    default:
      return state
  
  }
}
