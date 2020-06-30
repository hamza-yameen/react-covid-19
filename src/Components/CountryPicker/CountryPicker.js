import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountry, setFetchCountry] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchCountry(await fetchCountries());
    };
    fetchApi();
  }, [setFetchCountry]);

  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <select
            className="browser-default custom-select"
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option>Global</option>
            {fetchCountry.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CountryPicker;
