import React from 'react';
import { Content } from '../Content';
import { Header } from '../Header';
import { Quote } from '../Quote';
import { Button } from '../Button';

export const Home = () => {
  return (
    <div>
      <Header />
      <Quote />
      <Content />
      <Button />
    </div>
  );
};
