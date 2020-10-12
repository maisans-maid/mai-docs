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
    imageUrl: 'img/mai 4.png',
    description: (
      <>
       Having problem managing your server?<br/>Well, we have Moderation commands to make up for that. Kick, Ban, Mute, all in 1 click!
      </>
    ),
  },
{
    title: 'Anime',
    imageUrl: 'img/mai 6.png',
    description: (
      <>
       With many anime sources to pull from, search your favorite anime, manga characters, and even memes about them!
      </>
    ),
  },
 {
    title: 'Action',
    imageUrl: 'img/mai 5.png',
    description: (
      <>
Supplied with action commands such as pat, kiss, and hug to spice up the chat environment more!
      </>
    ),
  },
  {
    title: 'Setup',
    imageUrl: 'img/mai 1.png',
    description: (
      <>
        With wide variety of features, such as anime announcements, it has been made easy to integrate these in your server with my setup commands!
      </>
    ),
  },
  {
    title: 'Core',
    imageUrl: 'img/mai 7.png',
    description: (
      <>
      Core commands are also here, which are filled with commands about Mai! Dont forget to spam that one LMAO.
      </>
    ),
  },
{
    title: 'Many More',
    imageUrl: 'img/mai 2.png',
    description: (
      <>
     Wow! I am running out of slot and there are still many commands left to discuss. Anyway, just go to my repo to view all commands!
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
      description="Mai is a Bot Based Around Anime">
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
              href={'https://support.mai-san.ml/'}>
              Join Support Server
            </Link>
            <Link
              className={clsx(
                'button button--inlineline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/Getting Started/welcome')}>
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
