import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import { fetchData } from "./api";
import Covid from "./Assests/Images/Corona.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({ data: fetchdata });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img
          alt="Covid-19"
          className="mx-auto d-block m-5 "
          width="250px"
          src={Covid}
        />
        <Cards data={this.state.data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
