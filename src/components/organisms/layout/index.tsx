import React from 'react';

interface PageLayoutProps {
  Page: React.ComponentType;
}

export const Layout = ({ Page }: PageLayoutProps) => {
  return (
    <div>
      <Page />
    </div>
  );
};