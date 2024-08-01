import React from 'react';
import { Sidebar } from './Sidebar';
import { AppRoutes } from '../routes/AppRoutes';

export const MainContent = () => {

    return (
      <>   
        <Sidebar  />      
        <AppRoutes />   
      </>
    );
  }
