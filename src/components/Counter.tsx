import { useState } from "react";
import { useStore } from "@nanostores/react";
import { counterStore } from "../stores/counterStore";

export default function Counter() {
    // Without store
    const [count, setCount] = useState(0);
    const add = () => setCount((i) => i + 1);
    const subtract = () => setCount((i) => i - 1);

    // With store
    // const $counterStore = useStore(counterStore);
    // const add = () => counterStore.set({ ...$counterStore, count: $counterStore.count + 1 });
    // const subtract = () => counterStore.set({ ...$counterStore, count: $counterStore.count - 1 });

    return (
        <div className="container">
            <h1>React counter</h1>
            <div className="counter">
                <button onClick={subtract}>-</button>
                {/* Without store */}
                <pre>{count}</pre>

                {/* With store */}
                {/* <pre>{$counterStore.count}</pre> */}

                <button onClick={add}>+</button>
            </div>
        </div>
    );
}
