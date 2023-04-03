import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Repository } from "../hooks/types";

type favoriteReposState = {
  favoriteRepos: Repository[];
  addFavoriteRepo: (repo: Repository) => void;
  removeFavoriteRepo: (repo: Repository) => void;
};

export const useFavoriteRepos = create(
  persist<favoriteReposState>(
    (set) => ({
      favoriteRepos: [],
      addFavoriteRepo: (repo: Repository) =>
        set((state) => ({
          favoriteRepos: [...state.favoriteRepos, repo],
        })),
      removeFavoriteRepo: (repo: Repository) =>
        set((state) => ({
          favoriteRepos: state.favoriteRepos.filter((rep) => rep !== repo),
        })),
    }),
    { name: "favorite-repos" }
  )
);
