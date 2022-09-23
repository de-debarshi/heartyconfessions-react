import { useState } from 'react';
import ConfessionService from '../services/ConfessionService';
import Comment from './Comment';

export default function ConfessionTile(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      const newComment = {
        _id: props.confession._id,
        username: 'Guest',
        comment: inputs.newcomment
      }
      let response = await ConfessionService.addComment(newComment);
      console.log(response);
    }

    const tileClicked = () => {
      if(props.redirectOnClick === 'true' ) {
        window.location.href = `/confession/${props.confession._id}`;
      }
    }

    return (
      <div className="confession-tile tile-shadow" onClick={tileClicked}>
        <div className="confession-tile__age-gender">
            <div>Age: {props.confession.age}</div>
            <div>Gender: {props.confession.sex}</div>
        </div>
        <div className="confession-tile__content">
            {props.confession.content}
        </div>
        <div className="confession-tile__reaction">
            <div>
                <span className="confession-tile__like-icon">
                </span>
                {props.confession.reactionCount} reacts
            </div>
            <div>{props.confession.commentCount} comments</div>
        </div>
        {
          props.showCommentBox==='true' && (<div className="confession-tile__comment-section">
            <form onSubmit={handleSubmit}>
              <textarea className="confession-tile__new-comment-textarea" name="newcomment" value={inputs.newcomment} onChange={handleChange} />
              <button type="submit" className="button-styled">Submit Comment</button>
            </form>
            {
              props.confession.comments &&
                props.confession.comments.map(item =>
                <Comment key={item._id} comment={item}/>
              )
            }
          </div>)
        }
        {/* <div v-if="enableShare">
            <button className="btn btn-primary" type="button" @click="shareConfession">Share</button>
        </div> */}
        {/* <div id="share-confession-modal" className="modal" v-if="showShareModal">
            <!-- Modal content -->
            <div className="modal-content">
                <div className="modal-header">
                <span className="close" @click="showShareModal = false">&times;</span>
                <h2></h2>
                </div>
                <div className="modal-body">
                    <!-- The text field -->
                    <input type="text" :value="shareableContent + shareableLink" id="dataToCopy">

                    <!-- The button used to copy the text -->
                    <button className="btn btn-primary" type="button" @click="copyToClipboard">Copy text</button>
                    <!-- {shareableContent} 
                    <a :href="shareableLink">Link</a> -->
                </div>
                <div className="modal-footer">
                <h3></h3>
                </div>
            </div>
        </div> */}
    </div>
    );
}