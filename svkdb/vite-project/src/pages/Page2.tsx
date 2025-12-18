
import styles from "./Page2.module.css";
import ChatList from "../component/chatlist";
import RightBlock from "../component/rightchat";

function MainPage() {
  return (
    <div className={styles.chatcontainer}>
      <div className={styles.chatlist}>
        <div className={styles.userpanel}>
          <div className={styles.avatar}>ME</div>
          <div className={styles.username}>MEW</div>
        </div>

        <h2 className={styles.chats}>Chats</h2>
        <input
          className={styles.search}
          type="text"
          placeholder="Search..."
        />
        
        <ChatList />
      </div>
      
      <div className={styles.chatarea}>
        <RightBlock />
      </div>
    </div>
  );
}

export default MainPage;