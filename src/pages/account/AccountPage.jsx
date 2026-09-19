import React from 'react';
import Layout from '../../components/layout/Layout';
import styles from './Account.module.css';
import { User, BookOpen, ExternalLink, Code2 } from 'lucide-react';

export default function AccountPage() {
  return (
    <Layout showNewsletter={true}>
      <div className={styles.accountWrapper}>
        
        {/* Чистая заглушка для Толибова */}
        <div className={styles.placeholderCard}>
          <div className={styles.iconCircle}>
            <User style={{ width: 32, height: 32 }} />
          </div>

          <span className={styles.badge}>
            Зона ответственности: Толибов (React + Чистый CSS Modules)
          </span>

          <h1 className={styles.title}>
            Личный кабинет (Account Flow)
          </h1>

          <p className={styles.description}>
            Этот модуль предназначен для верстки <strong>Толибова</strong>. 
            Здесь используется <strong>чистый CSS</strong> без использования Tailwind. 
            Файл стилей: <span className={styles.codeBadge}>src/pages/account/Account.module.css</span>, 
            файл компонента: <span className={styles.codeBadge}>src/pages/account/AccountPage.jsx</span>.
          </p>

          <div className={styles.taskBox}>
            <div className={styles.taskTitle}>
              <Code2 style={{ width: 16, height: 16, color: '#8DD3BB' }} />
              Что нужно сверстать по макету:
            </div>
            <ul className={styles.taskList}>
              <li>Обложка профиля (ассет: <code>src/assets/images/account/cover.png</code>)</li>
              <li>Аватар и имя пользователя (ассет: <code>src/assets/images/account/avatar.png</code>)</li>
              <li>Вкладки: Account (Профиль), History & Bookings (История), Payment Methods (Карты)</li>
              <li>Сетка полей профиля с возможностью редактирования</li>
              <li>Карточки купленных билетов и броней отелей</li>
            </ul>
          </div>

          <div className={styles.actions}>
            <a
              href="/team-guide.html"
              target="_blank"
              rel="noreferrer"
              className={styles.guideBtn}
            >
              <BookOpen style={{ width: 16, height: 16 }} /> Открыть Team Guide
            </a>
            <a
              href="https://www.figma.com/design/f4QpbjGItycxGXdI2XfYbU/Golobe--Copy-?node-id=9-569"
              target="_blank"
              rel="noreferrer"
              className={styles.figmaBtn}
            >
              <ExternalLink style={{ width: 16, height: 16 }} /> Макет в Figma
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
