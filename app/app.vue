<template>
  <div>
    <h1>Hello World</h1>
    <DatePicker v-model="date" />
    <InputMask
      id="basic"
      v-model="value"
      mask="99-999999"
      placeholder="99-999999"
    />
    <DataTable :value="products" table-style="min-width: 50rem">
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
    </DataTable>
    <Button label="Verify" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const date = ref()
const value = ref()
const products = ref()
products.value = [{ code: 1, name: 'Teste', category: 'cat', quantity: 5 }]
</script>
