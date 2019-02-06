const initialState = {
  reasons: ["Movies", "Badminton", "Other"],
  contacts: [],
  debts: [],
  whiteTheme: false,
}

const reducer = (paramstate, action) => {
  let realstate = paramstate || JSON.parse(window.localStorage.getItem("maksavelat")) || initialState
  const state = JSON.parse(JSON.stringify(realstate))

  // correct missing IDs if any
  state.debts.forEach(d => {
    if (!d.id)
      d.id = state.debts.filter(d1 => d1.id).reduce((acc, d) => Math.max(d.id, acc), 0) + 1
  })

  switch (action.type) {
    case "ToggleTheme":
      state.whiteTheme = !state.whiteTheme
      break
    case "AddReason":
      if (action.value.length !== 0 && !state.reasons.some(r => r === action.value))
        state.reasons.push(action.value)
      break
    case "RemoveReason":
      state.reasons = state.reasons.filter(r => r !== action.value)
      break
    case "AddContact":
      if (action.value.length !== 0 && !state.contacts.some(c => c === action.value))
        state.contacts.push(action.value)
      break
    case "RemoveContact":
      state.contacts = state.contacts.filter(c => c !== action.value)
      break
    case "AddDebt":
      action.value.id = state.debts.reduce((acc, d) => Math.max(d.id, acc), 0) + 1
      state.debts.push(action.value)
      break
    case "PayDebt":
      state.debts.filter(d => d.id === action.value).forEach(d => { d.paid = true })
      break
    case "UnPayDebt":
      state.debts.filter(d => d.id === action.value).forEach(d => { d.paid = false })
      break
    case "PayAll":
      state.debts.filter(d => d.who === action.value).forEach(d => { d.paid = true })
      break
    case "DeleteDebt":
      state.debts = state.debts.filter(d => d.id !== action.value)
      break
    case "EditDebt":
        state.debts.forEach((d, index) => {
          if (d.id === action.value.id)
            state.debts[index] = {...d, ...action.value}
        })
      break
    default:
      break
  }
  window.localStorage.setItem("maksavelat", JSON.stringify(state))
  console.log(state, action)
  return state
}

export default reducer
