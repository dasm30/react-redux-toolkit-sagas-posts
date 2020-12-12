import { createAction } from "@reduxjs/toolkit";

export const getActionCreator = (name) => (action, hasSuccess, hasError) => {
  const act = {
    [action]: createAction(`${name}/${action}`)
  };
  if (hasSuccess)
    act[`${action}Success`] = createAction(`${name}/${action}Success`);
  if (hasError) act[`${action}Error`] = createAction(`${name}/${action}Error`);
  return act;
};

export const getApiActionCreator = (name) => (action) =>
  getActionCreator(name)(action, true, true);
