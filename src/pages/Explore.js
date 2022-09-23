import { useState, useEffect } from 'react';
import ConfessionService from '../services/ConfessionService';
import ConfessionList from '../components/ConfessionList.js';

export default function Explore() {
  const [confessionObj, setconfessionObj] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await ConfessionService.fetchConfessions(1, 'Any');
      setconfessionObj(response);
      // console.log(response);
    }
    fetchData();

    console.log('mounted');

    /* async function fetchSingleData() {
      const response = await ConfessionService.fetchSingleConfession('61d32a2bdb65bf303e1dbe78');
      setconfessionList(response);
      console.log(response);
    }
    fetchSingleData(); */

  }, []);

    return (
      <div className="explore-page" >
        <div>
          <a href="/submit" className="button-styled submit-stories-btn">Submit Your Stories</a>
        </div>

        {confessionObj.confessionList ? <ConfessionList confessionArray={confessionObj.confessionList} /> : ''}
      </div>
    );
}