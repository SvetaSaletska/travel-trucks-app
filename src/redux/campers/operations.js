// operations.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async filters => {
    const response = await axios.get(
      'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers',
      {
        params: filters,
      },
    );
    return response.data;
  },
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async id => {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`,
    );
    return response.data;
  },
);
