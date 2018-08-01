import React from 'react';
import { getUserInfoSuccess } from "./actions";
import {isFetched, isFetching, data} from './reducer'

describe("Экшен getUserInfoSuccess", () => {

  const success = {
    type: getUserInfoSuccess.toString()
  };

  const payload = [
    {
      data: { login: "test1", id: 1 },
      data: { login: "test2", id: 2 }
    }
  ];

  it("Изменяeт флаг isFetching", () => {
    const next = isFetching({login: {isFetched: true}});
    expect(next).toEqual(false);
  });
  it("Изменяeт флаг isFetched", () => {
    const next = isFetched(false, success);
    expect(next).toEqual(true);
  });
  it("Наполняет данными ids", () => {
    const next = data([], {
      type: getUserInfoSuccess.toString(),
      payload: payload
    });
    expect(next).toEqual(payload.data);
  });

});