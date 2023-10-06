<script setup>
import PlusIcon from './icons/PlusIcon.vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    }
});

</script>

<template>
    <button class="button">
        <PlusIcon />
        <span>{{ props.text }}</span>
    </button>
</template>

<style scoped>
    .button {
        display: flex;
        align-items: center;

        cursor: pointer;

        padding: 10px 20px;

        border: none;
        border-radius: 10px;        
        
        background-color: white;        
    }

    .button span {
        color: var(--color-background);
        /* font-weight: bold; */
        margin-left: 5px;

        font-size: 12pt;
    }
</style>