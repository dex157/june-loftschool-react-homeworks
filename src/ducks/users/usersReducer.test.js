import users, { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './index'

describe('Редьюсер users', () => {
      const initialState = {
        isFetching: false,
        data: null,
        error: null
      };
    
      const testData = {
        data: {
          login: 'test-login',
          avatar_url: 'test-avatar',
          followers: 1
        }
      };
    
      const error = { error: 'test-error' };
    
      describe('fetchUserRequest', () => {
        const fetchUserRequestState = users(
          initialState,
          fetchUserRequest(),
        );
    
        it('изменяет флаг isFetching', () => {
          expect(fetchUserRequestState.isFetching).toBeTruthy();
        });
    
        it('очищает data', () => {
          expect(fetchUserRequestState.data).toBeNull();
        });
    
        it('очищает error', () => {
          expect(fetchUserRequestState.error).toBeNull();
        });
      });
    
      describe('fetchUserSuccess', () => {
        const state2 = users(
          initialState,
          fetchUserSuccess(testData),
        );
    
        it('меняет isFetching на false', () => {
          expect(state2.isFetching).toBeFalsy();
        });
        
        it('помещает данные в data', () => {
          expect(state2.data).toEqual(testData);
        });
    
        it('очищают поле error', () => {
          expect(state2.error).toBeNull();
        });
      });
    
      describe('fetchUserFailure', () => {
        const state3 = users(
          initialState,
          fetchUserFailure(error),
        );
    
        it('изменяет isFetching на false', () => {
          expect(state3.isFetching).toBeFalsy();
        });
    
        it('заполняет error', () => {
          expect(state3.error).toEqual(error);
        });
      });
    }); 