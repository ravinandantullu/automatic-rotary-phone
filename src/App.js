import React from 'react';
import styles from './app.module.css';
import { Cards, Charts, CountryPicker } from './components'
import { fetchData } from './api';
import coronoImage from './images/image_banner.jpg';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const { confirmed, recovered, deaths, lastUpdate } = await fetchData();
    this.setState({ data: { confirmed, recovered, deaths, lastUpdate } });
  }

  handleCountryChange = async (country) => {
    const { confirmed, recovered, deaths, lastUpdate } = await fetchData(country);
    this.setState({ data: { confirmed, recovered, deaths, lastUpdate }, country: country });

    console.log( confirmed, recovered, deaths, lastUpdate);
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;

/* <img className={styles.image} src={coronoImage} alt='COVID-19'/> */
