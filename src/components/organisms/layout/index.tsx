import React from 'react';

interface PageLayoutProps {
  Page: React.ComponentType;
}

export const Layout = ({ Page }: PageLayoutProps) => {
  return (
    <div>
      <h1>Navbar Here</h1>
      <Page />
    </div>
  );
};