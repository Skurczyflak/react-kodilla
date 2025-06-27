import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          { id: shortid(), isFavorite: false, ...action.payload },
        ],
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { id: shortid(), ...action.payload }],
      };
    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
      };
    case 'UPDATE_SEARCH_STRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//selectors
export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite === true);
export const getSeachString = ({ searchString }) => searchString;
export const getColumnsByList = ({ columns }, id) =>
  columns.filter((column) => column.listId === id);
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
export const getAllLists = ({ lists }) => lists;
export const getAllColumns = ({ columns }) => columns;
// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const updateSearchString = (payload) => ({
  type: 'UPDATE_SEARCH_STRING',
  payload,
});
export const toggleCardFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});
export default store;
