import React from 'react';
import styles from './styles.module.css';

const VIDEO_URL = '[YOUTUBE_VIDEO_URL_PLACEHOLDER]';

export default function YouTubeVideo(): JSX.Element {
  // Simple check to avoid broken iframe if URL is still placeholder
  // In a real scenario, you would replace the VIDEO_URL constant with your actual YouTube embed URL
  const isPlaceholder = VIDEO_URL.includes('PLACEHOLDER');

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        {isPlaceholder ? (
          <div className={styles.placeholder}>
            <div className={styles.placeholderContent}>
              <h3>Demo Video</h3>
              <p>Video coming soon</p>
              <code style={{ marginTop: '10px', display: 'block' }}>{VIDEO_URL}</code>
            </div>
          </div>
        ) : (
          <iframe
            className={styles.iframe}
            src={VIDEO_URL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
