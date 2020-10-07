import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Moderation',
    imageUrl: 'img/mod.png',
    description: (
      <>
        You can easily moderate your server with the help of Mai
        She has got you covered
      </>
    ),
  },
{
    title: 'Support Sytem',
    imageUrl: 'img/support.png',
    description: (
      <>
        Tamako has a Ticket Support System to help your
	server members directly talk with support team on your server.
	She can even archive those tickets and give you a copy
      </>
    ),
  },
 {
    title: 'Voice',
    imageUrl: 'img/music.png',
    description: (
      <>
        Tamako can play Music and even different sounds from the SoundBoard<br/>
        You can check the list by clicking <a href="/docs/Soundboard">here</a>
      </>
    ),
  },
  {
    title: 'All In One',
    imageUrl: 'img/only.png',
    description: (
      <>
        Tamako is the only bot you will ever need<br/>
        From custom Welcome & Goodbye message to server stats to XP system and much more.
      </>
    ),
  },
  {
    title: 'Sharding',
    imageUrl: 'img/shard.svg',
    description: (
      <>
        Tamako has multiple shards to reduce the response time
        and provide you with the output as soon as possible.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Multipurpose Discord Bot `}
      description="Tamako,the only bot you will ever need.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
          <Link
              className={clsx(
                'button button--inline button--primary button--lg',
                styles.getStarted,
              )}
              href={'https://discord.gg/58D25t3'}>
              Join Support Server
            </Link>
            <Link
              className={clsx(
                'button button--inlineline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/welcome')}>
              Get Started
            </Link>
            
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
