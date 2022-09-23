// import { useState, useEffect } from 'react';
import ConfessionTile from "./ConfessionTile";

export default function ConfessionList(props) {
    return (
      <div className="confession-list">
        {
          props.confessionArray.map(item =>
            <div className="grid-item"><ConfessionTile key={item._id} confession={item} showCommentBox="false" redirectOnClick="true"/></div>
          )
        }
      </div>
    );
}