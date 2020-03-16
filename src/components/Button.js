import React from 'react';

export const Button = () => {
  return (
    <div>
      <div className='button-container' id='end'>
        <p>How you can help!</p>
        <a className='button' href='https://www.tamdistrict.org/domain/36'>
          Email the board members
        </a>
        <a
          className='button'
          href='https://www.change.org/p/tamalpais-union-high-school-district-save-the-team-program?recruiter=51241231&utm_source=share_petition&utm_medium=facebook&utm_campaign=psf_combo_share_abi&utm_term=share_petition&recruited_by_id=8f29d1a0-a493-0130-e82a-3c764e049c4f&utm_content=fht-20697771-en-us%3Av2&fbclid=IwAR1Gq-RD7PGj8HsyXZOKvzih-fVG_Csgz5TY-rFxHQs35GdnIOYPfkLLA3o'
        >
          Sign the Petition
        </a>
        <div className='footer'>Made by Mark Wild, Team 06-07</div>
      </div>
    </div>
  );
};
