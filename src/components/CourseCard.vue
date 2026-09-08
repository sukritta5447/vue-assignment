<template>
  <article class="course-card">
    <img :src="course.image" :alt="course.title" />
    <div class="course-content">
      <h3>{{ course.title }}</h3>
      <p class="price">ราคา {{ course.price.toFixed(2) }} บาท</p>
      <button :disabled="!username.trim()" @click="addToFavorites">
        เพิ่มในรายการโปรด
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFavoriteStore, type Course } from "../stores/favorite";

const props = defineProps<{ course: Course }>();
const favoriteStore = useFavoriteStore();
const { username } = storeToRefs(favoriteStore);

const addToFavorites = () => {
  favoriteStore.addFavorite(props.course);
};
</script>

<style scoped>
.course-card {
  display: flex;
  gap: 16px;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
  text-align: left;
}

img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  flex-shrink: 0;
}

.course-content {
  flex: 1;
}

h3 {
  margin: 0 0 8px;
  font-size: 16px;
}

.price {
  margin: 0 0 12px;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>
