import React from 'react';
import Typed from 'react-typed';
import { styles } from '../styles';

const Content = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingY} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`} style={{ fontSize: '3rem' }}>
            Hi, I'm <span style={{ color: '#83dcc6' }}>Kalash</span>
          </h1>

          <Typed
            className={`${styles.heroSubText} mt-2 text-white-100 text_shadows`}
            strings={[
              'I develop <span style="color: #83dcc6">Web applications</span>,',
              'user <span style="color: #83dcc6">interfaces</span>,',
              'and <span style="color: #83dcc6">3D visuals</span>.'
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
            style={{ fontSize: '2rem' }}
            parseHTML={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
