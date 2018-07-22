import React from 'react';
import { fetchFollowersSuccess } from "./follower-actions";
import { isFetched, isFetching, ids } from "./follower-reducers";


describe("Экшен fetchFollowersSuccess", () => {

  const success = {
    type: fetchFollowersSuccess.toString()
  };

  const payload = [
    {
      data: { login: "test1", id: 1 },
      data: { login: "test2", id: 2 }
    }
  ];

  it("Изменяeт флаг isFetching", () => {
    const next = isFetching({followers: {isFetched: true}});
    expect(next).toEqual(false);
  });
  it("Изменяeт флаг isFetched", () => {
    const next = isFetched(false, success);
    expect(next).toEqual(true);
  });
  it("Наполняет данными ids", () => {
    const next = ids([], {
      type: fetchFollowersSuccess.toString(),
      payload: payload
    });
    expect(next).toEqual(payload.data);
  });

});