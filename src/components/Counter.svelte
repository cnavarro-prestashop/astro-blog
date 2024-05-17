<script>
  import { counterStore } from "../stores/counterStore";

  let count = 0;

  function add() {
    // Without store
    count += 1;

    // With store
    // counterStore.set({ ...$counterStore, count: $counterStore.count + 1 });
  }

  function subtract() {
    // Without store
    count -= 1;

    // With store
    // counterStore.set({ ...$counterStore, count: $counterStore.count - 1 });
  }
</script>

<div class="container">
  <h1>Svelte Counter</h1>
  <div class="counter">
    <button on:click={subtract}>-</button>
    <!-- Without store -->
    <pre>{count}</pre>

    <!-- With store -->
    <!-- <pre>{$counterStore.count}</pre> -->
    <button on:click={add}>+</button>
  </div>
</div>
