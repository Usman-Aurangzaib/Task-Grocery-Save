import { ACTIONS } from './types';
import { initialState } from './initialState';

export const groceryReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case ACTIONS.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };

    case ACTIONS.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };

    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        currentList: {
          ...state.currentList,
          items: [...state.currentList.items, action.payload]
        }
      };

    case ACTIONS.SAVE_LIST:
      const updatedCategories = state.categories.map(category => 
        category._id === state.selectedCategory
          ? {
              ...category,
              items: [...category.items, action.payload]
            }
          : category
      );

      return {
        ...state,
        categories: updatedCategories,
        currentList: {
          title: '',
          items: []
        }
      };

    case ACTIONS.DELETE_ITEM:
      const categoryIndex = state.categories.findIndex(
        cat => cat._id === action.payload.categoryId
      );
      
      if (categoryIndex === -1) return state;

      const updatedCategory = {
        ...state.categories[categoryIndex],
        items: state.categories[categoryIndex].items.filter(
          item => item._id !== action.payload.itemId
        )
      };

      const newCategories = [...state.categories];
      newCategories[categoryIndex] = updatedCategory;

      return {
        ...state,
        categories: newCategories
      };
      
      case ACTIONS.DELETE_CATEGORY:
        return {
          ...state,
          categories: state.categories.filter(
            category => category._id !== action.payload
          )
        };

    case ACTIONS.TOGGLE_ITEM_COMPLETION:
      const { categoryId, listId, itemId } = action.payload;
      return {
        ...state,
        categories: state.categories.map(category => 
          category._id === categoryId
            ? {
                ...category,
                items: category.items.map(list =>
                  list._id === listId
                    ? {
                        ...list,
                        items: list.items.map(item =>
                          item._id === itemId
                            ? { ...item, completed: !item.completed }
                            : item
                        )
                      }
                    : list
                )
              }
            : category
        )
      };

    case ACTIONS.CLEAR_CURRENT_LIST:
      return {
        ...state,
        currentList: {
          title: '',
          items: []
        }
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};