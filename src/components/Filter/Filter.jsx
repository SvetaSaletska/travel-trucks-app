import { useDispatch } from 'react-redux';
import {
  setLocation,
  setType,
  setAC,
  setKitchen,
  setBathroom,
  setTV,
} from '../../redux/filters/filtersSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { name, type, checked, value } = event.target;
    const val = type === 'checkbox' ? checked : value;

    switch (name) {
      case 'location':
        dispatch(setLocation(val));
        break;
      case 'type':
        dispatch(setType(val));
        break;
      case 'ac':
        dispatch(setAC(val));
        break;
      case 'kitchen':
        dispatch(setKitchen(val));
        break;
      case 'bathroom':
        dispatch(setBathroom(val));
        break;
      case 'tv':
        dispatch(setTV(val));
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Location:
        <input type="text" name="location" onChange={handleFilterChange} />
      </label>
      <label>
        Тип кузова:
        <select name="type" onChange={handleFilterChange}>
          <option value="">Всі</option>
          <option value="van">Ван</option>
          <option value="truck">Трак</option>
          {/* Додайте інші типи кузова */}
        </select>
      </label>
      <label>
        Наявність кондиціонера:
        <input type="checkbox" name="ac" onChange={handleFilterChange} />
      </label>
      {/* Додайте інші фільтри, якщо потрібно */}
    </div>
  );
};
