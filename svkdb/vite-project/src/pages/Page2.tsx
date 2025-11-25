import styles from "./Page2.module.css";

import ChatList from "../component/chatlist";
import RightBlock from "../component/rightchat"
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

				{/* <div className={styles.barnames}>
					<div className={styles.user1}>
						<div className={styles.avatar1}>Й</div>
						<div className={styles.avatarnames1}>йoy</div>
						<div className={styles.lasttextuser1}>last text</div>
					</div>
					<div className={styles.user2}>
						<div className={styles.avatar2}>Й</div>
						<div className={styles.avatarnames2}>йoy</div>
						<div className={styles.lasttextuser2}>last text</div>
					</div>
					<div className={styles.user3}>
						<div className={styles.avatar3}>Й</div>
						<div className={styles.avatarnames3}>йoy</div>
						<div className={styles.lasttextuser3}>last text</div>
					</div>
					<div className={styles.user4}>
						<div className={styles.avatar4}></div>
						<div className={styles.avatarnames4}>йoy</div>
						<div className={styles.lasttextuser4}>last text</div>
					</div>
				</div>
			</div>
			<div className={styles.chatarea}>
				<div className={styles.chatheader}>
					<div className={styles.chatavatar}>Й</div>
					<div className={styles.chatname}>йoy</div>
				</div> */}
				<ChatList />
					</div>
					{/* <div className="chatsinputs">
						<div className={styles.messages}>

					<div className={styles.inputarea}>
						<input
							type="text"
							className={styles.messageinput}
							placeholder="Type a message..."
							/>
						<button className={styles.sendbutton}>Send</button>
						</div>
					</div>
				</div> */}
				<RightBlock />
						</div>
	);
}

export default MainPage;
