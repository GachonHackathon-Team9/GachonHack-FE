import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar />
    <main className={styles.mainContent}>
      {children}
    </main>
  </div>
);

export default Layout;
