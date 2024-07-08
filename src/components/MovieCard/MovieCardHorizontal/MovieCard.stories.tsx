import type { Meta, StoryObj } from "@storybook/react";

import MovieCardHorizontal from ".";

const meta: Meta<typeof MovieCardHorizontal> = {
  component: MovieCardHorizontal,
  title: "Movie Card Horizontal",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MovieCardHorizontal>;

export const MovieCardHorizontalPrimary: Story = {
  args: {
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
    genre_ids: [16, 10751, 12, 35],
    id: 1022789,
    original_language: "en",
    original_title: "Inside Out 2",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    popularity: 4051.852,
    poster_path: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    release_date: "2024-06-11",
    title: "Inside Out 2",
    video: false,
    vote_average: 7.705,
    vote_count: 1319,
  },
};

export const MovieCardHorizontalWithControl: Story = {
  args: {
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
    genre_ids: [16, 10751, 12, 35],
    id: 1022789,
    original_language: "en",
    original_title: "Inside Out 2",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    popularity: 4051.852,
    poster_path: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    release_date: "2024-06-11",
    title: "Inside Out 2",
    video: false,
    vote_average: 7.705,
    vote_count: 1319,
  },
};
