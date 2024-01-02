

<template>
  <header>
    <HeaderModel />
  </header>

  <main>

    <div class="container">
      <BalanceModel :total = "total"/>
      <IncomeExpenses :incometotal ="incometotal" :expensetotal="expensetotal"/>
      <TransactionList :expensesList="expensesList"/>
      <AddTransaction/>
    </div>
  </main>
</template>

<script setup>
import HeaderModel from './components/HeaderModel.vue';
import BalanceModel from './components/BalanceModel.vue';
import IncomeExpenses from './components/IncomeExpensesModel.vue';
import TransactionList from './components/TransactionListModel.vue';
import AddTransaction from './components/AddTransactionModel.vue';
import { ref } from 'vue';
import {useExpensesStore} from '@/store/expenses.js';

const expensesData = useExpensesStore();
const expensesList = ref([]);
const total = ref(0);
const incometotal = ref(0);
const expensetotal = ref(0);
const displayExpenses = (data) =>{
    expensesList.value= data.expensesList[0];
    totalBalance(expensesList.value);
    //console.log(expensesList.value);
};
const totalBalance = (balance) =>{
    // console.log('balance');
    // console.log(balance);
    
    balance.forEach(elements => {
      if(elements.remarks === "income") incometotal.value += elements.amount;
      else expensetotal.value += elements.amount;
    });
   total .value = incometotal.value - expensetotal.value;

    console.log(total.value);
};

displayExpenses(expensesData);

</script>

<style scoped>

</style>
