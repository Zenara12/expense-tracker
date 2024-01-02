/* eslint-disable no-undef */
import {ref} from 'vue';
import { expenses } from '@/expenses.json';
import { defineStore } from 'pinia';



export const useExpensesStore = defineStore('expenses',()=>{
    const expensesList = ref([
        expenses
    ]);

    
    return{
        expensesList,
    };
});