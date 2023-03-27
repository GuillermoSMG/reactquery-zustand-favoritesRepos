import { create } from "zustand";
import { persist } from "zustand/middleware";

type favoriteReposState = {
  favoriteReposIds: number[];
  favoriteReposURLs: string[];
  addFavoriteRepo: (id: number, url: string) => void;
  removeFavoriteRepo: (id: number, url: string) => void;
};

export const useFavoriteRepos = create(
  persist<favoriteReposState>(
    (set) => ({
      favoriteReposIds: [],
      favoriteReposURLs: [],
      addFavoriteRepo: (id: number, url: string) =>
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
          favoriteReposURLs: [...state.favoriteReposURLs, url],
        })),
      removeFavoriteRepo: (id: number, url: string) =>
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter(
            (repoId) => repoId !== id
          ),
          favoriteReposURLs: state.favoriteReposURLs.filter(
            (repoURL) => repoURL !== url
          ),
        })),
    }),
    { name: "favorite-repos" }
  )
);
