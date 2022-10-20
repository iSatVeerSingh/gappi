import { AppProps } from 'next/app';
import React, { PropsWithChildren } from 'react';
import '../styles/globals.css';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    Layout?: React.ComponentType;
  };
};

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const App = ({ Component, pageProps }: ComponentWithPageLayout) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
