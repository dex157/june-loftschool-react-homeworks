import {requestUser, successUser, failureUser, isFetching, data, error} from './users';

describe('Написать тесты для редьюсера users', () => {
  it('Проверить, что экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure изменяют флаг isFetching', () => {
    expect(isFetching(false, requestUser())).toBeTruthy();
    expect(isFetching(false, successUser())).toBeFalsy();
    expect(isFetching(false, failureUser())).toBeFalsy();
  })
  
  it('Проверить, что экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure очищают поле data, если приходит экшен fetchUserRequest', () => {
    expect(data(null, requestUser())).toBeNull();
  })
  
  it('Проверить, что экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure наполняют данными data, если приходит экшен fetchUserSuccess', () => {
    expect(data(null, successUser({data: {login: 'Maxim'}}))).toHaveProperty('login', 'Maxim');
  })
  
  it('Проверить, что экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure очищают поле error, если приходит экшен fetchUserRequest или fetchUserSuccess', () => {
    expect(error(null, requestUser())).toBeNull();
    expect(error(null, successUser())).toBeNull();
  })
  
  it('Проверить, что экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure наполняют данными error, если приходит экшен fetchUserFailure', () => {
    expect(error(null, failureUser({message: 'error'}))).toEqual('error');
  })
})