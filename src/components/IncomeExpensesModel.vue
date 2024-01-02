<template>
    <div class="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">+₱{{ props.incometotal }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">-₱{{ props.expensetotal }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    incometotal:{
        type:Number,
        required:true
    },
    expensetotal:{
        type:Number,
        required:true
    }
});
</script>
