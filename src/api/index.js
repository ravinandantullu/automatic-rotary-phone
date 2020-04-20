import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changebleUrl = url;
    if(country){
        changebleUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changebleUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (e) {
        console.log(e);
    }
}

export const fetchDailyData = async () => {
    try {
        let { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    } catch (e) {
        console.log(e);
    }
}

export const fetchCountriesData = async () => {
    try {
        let { data: { countries } } = await axios.get(`${url}/countries`);

        console.log(countries);
        return countries.map((country)=> country.name);
    } catch (error) {
        console.log(error);
    }
}