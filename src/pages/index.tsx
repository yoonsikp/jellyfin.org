import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import FreeSoftware from '../components/FreeSoftware';
import BuiltByVolunteers from '../components/BuiltByVolunteers';
import MoreClients from '../components/MoreClients';
import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout
      title={`The Free Software Media System`}
      description='The volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached.'
    >
      <Hero title='The Free Software Media System' large>
        <p className='hero__text'>
          Jellyfin is the volunteer-built media solution that puts <em>you</em> in control of your media. Stream to any
          device from your own server, with no strings attached. Your media, your server, your way.
        </p>
        <a href='https://demo.jellyfin.org/stable' className='button button--secondary button--outline'>
          See it in Action
        </a>
        <a href='/downloads' className='button button button--primary margin-horiz--md'>
          Download Now
        </a>
        <button className='button button--secondary button--outline scroll'>Learn More</button>
      </Hero>
      <main>
        <HomepageFeatures />
        <FreeSoftware />
        <BuiltByVolunteers />
        <MoreClients />
        <CallToAction />
      </main>
    </Layout>
  );
}
