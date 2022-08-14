import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "./Feed.css";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import { addPost, getPost } from "../../firebase";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const sendPost = async (e) => {
    e.preventDefault();
    await addPost({
      name: "Umair",
      description: "Test Post",
      message: input,
      photoUrl: "",
    });
    setInput("");
  };
  useEffect(() => {
    const getData = async () => {
      const data = await getPost();
      setPosts(data);
    };
    getData();
  }, []); // add posts to dependecy array to get real time listner to db

  return (
    <div className="feed">
      <div className="feed__inputcontainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70BFF9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, photoUrl, message } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          photourl={photoUrl}
          message={message}
        />
      ))}
    </div>
  );
};

export default Feed;
