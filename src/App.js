import React from 'react';
import styles from './app.module.css';
import { Cards, Charts, CountryPicker } from './components'
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const { confirmed, recovered, deaths, lastUpdate } = await fetchData();
    this.setState({data: { confirmed, recovered, deaths, lastUpdate }});
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <Charts />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
