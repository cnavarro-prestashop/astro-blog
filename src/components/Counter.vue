<template>
    <div class="container">
        <h1>Vue counter</h1>
        <div class="counter">
            <button @click="subtract()">-</button>
            <!-- Without store -->
            <pre>{{ count }}</pre>

            <!-- With store -->
            <!-- <pre>{{$counterStore.count}}</pre> -->
            <button @click="add()">+</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { counterStore } from '../stores/counterStore';
    import { useStore } from "@nanostores/vue";

    // Without store
    const count = ref(0);
    const add = () => (count.value = count.value + 1);
    const subtract = () => (count.value = count.value - 1);

    // With store
    // const $counterStore = useStore(counterStore);
    // const add = () => counterStore.set({ ...$counterStore, count: $counterStore.count + 1 });
    // const subtract = () => counterStore.set({ ...$counterStore, count: $counterStore.count - 1 });
</script>
