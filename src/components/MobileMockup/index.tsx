import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface MobileMockupProps {
  children?: React.ReactNode;
  placeholder?: string;
  title?: string;
}

export default function MobileMockup({ children, placeholder, title = 'Form Preview' }: MobileMockupProps): JSX.Element {
  return (
    <div className={styles.mockupContainer}>
      <div className={styles.phoneFrame}>
        <div className={styles.notch}></div>
        <div className={styles.screen}>
          <div className={styles.statusBar}>
            <span>9:41</span>
            <div className={styles.statusIcons}>
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          <div className={styles.appHeader}>
            <span className={styles.backButton}>←</span>
            <span className={styles.headerTitle}>{title}</span>
            <span className={styles.menuButton}>⋮</span>
          </div>
          <div className={styles.content}>
            {children ? (
              children
            ) : (
              <div className={styles.placeholderContainer}>
                 <div className={styles.placeholderIcon}>📱</div>
                 <p>{placeholder || 'Screenshot Placeholder'}</p>
                 {placeholder && <code className={styles.placeholderCode}>{placeholder}</code>}
              </div>
            )}
          </div>
          <div className={styles.homeIndicator}></div>
        </div>
        <div className={styles.sideBtn + ' ' + styles.volumeUp}></div>
        <div className={styles.sideBtn + ' ' + styles.volumeDown}></div>
        <div className={styles.sideBtn + ' ' + styles.power}></div>
      </div>
    </div>
  );
}
