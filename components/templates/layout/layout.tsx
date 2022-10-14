import { Footer, Header } from 'components';
import { Fragment, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <>{children}</>
      <Footer />
    </Fragment>
  );
};

export { Layout };
