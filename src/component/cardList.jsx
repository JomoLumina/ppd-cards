import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

const CardList = () => {
  const csvFilePath = '../files/others.csv';
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(csvFilePath);
        const csvString = response.data;
        const rows = csvString.trim().split('\n');
        const csvData = rows.map(row => row.split(',').map(value => value.replace(/"/g, '')));
        setCsvData(csvData);
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    console.log(csvData);
  }, [csvData]);
  // const handleCSV = (data, fileInfo) => {
  //   setCsvData(data); 
  //   console.log(data);
  // }

  return (
    <div>
      {/* <CSVReader file={csvFilePath} onFileLoaded={handleCSV} /> */}
      <div className="card-list">
        {csvData && csvData.map((item, index) => (
          <Card
            key={index}
            name={item[0]} 
            organization={item[1]}
            title={item[2]} 
            sector={item[3]} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
