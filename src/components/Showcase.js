import ConfessionTile from "../components/ConfessionTile";
import { useState, useEffect } from 'react';
import ConfessionService from '../services/ConfessionService';

export default function Showcase() {
    const [confessions, setConfessions] = useState([]);
  
    useEffect(() => {
        setConfessions(confessions => []);
        async function fetchSingleData(id) {
            const response = await ConfessionService.fetchSingleConfession(id);
            setConfessions(confessions => [...confessions, response]);
        }
        fetchSingleData('634350c677661676e1d7990b');
        fetchSingleData('634350ef77661676e1d7990d');
        fetchSingleData('6343510177661676e1d7990f');
    }, []);
  
      return (
        <div className="confession-showcase">
          {
            confessions.map(item =>
                <div className="grid-item" key={item._id}><ConfessionTile confession={item} showCommentBox="false" redirectOnClick="true" showReactButton="false" /></div>
            )
          }
        </div>
      );
}