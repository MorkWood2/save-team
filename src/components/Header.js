import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <div className='header-background'>
        {/* <nav>
          <ul>
            <li>
              <Link to='/photos'>Photos</Link>
            </li>
            <li>
              <Link to='/testimonials'>Testimonials</Link>
            </li>
          </ul>
        </nav> */}

        <p className='header'>Save the Team Program!!!</p>
        <a href='#end' className='header-button'>
          Save Team!
        </a>
      </div>
    </div>
  );
};
