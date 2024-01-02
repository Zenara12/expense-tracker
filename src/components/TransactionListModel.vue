<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="expenses in props.expensesList" :key="expenses.id" :class="expenses.remarks == 'income'? 'plus':'minus'">
            {{ expenses.description }}
            <span>
                <span v-if="expenses.remarks == 'income'">+</span>
                <span v-else>-</span>
                ₱{{expenses.amount}}
            </span>
            <button class="delete-btn">x</button>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps(
    {
        expensesList:{
            type:Array,
            required:true
        }
    });
</script>

<style scoped>

</style>