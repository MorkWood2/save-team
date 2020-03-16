import React from 'react';
import Image from '../images/DSC_4693.jpg';

export const Content = () => {
  return (
    <div>
      <div className='content-container'>
        <h3>
          This phrase has been uttered infinite times from alumni and current
          students in the past 30 years!
        </h3>
        <p>
          Team is a free and public one year experiential education program in
          the Tamalpais Union High School district that combines academics,
          internships, community service, ropes courses, hiking, and
          backpacking. It is a lottery system that serves students that truly
          need a place to belong in our district! Whether students are coming
          from trauma, failing out of school, or feeling the immense mental
          pressures of large high school life, they are able to grow and find a
          home in Team. Within a few months, we see shifts in intrinsic
          motivation, feelings of belonging, and growth mindsets towards
          education. <b>Team is a family and it does change lives.</b>{' '}
        </p>
        <div className='img-container'>
          <img
            className='img1'
            src={Image}
            alt='students backing in wilderness looking out at beach'
          />
          <h4 className='img-info'>
            Team 06-07 looking out at the beautiful landscape of the Lost Coast,
            California. Photo: Skyler Greene
          </h4>
        </div>
        <h2>The state of Team.</h2>
        <p>
          Due to the parcel tax not passing in this past election, Team is
          “suspended” for the next school year.{' '}
          <span>
            <b>
              {' '}
              The final decision to cut team forever is likely not to be made
              until May, so we don’t have much time.
            </b>{' '}
          </span>{' '}
          We need to have our district understand what team really is and why
          this transformative education program needs to stay!{' '}
          <span>
            <b>
              {' '}
              Our only hope at this moment is to write to the board of trustees
              a heartfelt email and describe what team did for you and what it
              means for you now.{' '}
            </b>
          </span>
          Please share this website and reach out to all team alumni, parents of
          teamies, as well as friends of the program and help spread the word.
          Let's not deny current and future students the same opportunities
          previous students have benefitted from for decades and keep alive this
          special program that makes the Tam High School district so great!
        </p>
      </div>
    </div>
  );
};
