import React, { createContext, useContext, useReducer, useCallback } from 'react';
import axios from 'axios';
import { groceryReducer } from './reducer';
import { initialState } from './initialState';
import { ACTIONS } from './types';





const StoreContext = createContext();

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groceryReducer, initialState);

  const setLoading = useCallback((loading) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: loading });
  }, []);

  const setError = useCallback((error) => {
    dispatch({ type: ACTIONS.SET_ERROR, payload: error });
  }, []);

  // API Actions
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/data/categories');
      dispatch({ type: ACTIONS.SET_CATEGORIES, payload: response.data });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError]);

  const addCategory = useCallback(async (name) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/data/categories', { name });
      dispatch({ type: ACTIONS.ADD_CATEGORY, payload: response.data });
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError]);

  const selectCategory = useCallback((categoryId) => {
    dispatch({ type: ACTIONS.SELECT_CATEGORY, payload: categoryId });
  }, []);

  const addItem = useCallback((item) => {
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: { name: item, completed: false }
    });
  }, []);

  const saveList = useCallback(async (title) => {
    if (!state.selectedCategory || !title || state.currentList.items.length === 0) {
      setError('Invalid list data');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/data/categories/${state.selectedCategory}/items`,
        {
          name: title,
          items: state.currentList.items
        }
      );
      
      dispatch({
        type: ACTIONS.SAVE_LIST,
        payload: {
          name: title,
          items: state.currentList.items
        }
      });

      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [state.selectedCategory, state.currentList, setLoading, setError]);

  const deleteItem = useCallback(async (categoryId, itemId) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/data/categories/${categoryId}/items/${itemId}`);
      dispatch({
        type: ACTIONS.DELETE_ITEM,
        payload: { categoryId, itemId }
      });
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError]);

  const toggleItemCompletion = useCallback((categoryId, listId, itemId) => {
    dispatch({
      type: ACTIONS.TOGGLE_ITEM_COMPLETION,
      payload: { categoryId, listId, itemId }
    });
  }, []);

  const clearCurrentList = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_CURRENT_LIST });
  }, []);


  const deleteCategory = useCallback(async (categoryId) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/data/categories/${categoryId}`);
      dispatch({ type: ACTIONS.DELETE_CATEGORY, payload: categoryId });
    } catch (error) {
      console.error('Error deleting category:', error.response ? error.response.data : error.message);
      setError(error.message);
      throw error;
    }finally {
      setLoading(false);
    }
}, [setLoading, setError]);


  const value = {
    state,
    fetchCategories,
    addCategory,
    selectCategory,
    addItem,
    saveList,
    deleteItem,
    toggleItemCompletion,
    deleteCategory,
    clearCurrentList
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};