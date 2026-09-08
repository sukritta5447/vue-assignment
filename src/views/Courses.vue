<template>
  <div class="page-container">
    <header>
      <h2>Course List</h2>
      <p>ถูกใจแล้ว {{ favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label for="username">ชื่อผู้ใช้:</label>
      <input id="username" v-model="username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <div v-else class="course-list">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>

    <RouterLink class="summary-link" to="/summary">ไปหน้า Summary</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import CourseCard from "../components/CourseCard.vue";
import { useFavoriteStore, type Course } from "../stores/favorite";

const courses = ref<Course[]>([]);
const errorMessage = ref("");
const favoriteStore = useFavoriteStore();
const { username, favorites } = storeToRefs(favoriteStore);

onMounted(async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("โหลดข้อมูลคอร์สไม่สำเร็จ");
    courses.value = await response.json();
  } catch {
    errorMessage.value = "ไม่สามารถโหลดรายการคอร์สได้ กรุณาลองใหม่อีกครั้ง";
  }
});
</script>

<style scoped>
.page-container {
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.form-section {
  margin: 20px 0;
}

label {
  margin-right: 8px;
}

input {
  padding: 8px;
  min-width: 240px;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.summary-link {
  display: inline-block;
  margin-top: 24px;
}

.error {
  color: #b42318;
}
</style>
