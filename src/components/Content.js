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
          <img className='img1' src={Image} alt='' />
          <span className='img-info'>
            Team 06-07 looking out at the beautiful landscape of the Lost Coast,
            California.
          </span>
        </div>
        <p>
          Due to the parcel tax not passing in this past election, cuts need to
          be made in our district. Team is on the list this Tuesday night of
          programs to be “suspended” for next school year. We know we cannot
          come back from a suspension, so this will end the program. We need to
          have our district understand what team really is and why this
          transformative education program needs to stay! We fundraise for
          everything and we are committed to helping the mental health and
          growth of teens in our community. Before cutting our program, we hope
          others can see it and feel the benefits that this program has on all
          our lives. It makes this district stand out for its commitment to
          helping youth who are not feeling success or belonging in a
          traditional setting! If Team has helped changed your life or the life
          of someone you know and you want it to stay in our district, please
          add your name to this list!
        </p>
      </div>
    </div>
  );
};
