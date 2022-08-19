import ConfessionTile from "../components/ConfessionTile";
import { useState, useEffect } from 'react';
import ConfessionService from '../services/ConfessionService';
import {
  useParams
} from "react-router-dom";

export default function Confession() {
  const [confession, setConfession] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function fetchSingleData() {
      const response = await ConfessionService.fetchSingleConfession(id);
      setConfession(response);
      // console.log(response);
    }
    fetchSingleData();
    console.log('hooked');
  }, [id]);

    return (
      <div className="confession">
        {
          confession._id ? <ConfessionTile confession={confession}/> : ''
        }
      </div>
    );
}