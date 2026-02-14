import FeedPost from "./FeedPost";
import users from "../store/users";

export default function Feed() {
  return (
    <div className="my-3 flex flex-col items-center gap-10">
      {users.map((user) => (
        <FeedPost
          userProfile={user.profilePicture}
          postOwner={user.username}
          userPost={user.posts[0]}
          key={user.id}
        />
      ))}
    </div>
  );
}
