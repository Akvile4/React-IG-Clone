import "../styles/card.scss";
import { ReactComponent as Dots } from "../images/dots.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";


const Card = (props) => {
    const {
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props;


    return (
        <div className="card">
            <header>
                <Dots className="dots" />
            </header>
            <img className="cardImage" src={image} alt="card content" />
            <CardMenu />
            <div className="likedBy">
                <span>
                    Liked by <strong>{likedByText}</strong> and {" "} 
                    <strong>{likedByNumber}</strong>
                </span>
            </div>
            <div className="comments">
                {comments.map(comment => {
                    return (
                        <Comment key={comments.id}
                        accountName={comments.user}
                        comment={comments.text} />
                    )
                })}
            </div>
            <div className="timePosted">{hours} HOURS AGO</div>
            <div className="addComment">
                <div className="commentText">Add a comment...</div>
                <div className="postText">POST</div>
            </div>
        </div>
    )
};

export default Card;