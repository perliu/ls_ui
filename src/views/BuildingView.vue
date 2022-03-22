<template>
  <div class="building">
    <h1>建筑物信息维护</h1>
  </div>
  <!-- demo root element
  <div id="demo">
    <form id="search">
      Search <input name="query" v-model="searchQuery" />
    </form>
    <table>
      <thead>
      <tr>
        <th v-for="key in col_head" :key="key">
          {{ key }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in row_data" :key="entry">
        <td v-for="key in entry" :key="key">
          {{ key }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
-->
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue';

export default defineComponent({
  async setup() {
    const rawData: any = await axios.get('/api/ls/building/builds').catch(function (error){console.log("error===============",error)})
    return {
      col_head : rawData.data.headers,
      row_data : rawData.data.rows
    }
  }
})

</script>


