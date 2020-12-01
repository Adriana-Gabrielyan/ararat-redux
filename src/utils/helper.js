import React from 'react';
import loadable from '@loadable/component';

export const withParams = (routes) => {
  const LoadingIndicator = loadable(() =>
    import('components/LoadingIndicator'),
  );
  return routes.map((item) => {
    const params = item.params;
    delete item.params;
    return {
      ...item,
      ...params,
      exact: true,
      key: ID(),
      component: loadable(() => import(`../screens/${item.screen}`), {
        fallback: (
          <LoadingIndicator
            loading
            background="rgba(255,255,255,.5)"
            loaderColor="#3498db"
          />
        ),
      }),
    };
  });
};

export const route = (path, screen, params = {}) => ({
  path,
  screen,
  params,
});

export const ID = () => '_' + Math.random().toString(36).substr(2, 36);

export const serialize = (form) => {
  const serialized = {};

  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i];

    if (
      !field.name ||
      field.disabled ||
      field.type === 'file' ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    )
      continue;

    if (field.type === 'select-multiple') {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized[field.name] = field.options[n].value;
      }
    } else if (
      (field.type !== 'checkbox' && field.type !== 'radio') ||
      field.checked
    ) {
      serialized[field.name] = field.value;
    }
  }
  return serialized;
};

export const removeConsole = () => {
  Object.keys(console).forEach((item) => {
    if (typeof console[item] === 'function') {
      console[item] = noop;
    }
  });
};

export const noop = () => {};

export const CART = 'cart';

export const addToCart = (id) => {
  if (localStorage.getItem(CART)) {
    let cart = JSON.parse(localStorage.getItem(CART));
    if (!Object.keys(cart).includes(id)) {
      cart = Object.assign(cart, {[id]: {count: 1}});
    }
    localStorage.setItem(CART, JSON.stringify(cart));
  } else {
    localStorage.setItem(CART, JSON.stringify({[id]: {count: 1}}));
  }
};

export const getItemFromStorage = (key) => {
  let items = localStorage.getItem(CART);
  items = JSON.parse(items);
  return items[key];
};
