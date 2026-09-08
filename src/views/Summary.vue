<template>
  <div class="page-container">
    <h2>Summary</h2>

    <template v-if="username.trim() && favorites.length">
      <p>ชื่อผู้ใช้: {{ username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ favorites.length }}</p>
    </template>
    <p v-else>ยังไม่มีข้อมูลการเลือกคอร์ส</p>

    <RouterLink to="/">กลับไปหน้า Course</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();
const { username, favorites } = storeToRefs(favoriteStore);
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
