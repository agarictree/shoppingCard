import { add } from "./actions";

export function addItemAction(item) {
    return {
        type: add,
        payload: {
            name: item.name,
            counter: item.counter
        }
    }
}