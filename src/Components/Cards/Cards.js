import React from "react";
import CountUp from "react-countup";
import style from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...........";
  }

  return (
    <React.Fragment>
      <div className="row mt-4 justify-content-center">
        <div className="col-sm-3">
          <div className={cx("card", style.infected)}>
            <div className="card-body">
              <h5 className="card-title">Infected</h5>
              <h5 className="card-title">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </h5>
              <h5 className="card-title">
                {new Date(lastUpdate).toDateString()}
              </h5>
              <h5 className="card-title">
                Number of active cases from Covid-19
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className={cx("card", style.recovered)}>
            <div className="card-body">
              <h5 className="card-title">Revovered</h5>
              <h5 className="card-title">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                ></CountUp>
              </h5>
              <h5 className="card-title">
                {new Date(lastUpdate).toDateString()}
              </h5>
              <h5 className="card-title">
                Number of Revovered cases from Covid-19
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className={cx("card", style.deaths)}>
            <div className="card-body">
              <h5 className="card-title">Total Deaths</h5>
              <h5 className="card-title">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                ></CountUp>
              </h5>
              <h5 className="card-title">
                {new Date(lastUpdate).toDateString()}
              </h5>
              <h5 className="card-title">
                Number of deaths cases from Covid-19
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
