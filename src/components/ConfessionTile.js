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

    return (
      <div className="confession-tile tile-shadow">
        <a href={`/confession/${props.confession._id}`}>Link</a>
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
        <div className="confession-tile__comment-section">
          {
            props.confession.comments &&
              props.confession.comments.map(item =>
              <Comment key={item._id} comment={item}/>
            )
          }
          <form onSubmit={handleSubmit}>
            <textarea name="newcomment" value={inputs.newcomment} onChange={handleChange} />
            <input type="submit" />
          </form>
            {/* <div :key="comments._id" v-for="comments in props.confession.comments">
                <div className="confession-tile__comment">
                    <div className="confession-tile__comment-details">{comments.username} commented on {formatDate(comments.createdAt)}</div>
                    <div className="confession-tile__comment-content">{comments.comment}</div>
                </div>
            </div> */}
            {/* <form @submit="onSubmit">
                <div className="form-group">
                    <label for="username">Username:</label>
                    <input type="text" className="form-control" id="username" name="username" v-model="username" required :disabled="usernameDisable">
                    <button className="btn btn-primary" type="button" @click="usernameDisable=false">Change Username</button>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="comment" placeholder="Type your comment here..." rows="2" v-model="comment" required></textarea>
                </div>
                <div className="">
                <button className="btn btn-primary" type="submit">Comment</button>
                </div>
            </form> */}
        </div>
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