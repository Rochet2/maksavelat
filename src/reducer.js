const initialState = {
    reasons: ["Movies", "Badminton", "Other"],
    contacts: [],
    debts: [],
    whiteTheme: false,
}

const testState = {
    reasons: ["Leffa", "Keilaus", "Sulkapallo"],
    contacts: ["matti", "pekka", "maija"],
    debts: [
        { who: "matti", amount: -15, reason: "Leffa", comment: "", paid: false, id: 1, date: "2019-01-24T22:55:24+02:00" },
        { who: "matti", amount: 3.4, reason: "Keilaus", comment: "", paid: false, id: 2, date: "2019-01-22T22:55:24+02:00" },
        { who: "pekka", amount: -6, reason: "Sulkapallo", comment: "", paid: false, id: 3, date: "2019-01-27T22:55:24+02:00" },
        { who: "maija", amount: -32, reason: "Leffa", comment: "", paid: false, id: 4, date: "2019-01-29T22:55:24+02:00" },
    ],
    whiteTheme: false,
}

const reducer = (paramstate, action) => {
    let realstate = paramstate || JSON.parse(window.localStorage.getItem("maksavelat")) || initialState
    const state = JSON.parse(JSON.stringify(realstate))
    switch (action.type) {
        case "ToggleTheme":
            state.whiteTheme = !state.whiteTheme
            break
        case "AddReason":
            if (action.value.length !== 0 && !state.reasons.find(r => r === action.value))
                state.reasons.push(action.value)
            break
        case "RemoveReason":
            state.reasons = state.reasons.filter(r => r !== action.value)
            break
        case "AddContact":
            if (action.value.length !== 0 && !state.contacts.find(c => c === action.value))
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
        default:
            break
    }
    window.localStorage.setItem("maksavelat", JSON.stringify(state))
    console.log(state, action)
    return state
}

export default reducer
