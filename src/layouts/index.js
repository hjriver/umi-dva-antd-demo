import React from 'react';
import styles from './index.css';
import Header from './Header';
import withRouter from 'umi/withRouter';
function Layout({ children, location }) {
  console.log(location)
  if (location.pathname === '/login') {
    return (<div className={styles.normal}>{children}</div>)
  }
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Layout);
