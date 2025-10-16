import { useCounter } from "./useCounter";
import { useToggle } from "./useToggle";

export function useCounterWithToggle() {
    const counter = useCounter(0)
    const toggle = useToggle()

    return {...counter,...toggle}
}