// import { useState, useEffect } from 'react';
import ConfessionTile from "./ConfessionTile";

export default function ConfessionList(props) {
    return (
      <div className="confession-list" style={{display: 'flex'}}>
        {
          props.confessionArray.map(item =>
            <ConfessionTile key={item._id} confession={item}/>
          )
        }
      </div>
    );
}