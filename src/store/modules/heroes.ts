import { ActionContext } from 'vuex';
import {
  ADD_HERO,
  DELETE_HERO,
  GET_HEROES,
  UPDATE_HERO,
} from './mutation-types';
import { HeroesState, RootState } from './types';
import { Hero } from './models';
import { addHero, deleteHero, getHeroes, updateHero } from '../data';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  // namespaced: true,
  state: {
    heroes: [],
  },
  mutations: {
    [ADD_HERO](state: HeroesState, hero: Hero) {
      state.heroes.unshift(hero); // mutate the heroes array
    },
    [UPDATE_HERO](state: HeroesState, hero: Hero) {
      const index = state.heroes.findIndex((h) => h.id === hero.id);
      state.heroes.splice(index, 1, hero);
      state.heroes = [...state.heroes]; // replace heroes
    },
    [GET_HEROES](state: HeroesState, heroes: Hero[]) {
      state.heroes = heroes; // no changes, just get
    },
    [DELETE_HERO](state: HeroesState, hero: Hero) {
      state.heroes = [...state.heroes.filter((p) => p.id !== hero.id)]; // replace heroes
    },
  },
  actions: {
    // actions let us get to ({ state, getters, commit, dispatch }) {
    async getHeroesAction({ commit }: ActionContext<HeroesState, RootState>) {
      try {
        const heroes = await getHeroes();
        commit(GET_HEROES, heroes);
        return heroes;
      } catch (error) {
        return captains.log(error);
      }
    },
    async deleteHeroAction(
      { commit }: ActionContext<HeroesState, RootState>,
      hero: Hero,
    ) {
      try {
        await deleteHero(hero.id);
        commit(DELETE_HERO, hero);
        return null;
      } catch (error) {
        captains.error(error);
      }
    },
    async updateHeroAction(
      { commit }: ActionContext<HeroesState, RootState>,
      hero: Hero,
    ) {
      try {
        const updatedHero = await updateHero(hero);
        commit(UPDATE_HERO, updatedHero);
        return updatedHero;
      } catch (error) {
        captains.error(error);
      }
    },
    async addHeroAction(
      { commit }: ActionContext<HeroesState, RootState>,
      hero: Hero,
    ) {
      try {
        const addedHero = await addHero(hero);
        commit(ADD_HERO, addedHero);
        return addedHero;
      } catch (error) {
        captains.error(error);
      }
    },
  },
  getters: {
    heroes: (state: HeroesState) => state.heroes,
  },
};
