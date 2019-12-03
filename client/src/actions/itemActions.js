import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  )
};

export const getItem = (id) => dispatch => {
  dispatch(setItemsLoading());

  return axios.get(`/api/items/${ id }`).then(res => { return res.data})
};

export const addItem = (item) => dispatch =>  {
  axios.post('/api/items/', item)
    .then(res =>
      dispatch({
        type: ADD_ITEMS,
        payload: res.data
      })
    ).catch((err) => console.log(err))
};

export const deleteItem = (id) => dispatch => {
  axios.delete(`/api/items/${ id }`).then(res =>
    dispatch({
      type: DELETE_ITEMS,
      payload: id
    })
  )
};

export const updateItem = (id, item) => dispatch => {
  return axios.put(`/api/items/${ id }`, item).then(res => { return res.data})
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
};