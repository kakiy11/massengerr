import styles from './Page1.module.css';

function Page1() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.webname}>MESSENGER.WEB</h1>
                <p className={styles.subtitle}>Connect with friends and the world around you</p>
            </div>
            
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <input 
                        className={styles.inputField} 
                        type="email" 
                        placeholder=" "
                        required
                    />
                    <label className={styles.inputLabel}>Email Address</label>
                </div> 
                <div className={styles.inputGroup}>
                    <input 
                        className={styles.inputField} 
                        type="password" 
                        placeholder=""
                        required
                    />
                    <label className={styles.inputLabel}>Password</label>
                </div>
                
                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.loginBtn}>
                        <span>LOG IN</span>
                    </button>
                    <button type="button" className={styles.signBtn}>
                        <span>SIGN UP</span>
                    </button>
                </div>
                
                <div className={styles.divider}>
                    <span>or</span>
                </div>
                
                <button type="button" className={styles.guestBtn}>
                    Continue as Guest
                </button>
            </form>
            
            <div className={styles.footer}>
                <a href="#" className={styles.forgotLink}>Forgot password?</a>
            </div>
        
        </div>    
    );
}

export default Page1;