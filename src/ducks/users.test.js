import {userRequest, userSuccess, userFailure, isFetching, data, error} from './users';

describe('Написать тесты для редьюсера users. Проверить, что экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure:', () => {
   it('- изменяют флаг isFetching', () => {
      expect(isFetching(false, userRequest())).toBeTruthy();
      expect(isFetching(false, userSuccess())).toBeFalsy();
      expect(isFetching(false, userFailure())).toBeFalsy();
   });

   it('- очищают поле data, если приходит экшен fetchUserRequest', () => {
      expect(data(null, userRequest())).toBeNull();
   });

   it('- наполняют данными data, если приходит экшен fetchUserSuccess', () => {
      expect(data(null, userSuccess({data: {login: 'AlexeyVasilenko'}}))).toHaveProperty('login', 'AlexeyVasilenko');
   });

   it('- очищают поле error, если приходит экшен fetchUserRequest или fetchUserSuccess', () => {
      expect(error(null, userRequest())).toBeNull();
      expect(error(null, userSuccess())).toBeNull();
   });

   it('- наполняют данными error, если приходит экшен fetchUserFailure', () => {
      expect(error(null, userFailure({message: 'error'}))).toEqual('error');
   })
});