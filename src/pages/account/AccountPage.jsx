import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/layout/Layout';
import styles from './Account.module.css';
import { useFavorites } from '../../context/FavoritesContext';

// Иконки из lucide-react
import {
  Camera,
  Edit3,
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  Plus,
  Trash2,
  Download,
  Plane,
  Building2,
  CheckCircle2,
  X,
  FileText,
  Heart,
  ExternalLink
} from 'lucide-react';

// Изображения и логотипы
import defaultCoverImg from '../../assets/images/account/cover.png';
import monkeyAvatarImg from '../../assets/images/account/monkey-1.png';
import visaIcon from '../../assets/icons/visa.svg';
import mastercardIcon from '../../assets/icons/mastercard.svg';
import emiratesLogo from '../../assets/images/flights/emirates.png';
import qatarLogo from '../../assets/images/flights/qatar.png';
import hotelImg1 from '../../assets/images/hotels/hotel1.png';
import hotelImg2 from '../../assets/images/hotels/hotel2.png';

export default function AccountPage({ defaultTab }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { favorites, totalFavoritesCount, removeFavoriteFlight, removeFavoriteHotel } = useFavorites();

  // Активная вкладка: 'account' | 'history' | 'payment' | 'favourites'
  const [activeTab, setActiveTab] = useState(() => {
    if (defaultTab) return defaultTab;
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab === 'favourites' || tab === 'favorites') return 'favourites';
    if (tab === 'history') return 'history';
    if (tab === 'payment') return 'payment';
    return 'account';
  });

  // Подвкладка избранного: 'all' | 'flights' | 'stays'
  const [favFilter, setFavFilter] = useState('all');

  // Подвкладка истории: 'flights' | 'stays'
  const [historyType, setHistoryType] = useState('flights');

  // Sync tab with URL search parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab === 'favourites' || tab === 'favorites') {
      setActiveTab('favourites');
    } else if (tab === 'history') {
      setActiveTab('history');
    } else if (tab === 'payment') {
      setActiveTab('payment');
    } else if (tab === 'account') {
      setActiveTab('account');
    }
  }, [location.search]);

  // Состояние профиля
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('globeCurrentUser') || localStorage.getItem('globeUser');
      if (saved) {
        const u = JSON.parse(saved);
        return {
          name: u.name || `${u.firstName || 'Cozy'} ${u.lastName || 'Bit'}`.trim() || 'Cozy Bit',
          email: u.email || 'cozybit@gmail.com',
          password: '••••••••••••',
          phone: u.phone || '+1 000-000-0000',
          address: u.address || 'St 32 main downtown, Los Angeles, California, USA',
          dob: u.dob || '1992-01-01'
        };
      }
    } catch {}
    return {
      name: 'Cozy Bit',
      email: 'cozybit@gmail.com',
      password: '••••••••••••',
      phone: '+1 000-000-0000',
      address: 'St 32 main downtown, Los Angeles, California, USA',
      dob: '1992-01-01'
    };
  });

  // Обложка и аватар
  const [coverUrl, setCoverUrl] = useState(defaultCoverImg);
  const [avatarUrl, setAvatarUrl] = useState(() => {
    try {
      const saved = localStorage.getItem('globeCurrentUser');
      if (saved) {
        const u = JSON.parse(saved);
        if (u.avatar && !u.avatar.includes('photo-1535713875002')) return u.avatar;
      }
    } catch {}
    return monkeyAvatarImg;
  });

  // Синхронизация аватара при загрузке (замена старого плейсхолдера на monkey-1.png)
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('globeCurrentUser');
      if (saved) {
        const u = JSON.parse(saved);
        if (!u.avatar || u.avatar.includes('photo-1535713875002')) {
          u.avatar = monkeyAvatarImg;
          localStorage.setItem('globeCurrentUser', JSON.stringify(u));
          window.dispatchEvent(new Event('authChange'));
        }
      }
    } catch {}
  }, []);

  // Список платежных карт
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'visa',
      brand: 'Visa',
      last4: '4321',
      holder: 'COZY BIT',
      exp: '02/27'
    },
    {
      id: 2,
      type: 'mastercard',
      brand: 'Mastercard',
      last4: '8839',
      holder: 'COZY BIT',
      exp: '11/26'
    }
  ]);

  // Модальные окна
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [editModalField, setEditModalField] = useState(null); // { key, label, value, type }
  const [modalFieldValue, setModalFieldValue] = useState('');

  // Форма добавления карты
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    holderName: '',
    expDate: '',
    cvv: ''
  });

  // Toast уведомления
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Референсы для скрытых инпутов загрузки фото
  const coverInputRef = useRef(null);
  const avatarInputRef = useRef(null);

  const handleCoverUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverUrl(url);
      triggerToast('Обложка профиля успешно обновлена!');
    }
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
      try {
        const saved = localStorage.getItem('globeCurrentUser');
        const u = saved ? JSON.parse(saved) : {};
        u.avatar = url;
        localStorage.setItem('globeCurrentUser', JSON.stringify(u));
        window.dispatchEvent(new Event('authChange'));
      } catch {}
      triggerToast('Фотография профиля успешно обновлена!');
    }
  };

  // Открытие модалки редактирования поля профиля
  const openEditModal = (key, label, value, type = 'text') => {
    setEditModalField({ key, label, value, type });
    setModalFieldValue(key === 'password' ? '' : value);
  };

  const handleSaveField = (e) => {
    e.preventDefault();
    if (!editModalField) return;

    if (editModalField.key === 'password') {
      if (modalFieldValue.length < 6) {
        alert('Пароль должен содержать минимум 6 символов');
        return;
      }
      setProfile((prev) => ({ ...prev, password: '••••••••••••' }));
    } else {
      const updated = { ...profile, [editModalField.key]: modalFieldValue };
      setProfile(updated);
      try {
        localStorage.setItem('globeCurrentUser', JSON.stringify(updated));
        localStorage.setItem('globeUser', JSON.stringify(updated));
        window.dispatchEvent(new Event('authChange'));
      } catch {}
    }

    setEditModalField(null);
    triggerToast(`${editModalField.label} успешно сохранено!`);
  };

  // Добавление новой карты
  const handleAddCardSubmit = (e) => {
    e.preventDefault();
    if (!newCard.cardNumber || !newCard.holderName || !newCard.expDate) {
      alert('Пожалуйста, заполните все обязательные поля карты.');
      return;
    }

    const cleanNum = newCard.cardNumber.replace(/\s+/g, '');
    const last4 = cleanNum.slice(-4) || '1234';
    const isMastercard = cleanNum.startsWith('5');
    const brand = isMastercard ? 'Mastercard' : 'Visa';
    const type = isMastercard ? 'mastercard' : 'visa';

    const cardObj = {
      id: Date.now(),
      type,
      brand,
      last4,
      holder: newCard.holderName.toUpperCase(),
      exp: newCard.expDate
    };

    setCards((prev) => [...prev, cardObj]);
    setIsAddCardOpen(false);
    setNewCard({ cardNumber: '', holderName: '', expDate: '', cvv: '' });
    triggerToast('Банковская карта успешно привязана!');
  };

  // Удаление карты
  const handleDeleteCard = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
    triggerToast('Карта удалена из аккаунта.');
  };

  // Имитация скачивания билета или счета
  const handleDownload = (name) => {
    triggerToast(`Загрузка билета "${name}" началась...`);
  };

  return (
    <Layout>
      {/* Скрытые инпуты для загрузки файлов */}
      <input
        type="file"
        ref={coverInputRef}
        className={styles.fileInputHidden}
        accept="image/*"
        onChange={handleCoverUpload}
      />
      <input
        type="file"
        ref={avatarInputRef}
        className={styles.fileInputHidden}
        accept="image/*"
        onChange={handleAvatarUpload}
      />

      <div className={styles.accountContainer}>
        {/* ==================================================================
            1. Шапка Профиля (Обложка + Аватар + Имя)
            ================================================================== */}
        <div className={styles.profileHeaderCard}>
          <div className={styles.coverBox}>
            <img
              src={coverUrl}
              alt="Profile Cover"
              className={styles.coverImage}
            />
            <div className={styles.coverOverlay} />
            <button
              type="button"
              className={styles.uploadCoverBtn}
              onClick={() => coverInputRef.current?.click()}
              title="Загрузить новую обложку"
            >
              <Camera size={16} />
              <span>Upload new cover</span>
            </button>
          </div>

          {/* Центрированный аватар */}
          <div className={styles.avatarSection}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarCircle}>
                <img
                  src={avatarUrl}
                  alt={profile.name}
                  className={styles.avatarImg}
                />
              </div>
              <button
                type="button"
                className={styles.avatarEditBtn}
                onClick={() => avatarInputRef.current?.click()}
                title="Изменить фото"
              >
                <Edit3 size={16} />
              </button>
            </div>
            <h1 className={styles.profileName}>{profile.name}</h1>
            <p className={styles.profileEmail}>{profile.email}</p>
          </div>
        </div>

        {/* ==================================================================
            2. Главная панель вкладок (Tabs Bar)
            ================================================================== */}
        <div className={styles.mainTabsBar}>
          {[
            { id: 'account', label: 'Account', icon: User },
            { id: 'history', label: 'History & Bookings', icon: Calendar },
            { id: 'payment', label: 'Payment Methods', icon: CreditCard },
            { id: 'favourites', label: 'Favourites', icon: Heart, badge: totalFavoritesCount },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tabItem} ${
                  isActive ? styles.tabItemActive : ''
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  const search = new URLSearchParams(location.search);
                  search.set('tab', tab.id);
                  navigate(`?${search.toString()}`, { replace: true });
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="accountMainActiveTab"
                    className={styles.activeTabIndicator}
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <Icon size={18} className={tab.id === 'favourites' && totalFavoritesCount > 0 ? 'text-[#FF8682] fill-[#FF8682]' : ''} />
                <span>{tab.label}</span>
                {tab.badge > 0 && (
                  <span className="ml-1 px-2 py-0.5 rounded-full text-[11px] font-black bg-[#FF8682] text-white shadow-xs">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ==================================================================
            3. Контент вкладки: "Account" (Персональные данные)
            ================================================================== */}
        {activeTab === 'account' && (
          <div className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <User size={22} color="#00845B" />
                <span>Account Information</span>
              </h2>
            </div>

            <div className={styles.fieldsList}>
              {/* Поле: Имя */}
              <div className={styles.fieldRow}>
                <div className={styles.fieldMeta}>
                  <span className={styles.fieldLabel}>Name</span>
                  <span className={styles.fieldValue}>{profile.name}</span>
                </div>
                <button
                  type="button"
                  className={styles.changeBtn}
                  onClick={() => openEditModal('name', 'Name', profile.name)}
                >
                  <Edit3 size={14} />
                  <span>Change</span>
                </button>
              </div>

              {/* Поле: Email */}
              <div className={styles.fieldRow}>
                <div className={styles.fieldMeta}>
                  <span className={styles.fieldLabel}>Email</span>
                  <span className={styles.fieldValue}>{profile.email}</span>
                </div>
                <button
                  type="button"
                  className={styles.changeBtn}
                  onClick={() =>
                    openEditModal('email', 'Email Address', profile.email, 'email')
                  }
                >
                  <Edit3 size={14} />
                  <span>Change</span>
                </button>
              </div>

              {/* Поле: Пароль */}
              <div className={styles.fieldRow}>
                <div className={styles.fieldMeta}>
                  <span className={styles.fieldLabel}>Password</span>
                  <span className={styles.fieldValue}>{profile.password}</span>
                </div>
                <button
                  type="button"
                  className={styles.changeBtn}
                  onClick={() =>
                    openEditModal('password', 'New Password', '', 'password')
                  }
                >
                  <Lock size={14} />
                  <span>Change</span>
                </button>
              </div>

              {/* Поле: Телефон */}
              <div className={styles.fieldRow}>
                <div className={styles.fieldMeta}>
                  <span className={styles.fieldLabel}>Phone Number</span>
                  <span className={styles.fieldValue}>{profile.phone}</span>
                </div>
                <button
                  type="button"
                  className={styles.changeBtn}
                  onClick={() =>
                    openEditModal('phone', 'Phone Number', profile.phone, 'tel')
                  }
                >
                  <Phone size={14} />
                  <span>Change</span>
                </button>
              </div>

              {/* Поле: Адрес */}
              <div className={styles.fieldRow}>
                <div className={styles.fieldMeta}>
                  <span className={styles.fieldLabel}>Address</span>
                  <span className={styles.fieldValue}>{profile.address}</span>
                </div>
                <button
                  type="button"
                  className={styles.changeBtn}
                  onClick={() =>
                    openEditModal('address', 'Residential Address', profile.address)
                  }
                >
                  <MapPin size={14} />
                  <span>Change</span>
                </button>
              </div>

              {/* Поле: Дата рождения */}
              <div className={styles.fieldRow}>
                <div className={styles.fieldMeta}>
                  <span className={styles.fieldLabel}>Date of Birth</span>
                  <span className={styles.fieldValue}>{profile.dob}</span>
                </div>
                <button
                  type="button"
                  className={styles.changeBtn}
                  onClick={() =>
                    openEditModal('dob', 'Date of Birth', profile.dob, 'date')
                  }
                >
                  <Calendar size={14} />
                  <span>Change</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            4. Контент вкладки: "History & Bookings"
            ================================================================== */}
        {activeTab === 'history' && (
          <div className={styles.contentSection}>
            <div className={styles.subTabsRow}>
              <div className={styles.subTabsPills}>
                <button
                  type="button"
                  className={`${styles.subTabBtn} ${
                    historyType === 'flights' ? styles.subTabBtnActive : ''
                  }`}
                  onClick={() => setHistoryType('flights')}
                >
                  {historyType === 'flights' && (
                    <motion.div
                      layoutId="accountHistorySubTab"
                      className={styles.subTabIndicator}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <Plane size={15} />
                  <span>Flights (2)</span>
                </button>
                <button
                  type="button"
                  className={`${styles.subTabBtn} ${
                    historyType === 'stays' ? styles.subTabBtnActive : ''
                  }`}
                  onClick={() => setHistoryType('stays')}
                >
                  {historyType === 'stays' && (
                    <motion.div
                      layoutId="accountHistorySubTab"
                      className={styles.subTabIndicator}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <Building2 size={15} />
                  <span>Stays (2)</span>
                </button>
              </div>
              <span className={styles.filterBadge}>Showing recent bookings</span>
            </div>

            {/* Вкладка авиаперелетов */}
            {historyType === 'flights' && (
              <div>
                {/* Билет 1: Emirates */}
                <div className={styles.bookingCard}>
                  <div className={styles.bookingCardHeader}>
                    <div className={styles.airlineInfo}>
                      <div className={styles.airlineLogoBox}>
                        <img
                          src={emiratesLogo}
                          alt="Emirates"
                          className={styles.airlineLogo}
                        />
                      </div>
                      <div>
                        <h3 className={styles.airlineTitle}>Emirates Airlines</h3>
                        <p className={styles.flightNumber}>Flight EK-264 • Boeing 777</p>
                      </div>
                    </div>
                    <div className={styles.priceTag}>$104</div>
                  </div>

                  {/* Маршрут */}
                  <div className={styles.flightRouteRow}>
                    <div>
                      <div className={styles.routeCity}>12:00 pm</div>
                      <div className={styles.routeSub}>Newark (EWR)</div>
                    </div>

                    <div className={styles.routeMiddle}>
                      <span className={styles.durationText}>2h 28m</span>
                      <div className={styles.timelineLine}>
                        <Plane size={14} className={styles.planeIconOnLine} />
                      </div>
                      <span className={styles.nonStopText}>Non-stop</span>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div className={styles.routeCity}>02:28 pm</div>
                      <div className={styles.routeSub}>Nashville (BNA)</div>
                    </div>
                  </div>

                  {/* Мета-данные билета */}
                  <div className={styles.ticketMetaGrid}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Date</span>
                      <span className={styles.metaValue}>12-08-2024</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Flight Time</span>
                      <span className={styles.metaValue}>12:00</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Gate</span>
                      <span className={styles.metaValue}>A12</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Seat</span>
                      <span className={styles.metaValue}>12B</span>
                    </div>
                  </div>

                  <div className={styles.bookingActions}>
                    <button
                      type="button"
                      className={styles.viewDetailsBtn}
                      onClick={() => triggerToast('Бронь #EK-264 подтверждена.')}
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      className={styles.downloadTicketBtn}
                      onClick={() => handleDownload('Emirates_EK264_Ticket.pdf')}
                    >
                      <Download size={15} />
                      <span>Download Ticket</span>
                    </button>
                  </div>
                </div>

                {/* Билет 2: Qatar Airways */}
                <div className={styles.bookingCard}>
                  <div className={styles.bookingCardHeader}>
                    <div className={styles.airlineInfo}>
                      <div className={styles.airlineLogoBox}>
                        <img
                          src={qatarLogo}
                          alt="Qatar Airways"
                          className={styles.airlineLogo}
                        />
                      </div>
                      <div>
                        <h3 className={styles.airlineTitle}>Qatar Airways</h3>
                        <p className={styles.flightNumber}>Flight QR-701 • Airbus A350</p>
                      </div>
                    </div>
                    <div className={styles.priceTag}>$890</div>
                  </div>

                  {/* Маршрут */}
                  <div className={styles.flightRouteRow}>
                    <div>
                      <div className={styles.routeCity}>08:30 pm</div>
                      <div className={styles.routeSub}>New York (JFK)</div>
                    </div>

                    <div className={styles.routeMiddle}>
                      <span className={styles.durationText}>12h 15m</span>
                      <div className={styles.timelineLine}>
                        <Plane size={14} className={styles.planeIconOnLine} />
                      </div>
                      <span className={styles.nonStopText}>Non-stop</span>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div className={styles.routeCity}>04:45 pm</div>
                      <div className={styles.routeSub}>Doha (DOH)</div>
                    </div>
                  </div>

                  {/* Мета-данные билета */}
                  <div className={styles.ticketMetaGrid}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Date</span>
                      <span className={styles.metaValue}>20-09-2024</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Flight Time</span>
                      <span className={styles.metaValue}>20:30</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Gate</span>
                      <span className={styles.metaValue}>C24</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Seat</span>
                      <span className={styles.metaValue}>04A (First)</span>
                    </div>
                  </div>

                  <div className={styles.bookingActions}>
                    <button
                      type="button"
                      className={styles.viewDetailsBtn}
                      onClick={() => triggerToast('Бронь #QR-701 подтверждена.')}
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      className={styles.downloadTicketBtn}
                      onClick={() => handleDownload('Qatar_QR701_Ticket.pdf')}
                    >
                      <Download size={15} />
                      <span>Download Ticket</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Вкладка броней отелей */}
            {historyType === 'stays' && (
              <div>
                {/* Отель 1 */}
                <div className={styles.bookingCard}>
                  <div className={styles.hotelCardRow}>
                    <div className={styles.hotelImgBox}>
                      <img
                        src={hotelImg1}
                        alt="CVK Park Bosphorus"
                        className={styles.hotelImg}
                      />
                    </div>
                    <div className={styles.hotelDetails}>
                      <h3 className={styles.hotelName}>
                        CVK Park Bosphorus Hotel Istanbul
                      </h3>
                      <p className={styles.hotelAddress}>
                        Gümüssuyu Mah. Inönü Cad. No:8, Istanbul, Turkey
                      </p>
                      <div className={styles.hotelDateTag}>
                        Check-In: Thu, Dec 8 • Check-Out: Sun, Dec 11 (3 Nights)
                      </div>
                    </div>
                    <div className={styles.priceTag}>$720</div>
                  </div>

                  <div className={styles.ticketMetaGrid}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Room Type</span>
                      <span className={styles.metaValue}>Superior King Room</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Guests</span>
                      <span className={styles.metaValue}>2 Adults</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Status</span>
                      <span className={styles.metaValue} style={{ color: '#00845B' }}>
                        Confirmed
                      </span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Booking ID</span>
                      <span className={styles.metaValue}>#GLB-88319</span>
                    </div>
                  </div>

                  <div className={styles.bookingActions}>
                    <button
                      type="button"
                      className={styles.viewDetailsBtn}
                      onClick={() => triggerToast('Бронь #GLB-88319 активна.')}
                    >
                      View Booking
                    </button>
                    <button
                      type="button"
                      className={styles.downloadTicketBtn}
                      onClick={() => handleDownload('Invoice_CVK_Istanbul.pdf')}
                    >
                      <FileText size={15} />
                      <span>Download Invoice</span>
                    </button>
                  </div>
                </div>

                {/* Отель 2 */}
                <div className={styles.bookingCard}>
                  <div className={styles.hotelCardRow}>
                    <div className={styles.hotelImgBox}>
                      <img
                        src={hotelImg2}
                        alt="Grand Hyatt Dubai"
                        className={styles.hotelImg}
                      />
                    </div>
                    <div className={styles.hotelDetails}>
                      <h3 className={styles.hotelName}>Grand Hyatt Dubai</h3>
                      <p className={styles.hotelAddress}>
                        Riyadh Street, Sheikh Rashid Road, Dubai, UAE
                      </p>
                      <div className={styles.hotelDateTag}>
                        Check-In: Mon, Jan 15 • Check-Out: Fri, Jan 19 (4 Nights)
                      </div>
                    </div>
                    <div className={styles.priceTag}>$1,520</div>
                  </div>

                  <div className={styles.ticketMetaGrid}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Room Type</span>
                      <span className={styles.metaValue}>Deluxe Ocean Suite</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Guests</span>
                      <span className={styles.metaValue}>2 Adults, 1 Child</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Status</span>
                      <span className={styles.metaValue} style={{ color: '#00845B' }}>
                        Confirmed
                      </span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Booking ID</span>
                      <span className={styles.metaValue}>#GLB-94022</span>
                    </div>
                  </div>

                  <div className={styles.bookingActions}>
                    <button
                      type="button"
                      className={styles.viewDetailsBtn}
                      onClick={() => triggerToast('Бронь #GLB-94022 активна.')}
                    >
                      View Booking
                    </button>
                    <button
                      type="button"
                      className={styles.downloadTicketBtn}
                      onClick={() => handleDownload('Invoice_GrandHyatt_Dubai.pdf')}
                    >
                      <FileText size={15} />
                      <span>Download Invoice</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================
            5. Контент вкладки: "Payment Methods"
            ================================================================== */}
        {activeTab === 'payment' && (
          <div className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <CreditCard size={22} color="#00845B" />
                <span>Saved Payment Methods</span>
              </h2>
            </div>

            <div className={styles.cardsGrid}>
              {/* Существующие карты */}
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className={`${styles.paymentCard} ${
                    card.type === 'visa'
                      ? styles.paymentCardVisa
                      : styles.paymentCardMastercard
                  }`}
                >
                  <div className={styles.cardTopRow}>
                    <img
                      src={card.type === 'visa' ? visaIcon : mastercardIcon}
                      alt={card.brand}
                      className={styles.cardBrandIcon}
                    />
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.85 }}
                      className={styles.cardDeleteBtn}
                      onClick={() => handleDeleteCard(card.id)}
                      title="Удалить карту"
                    >
                      <Trash2 size={14} />
                    </motion.button>
                  </div>

                  <div className={styles.cardNumberText}>
                    •••• •••• •••• {card.last4}
                  </div>

                  <div className={styles.cardBottomRow}>
                    <div className={styles.cardHolderName}>{card.holder}</div>
                    <div className={styles.cardExpDate}>{card.exp}</div>
                  </div>
                </motion.div>
              ))}

              {/* Кнопка добавления новой карты */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={styles.addCardBox}
                onClick={() => setIsAddCardOpen(true)}
              >
                <div className={styles.addCardIconCircle}>
                  <Plus size={24} />
                </div>
                <span className={styles.addCardText}>Add a new card</span>
              </motion.div>
            </div>
          </div>
        )}

        {/* ==================================================================
            5.5. Контент вкладки: "Favourites" (Избранное)
            ================================================================== */}
        {activeTab === 'favourites' && (
          <div className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <Heart size={22} color="#FF8682" className="fill-[#FF8682]" />
                <span>Favourites ({totalFavoritesCount})</span>
              </h2>

              <div className="flex items-center gap-2">
                {[
                  { key: 'all', label: `All (${totalFavoritesCount})` },
                  { key: 'flights', label: `Flights (${favorites.flights.length})` },
                  { key: 'stays', label: `Stays (${favorites.hotels.length})` },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setFavFilter(item.key)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      favFilter === item.key
                        ? 'bg-[#8DD3BB] text-[#112211] shadow-xs'
                        : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Empty State */}
            {totalFavoritesCount === 0 ||
            (favFilter === 'flights' && favorites.flights.length === 0) ||
            (favFilter === 'stays' && favorites.hotels.length === 0) ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/30 text-[#FF8682] flex items-center justify-center mx-auto mb-4">
                  <Heart size={30} className="fill-[#FF8682]/20" />
                </div>
                <h3 className="text-xl font-bold text-[#112211] dark:text-white mb-2">
                  No saved items in this category
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                  Save flights and hotels by clicking the heart icon on any card to track deals and access them anytime.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => navigate('/flights/search')}
                    className="inline-flex items-center gap-2 bg-[#8DD3BB] hover:bg-[#7BC6AE] text-[#112211] font-bold px-5 py-2.5 rounded-xl text-sm transition-all cursor-pointer"
                  >
                    <Plane size={16} /> Explore Flights
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/hotels')}
                    className="inline-flex items-center gap-2 bg-[#112211] text-white hover:bg-black font-bold px-5 py-2.5 rounded-xl text-sm transition-all cursor-pointer dark:bg-white/15 dark:hover:bg-white/25"
                  >
                    <Building2 size={16} /> Find Stays
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Flights List */}
                {(favFilter === 'all' || favFilter === 'flights') && favorites.flights.length > 0 && (
                  <div>
                    <h3 className="text-base font-extrabold text-[#112211] dark:text-white flex items-center gap-2 mb-4">
                      <Plane size={18} className="text-[#00845B] dark:text-[#8DD3BB]" />
                      <span>Saved Flights ({favorites.flights.length})</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favorites.flights.map((flight) => (
                        <div
                          key={flight.id}
                          onClick={() => navigate('/flights/detail')}
                          className="bg-white dark:bg-[#1A2621] border border-gray-100 dark:border-[#2D3D36] hover:border-[#8DD3BB]/60 dark:hover:border-[#8DD3BB]/50 rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all hover:shadow-md cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-3 pb-4 border-b border-gray-100 dark:border-[#24362D]">
                            <div className="flex items-center gap-3">
                              {flight.logo && (
                                <div className="w-12 h-10 rounded-xl bg-gray-50 dark:bg-[#141F1A] border border-gray-100 dark:border-[#2D3D36] p-1 flex items-center justify-center shrink-0">
                                  <img src={flight.logo} alt={flight.airline} className="max-h-full max-w-full object-contain" />
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-sm text-[#112211] dark:text-white">
                                  {flight.airline} {flight.flightNumber ? `• ${flight.flightNumber}` : ''}
                                </h4>
                                <span className="text-xs text-gray-400 dark:text-gray-500">
                                  {flight.rating ? `★ ${flight.rating}` : ''} {flight.ratingText ? `(${flight.ratingText})` : ''}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFavoriteFlight(flight.id);
                              }}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors cursor-pointer"
                              title="Remove from favourites"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="py-4 flex items-center justify-between text-sm">
                            <div>
                              <span className="font-extrabold text-[#112211] dark:text-white block">{flight.departTime || '12:00 pm'}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{flight.departCity || 'Newark (EWR)'}</span>
                            </div>
                            <div className="text-center text-xs text-gray-400">
                              <span>{flight.duration || '2h 28m'}</span>
                              <div className="w-16 h-0.5 bg-gray-200 dark:bg-gray-700 my-1 mx-auto" />
                              <span>{flight.stops || 'Non stop'}</span>
                            </div>
                            <div className="text-right">
                              <span className="font-extrabold text-[#112211] dark:text-white block">{flight.arriveTime || '02:28 pm'}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{flight.arriveCity || 'Nashville (BNA)'}</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-gray-100 dark:border-[#24362D] flex items-center justify-between">
                            <div>
                              <span className="text-[11px] text-gray-400 block">Price</span>
                              <span className="text-lg font-black text-[#FF8682]">${flight.price}</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate('/flights/detail');
                              }}
                              className="bg-[#8DD3BB] hover:bg-[#7BC6AE] text-[#112211] font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                            >
                              View Deals
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stays List */}
                {(favFilter === 'all' || favFilter === 'stays') && favorites.hotels.length > 0 && (
                  <div>
                    <h3 className="text-base font-extrabold text-[#112211] dark:text-white flex items-center gap-2 mb-4">
                      <Building2 size={18} className="text-[#00845B] dark:text-[#8DD3BB]" />
                      <span>Saved Stays & Hotels ({favorites.hotels.length})</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favorites.hotels.map((hotel) => (
                        <div
                          key={hotel.id}
                          className="bg-white dark:bg-[#1A2621] border border-gray-100 dark:border-[#2D3D36] rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
                        >
                          <div className="flex items-start justify-between gap-3 pb-4 border-b border-gray-100 dark:border-[#24362D]">
                            <div className="flex items-center gap-3">
                              {hotel.image && (
                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-sm text-[#112211] dark:text-white line-clamp-1">
                                  {hotel.name}
                                </h4>
                                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                                  <MapPin size={12} className="text-[#00845B] dark:text-[#8DD3BB]" /> {hotel.location}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFavoriteHotel(hotel.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors cursor-pointer"
                              title="Remove from favourites"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="py-4 flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1.5">
                              <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-[#8DD3BB]/20 text-[#00845B] dark:text-[#8DD3BB]">
                                ★ {hotel.rating || '4.5'}
                              </span>
                              <span className="text-xs text-gray-400">
                                ({hotel.reviews || 120} reviews)
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs text-gray-400 block">per night</span>
                              <span className="text-lg font-black text-[#FF8682]">${hotel.price}</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-gray-100 dark:border-[#24362D] flex items-center justify-end">
                            <button
                              type="button"
                              onClick={() => navigate('/hotels')}
                              className="bg-[#8DD3BB] hover:bg-[#7BC6AE] text-[#112211] font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                            >
                              View Hotel
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ==================================================================
          6. Модальное окно редактирования поля аккаунта
          ================================================================== */}
      <AnimatePresence>
        {editModalField && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.modalBackdrop}
            onClick={() => setEditModalField(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              className={styles.modalWindow}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                  Edit {editModalField.label}
                </h3>
                <button
                  type="button"
                  className={styles.modalCloseBtn}
                  onClick={() => setEditModalField(null)}
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSaveField}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    {editModalField.label}
                  </label>
                  <input
                    type={editModalField.type}
                    inputMode={editModalField.key === 'phone' || editModalField.type === 'tel' ? 'tel' : undefined}
                    className={styles.formInput}
                    value={modalFieldValue}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (editModalField.key === 'phone' || editModalField.type === 'tel') {
                        val = val.replace(/[^\d+()\s-]/g, '');
                      }
                      setModalFieldValue(val);
                    }}
                    placeholder={`Enter ${editModalField.label.toLowerCase()}`}
                    required
                    autoFocus
                  />
                </div>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.cancelBtn}
                    onClick={() => setEditModalField(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    style={{ flex: 1, marginTop: 0 }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================================================================
          7. Модальное окно добавления карты
          ================================================================== */}
      <AnimatePresence>
        {isAddCardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.modalBackdrop}
            onClick={() => setIsAddCardOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              className={styles.modalWindow}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Add a New Card</h3>
                <button
                  type="button"
                  className={styles.modalCloseBtn}
                  onClick={() => setIsAddCardOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddCardSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Card Number</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="4123 4567 8901 2345"
                    maxLength={19}
                    value={newCard.cardNumber}
                    onChange={(e) => {
                      // Форматирование с пробелами по 4 цифры
                      const val = e.target.value.replace(/\D/g, '').slice(0, 16);
                      const formatted = val.replace(/(\d{4})(?=\d)/g, '$1 ');
                      setNewCard((prev) => ({ ...prev, cardNumber: formatted }));
                    }}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Cardholder Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="COZY BIT"
                    value={newCard.holderName}
                    onChange={(e) =>
                      setNewCard((prev) => ({
                        ...prev,
                        holderName: e.target.value
                      }))
                    }
                    required
                  />
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Exp. Date</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      placeholder="MM/YY"
                      maxLength={5}
                      value={newCard.expDate}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '').slice(0, 4);
                        if (val.length >= 3) {
                          val = val.slice(0, 2) + '/' + val.slice(2);
                        }
                        setNewCard((prev) => ({ ...prev, expDate: val }));
                      }}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>CVV / CVC</label>
                    <input
                      type="password"
                      className={styles.formInput}
                      placeholder="•••"
                      maxLength={4}
                      value={newCard.cvv}
                      onChange={(e) =>
                        setNewCard((prev) => ({
                          ...prev,
                          cvv: e.target.value.replace(/\D/g, '')
                        }))
                      }
                      required
                    />
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.cancelBtn}
                    onClick={() => setIsAddCardOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    style={{ flex: 1, marginTop: 0 }}
                  >
                    Add Card
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================================================================
          8. Плавающее Toast Уведомление
          ================================================================== */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 500, damping: 32 }}
            className={styles.toastSuccess}
          >
            <CheckCircle2 size={18} color="#8DD3BB" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
