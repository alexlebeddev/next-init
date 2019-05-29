import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import '../locales';
import Store from '../src/store';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    ctx.store.dispatch({type: 'FOO', payload: 'foo'});

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};

  }

  createUrl = router => {
    const { pathname, asPath, query } = router;
    return {
      get query() {
        return query;
      },
      get pathname() {
        return pathname;
      },
      get asPath() {
        return asPath;
      },
      back: () => {
        router.back();
      },
      push: (url, as) => router.push(url, as),
      pushTo: (href, as) => {
        const pushRoute = as ? href : null;
        const pushUrl = as || href;

        return router.push(pushRoute, pushUrl);
      },
      replace: (url, as) => router.replace(url, as),
      replaceTo: (href, as) => {
        const replaceRoute = as ? href : null;
        const replaceUrl = as || href;

        return router.replace(replaceRoute, replaceUrl);
      }
    };
  };

  render() {
    const { Component, pageProps, router, store } = this.props;
    const url = this.createUrl(router);
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} url={url}  />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(Store)(MyApp);
