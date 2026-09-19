import React from 'react';
import Layout from '../../components/layout/Layout';
import styles from './Account.module.css';

export default function AccountPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Личный кабинет (Account)
        </h1>
        <p className={styles.subtitle}>
          Это страница Толибова
        </p>
      </div>
    </Layout>
  );
}
