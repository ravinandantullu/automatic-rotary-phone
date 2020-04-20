import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountriesData } from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountriesData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountriesData(await fetchCountriesData());
        };
        fetchAPI();
    }, [setCountriesData]);

    console.log(countries);

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;