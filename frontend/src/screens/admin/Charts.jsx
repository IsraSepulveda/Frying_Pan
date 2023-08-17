import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import $ from 'jquery';
import './Charts_Styles.css';

const Charts = () => {
  useEffect(() => {
    //-----------------------Temperature---------------------------
    // Fetch data from JSON api
    $.getJSON('http://172.18.7.23:8000/temperature', function (response) {
      const data = response.data;
      console.log(data);
      const TimeStamp = data.map(function (item) {
        return item[0];
      });
      const temperature = response.data.map(function (item) {
        return item[1];
      });

      console.log(TimeStamp);

      const options = {
        chart: {
          type: 'spline',
        },
        title: {
          text: 'Temperature',
        },
        subtitle: {
          text: 'Data input from JSON API',
        },
        xAxis: {
          type: 'datetime',
          title: {
            text: 'Tiempo',
          },
          categories: data.map(function (item) {
            return item[0];
          }),
        },
        yAxis: {
          title: {
            text: 'Celsius',
          },
        },
        series: [
          {
            name: 'Temperatura',
            data: temperature,
            enablePolling: true,
          },
        ],
      };

      Highcharts.chart('container', options);
    });
  }, []);

  //------------------------Humidity-----------------------------------

  useEffect(() => {
    // Fetch data from JSON api
    $.getJSON('http://172.18.7.23:8000/humidity', function (response) {
      const data = response.data;
      console.log(data);
      const TimeStamp = data.map(function (item) {
        return item[0];
      });
      const humidity = response.data.map(function (item) {
        return item[1];
      });

      console.log(TimeStamp);

      const options = {
        chart: {
          type: 'spline',
        },
        title: {
          text: 'Humidity',
        },
        subtitle: {
          text: 'Data input from JSON API',
        },
        xAxis: {
          type: 'datetime',
          title: {
            text: 'Tiempo',
          },
          categories: data.map(function (item) {
            return item[0];
          }),
        },
        yAxis: {
          title: {
            text: 'Celsius',
          },
        },
        series: [
          {
            name: 'Humidity',
            data: humidity,
            enablePolling: true,
          },
        ],
      };

      Highcharts.chart('container2', options);
    });
  }, []);

  return (
    <div>
      <div id="container"></div>
      <div id='container2'></div>
    </div>
  );
};

export default Charts;
