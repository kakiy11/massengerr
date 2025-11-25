import React, { useState } from 'react';
import styles from "../pages/Page2.module.css";
import './rightchat.css';
const RightBlock: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);
    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setMessages(prevMessages => [...prevMessages, message]);
            setMessage('');
        }
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
            <div className={styles.messages}>
                <div className='user-bar'>
                    <div className='avatar-friend'></div>
                    <div className='name-friend'>my friend</div>
                </div>
                <div className={styles.messengercontainer}>
                    <div className={styles.masseges_wraper}>
                    {messages.map((msg, index) => (
                        <div key={index} className={styles.message}>
                            {msg}

                        </div>
                    ))}
                    </div>
                </div>
                    <div className="user_ids"></div>
                <div className={styles.inputarea}>
                    <input
                        type="text"
                        className={styles.messageinput}
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button 
                        className={styles.sendbutton}
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>

            </div>
    
    );
};

export default RightBlock;