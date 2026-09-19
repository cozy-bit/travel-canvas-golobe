import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import styles from './Account.module.css';
import coverImg from '../../assets/images/account/cover.png';
import avatarImg from '../../assets/images/account/avatar.png';
import { Camera, Sparkles, BookOpen } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <Layout showNewsletter={true}>
      <div className={styles.accountWrapper}>
        
        {/* Информационный баннер для Толибова */}
        <div className={styles.assignmentBanner}>
          <span className={styles.assignmentBadge}>
            Зона ответственности: Толибов (React + Pure CSS Modules)
          </span>
          <h1 className={styles.assignmentTitle}>
            Account Flow (Профиль, бронирования и настройки)
          </h1>
          <p className={styles.assignmentDesc}>
            Привет, Толибов! Эта страница подключена к отдельному CSS-модулю <code>src/pages/account/Account.module.css</code>.
            Ты можешь писать здесь чистый CSS без использования Tailwind. Все стили изолированы и не сломают другие страницы.
          </p>
          <div>
            <a
              href="/team-guide.html"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 700,
                color: '#15803d',
                textDecoration: 'underline'
              }}
            >
              <BookOpen style={{ width: 16, height: 16 }} /> Открыть Team Guide для Толибова
            </a>
          </div>
        </div>

        {/* Обложка и Аватар (Profile Header) */}
        <div className={styles.profileHeader}>
          <div className={styles.coverContainer}>
            <img src={coverImg} alt="Profile Cover" className={styles.coverImage} />
            <button type="button" className={styles.uploadCoverBtn}>
              <Camera style={{ width: 16, height: 16, display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
              Upload new cover
            </button>
          </div>

          <div className={styles.avatarCard}>
            <div className={styles.avatarWrapper}>
              <img src={avatarImg} alt="John Doe" className={styles.avatarImage} />
            </div>
            <h2 className={styles.userName}>John Doe</h2>
            <p className={styles.userEmail}>john.doe@gmail.com</p>
          </div>
        </div>

        {/* Вкладки навигации */}
        <div className={styles.tabsContainer}>
          <button
            type="button"
            className={`${styles.tabButton} ${activeTab === 'account' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('account')}
          >
            Account
          </button>
          <button
            type="button"
            className={`${styles.tabButton} ${activeTab === 'history' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('history')}
          >
            History & Bookings
          </button>
          <button
            type="button"
            className={`${styles.tabButton} ${activeTab === 'payment' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('payment')}
          >
            Payment Methods
          </button>
        </div>

        {/* Контент в зависимости от выбранной вкладки */}
        {activeTab === 'account' && (
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Profile Information</h3>
              <button type="button" className={styles.editButton}>
                Change Password
              </button>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.fieldItem}>
                <span className={styles.fieldLabel}>Name</span>
                <div className={styles.fieldValue}>John Doe</div>
              </div>

              <div className={styles.fieldItem}>
                <span className={styles.fieldLabel}>Email</span>
                <div className={styles.fieldValue}>john.doe@gmail.com</div>
              </div>

              <div className={styles.fieldItem}>
                <span className={styles.fieldLabel}>Password</span>
                <div className={styles.fieldValue}>••••••••••••••••</div>
              </div>

              <div className={styles.fieldItem}>
                <span className={styles.fieldLabel}>Phone Number</span>
                <div className={styles.fieldValue}>+1 000-000-0000</div>
              </div>

              <div className={styles.fieldItem}>
                <span className={styles.fieldLabel}>Address</span>
                <div className={styles.fieldValue}>St 32 main downtown, Los Angeles, California, USA</div>
              </div>

              <div className={styles.fieldItem}>
                <span className={styles.fieldLabel}>Date of Birth</span>
                <div className={styles.fieldValue}>01-01-1992</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>My Flight & Hotel Bookings</h3>
            </div>

            <div className={styles.bookingCard}>
              <div>
                <span className={styles.badgeStatus}>Confirmed</span>
                <h4 style={{ margin: '8px 0 4px', fontWeight: 700 }}>Newark (EWR) → Nashville (BNA)</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>Emirates • Flight EK-264 • Seat 14A</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 18, fontWeight: 800 }}>$104</span>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>12 Dec, 2026</div>
              </div>
            </div>

            <div className={styles.bookingCard}>
              <div>
                <span className={styles.badgeStatus}>Completed</span>
                <h4 style={{ margin: '8px 0 4px', fontWeight: 700 }}>CVK Park Bosphorus Hotel</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>Istanbul, Turkey • 2 Nights • Deluxe Room</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 18, fontWeight: 800 }}>$480</span>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>15-17 Nov, 2026</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payment' && (
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Saved Payment Cards</h3>
              <button type="button" className={styles.editButton}>
                + Add New Card
              </button>
            </div>
            <p style={{ fontSize: 14, color: '#6b7280' }}>
              Visa ending in **** 4321 (Expires 02/27) • Default
            </p>
          </div>
        )}

      </div>
    </Layout>
  );
}
