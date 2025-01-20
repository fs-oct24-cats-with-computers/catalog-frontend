import { useState, useEffect, FormEvent } from 'react';
import './SubmitForm.scss';
import { City } from '../../types/City';
import { Warehouse } from '../../types/Warehouse';
import { fetchCities, fetchWarehouses } from '../../features/postAddresses';

interface Props {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  openForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubmitForm: React.FC<Props> = ({ openModal, openForm }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [cityName, setCityName] = useState('');
  const [cityRef, setCityRef] = useState<string | null>(null);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [warehousesName, setWarehousesName] = useState('');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal(true);
    openForm(false);
  };

  const cancel = (e: React.MouseEvent) => {
    e.preventDefault();
    openForm(false);
  };

  useEffect(() => {
    fetchCities().then((data) => setCities(data));
  }, []);

  useEffect(() => {
    if (cityRef) {
      fetchWarehouses(cityRef).then((data) => setWarehouses(data));
      console.log(warehouses);
    }
  }, [cityRef]);

  useEffect(() => {
    const city = cities.find(
      (city) => city.Description.toLowerCase() === cityName.toLowerCase(),
    );

    if (city) setCityRef(city.Ref);
    else setCityRef(null);
  }, [cityName]);

  const setRefOfCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);

    if (warehousesName) {
      setWarehousesName('');
    }
  };

  return (
    <form
      className="form"
      onSubmit={submit}
    >
      <ul className="form__list">
        <li className="form__list__item">
          <label>Name: </label>
          <input
            type="text"
            required
          />
        </li>

        <li className="form__list__item">
          <label>Phone: </label>
          <input
            type="tel"
            required
          />
        </li>

        <li className="form__list__item">
          <label>Mail: </label>
          <input
            type="email"
            required
          />
        </li>

        <li className="form__list__item">
          <label>City: </label>
          <input
            type="text"
            list="cities"
            value={cityName}
            onChange={setRefOfCity}
            required
          />
          <datalist id="cities">
            {cities.map((city) => (
              <option
                key={city.Ref}
                value={city.Description}
              />
            ))}
          </datalist>
        </li>

        {cityRef && (
          <li className="form__list__item">
            <label>Address: </label>
            <input
              type="text"
              list="warehouses"
              value={warehousesName}
              onChange={(e) => setWarehousesName(e.target.value)}
              required
            />
            <datalist id="warehouses">
              {warehouses.map((warehouse) => (
                <option
                  key={warehouse.PlaceRef}
                  value={warehouse.Description}
                />
              ))}
            </datalist>
          </li>
        )}
      </ul>

      <div className="form__button-holder">
        <button className="form__button-holder__button-submit">Submit</button>
        <button
          className="form__button-holder__button-cancel"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
