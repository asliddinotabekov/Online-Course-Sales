export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "id": return payload.id
        case "title": return payload.title
        default: return state
    }
}