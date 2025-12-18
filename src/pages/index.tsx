import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import YouTubeVideo from '../components/YouTubeVideo';
import styles from './index.module.css';

// Feature data
const features = [
  {
    title: '📋 Full Formio JSON Support',
    description: 'Complete support for Form.io JSON schema with all standard components and advanced features.',
    icon: '📋',
  },
  {
    title: '🌍 Built-in i18n',
    description: 'Comprehensive internationalization support with multiple languages out of the box.',
    icon: '🌍',
  },
  {
    title: '↔️ RTL Support',
    description: 'First-class right-to-left language support for Arabic, Hebrew, and other RTL languages.',
    icon: '↔️',
  },
  {
    title: '📘 TypeScript',
    description: 'Written in TypeScript with full type definitions for better developer experience.',
    icon: '📘',
  },
  {
    title: '🎨 Customizable',
    description: 'Highly customizable theming system to match your app\'s design perfectly.',
    icon: '🎨',
  },
  {
    title: '⚡ Performance',
    description: 'Optimized for performance with efficient rendering and minimal re-renders.',
    icon: '⚡',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const bannerUrl = useBaseUrl('/img/formio-react-native-banner.png');
  
  return (
    <header 
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `url(${bannerUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        position: 'relative',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: '1.5rem', 
            marginBottom: '2rem',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            fontWeight: 'bold',
          }}
        >
          {siteConfig.tagline}
        </motion.p>
        
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            className="button button--secondary button--lg"
            to="/docs/next/getting-started/installation"
          >
            Get Started 🚀
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://github.com/yassine-mrad/formio-react-native"
            style={{ marginLeft: '1rem' }}
          >
            View on GitHub
          </Link>
        </motion.div>
      </div>
    </header>
  );
}

function Feature({ title, description, icon, index }) {
  return (
    <motion.div
      className={clsx('col col--4', styles.feature)}
      variants={itemVariants}
      initial="hidden"
       style={{marginBottom:'20px'}}
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="feature-card">
        <div className="feature-card__icon">{icon}</div>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </motion.div>
  );
}

function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2>See It In Action</h2>
            <p>Watch how easy it is to build forms with React Native Formio</p>
          </div>
          <YouTubeVideo />
        </motion.div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Quick Start</h2>
          <p className={styles.sectionSubtitle}>Get up and running in minutes</p>
          
          <div className={styles.codeExample}>
            <pre>
              <code>{`// Install the package
npm install formio-react-native

// Import and use
import { FormioForm } from 'formio-react-native';

function MyForm() {
  const formSchema = {
    components: [
      {
        type: 'textfield',
        key: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        validate: { required: true }
      }
    ]
  };

  return (
    <FormioForm
      form={formSchema}
      onSubmit={(data) => console.log(data)}
    />
  );
}`}</code>
            </pre>
          </div>
          
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/next/getting-started/installation"
            >
              Learn More →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <motion.div
          className="stats-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="stat-card" variants={itemVariants}>
            <span className="stat-card__value">100%</span>
            <span className="stat-card__label">TypeScript</span>
          </motion.div>
          
          <motion.div className="stat-card" variants={itemVariants}>
            <span className="stat-card__value">20+</span>
            <span className="stat-card__label">Components</span>
          </motion.div>
          
          <motion.div className="stat-card" variants={itemVariants}>
            <span className="stat-card__value">3+</span>
            <span className="stat-card__label">Languages</span>
          </motion.div>
          
          <motion.div className="stat-card" variants={itemVariants}>
            <span className="stat-card__value">MIT</span>
            <span className="stat-card__label">License</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className={styles.support}>
      <div className="container">
        <motion.div
          className={styles.supportCard}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Support This Project</h2>
          <p>
            If you find this library helpful, consider supporting its development.
            Your support helps maintain and improve the library for everyone.
          </p>
          <a
            href="[DONATION_URL_PLACEHOLDER]"
            className="donation-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support this project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Powerful Form.io renderer for React Native with full TypeScript support, i18n, and RTL"
    >
      <HomepageHeader />
      
      <main>
        {/* Features Section */}
        <section className={styles.features}>
          <div className="container">
            <motion.div
              className="row"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {features.map((props, idx) => (
                <Feature key={idx} index={idx} {...props} />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Video Section */}
        <VideoSection />

        {/* Quick Start Section */}
        <QuickStartSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Support Section */}
        <SupportSection />
      </main>
    </Layout>
  );
}
