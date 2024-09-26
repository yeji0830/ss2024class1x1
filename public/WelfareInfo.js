import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WelfareInfo = () => {
  const [welfareData, setWelfareData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/welfare')
      .then(response => {
        setWelfareData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div>
      <h2>복지 정보</h2>
      <ul>
        {welfareData.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WelfareInfo;
