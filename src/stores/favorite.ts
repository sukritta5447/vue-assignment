import { defineStore } from "pinia";

export interface Course {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "",
    favorites: [] as Course[],
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    addFavorite(course: Course) {
      this.favorites.push(course);
    },
  },
});
