export default function Comment(props) {
    return (
        <div className="confession-tile__comment">
            <div className="confession-tile__comment-details">{props.comment.username} commented on {(props.comment.createdAt)}</div>
            <div className="confession-tile__comment-content">{props.comment.comment}</div>
        </div>
    );
}