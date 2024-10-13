import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilteredCampers = createAsyncThunk(
  'campers/fetchFiltered',
  async filters => {
    const { data } = await axios.get(
      'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers',
      { params: filters },
    );
    return data;
  },
);
