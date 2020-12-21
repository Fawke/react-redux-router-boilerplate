import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = '1234abcd';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid });
});

test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };
    const initialState = { uid: '1234abcd' };
    const state = authReducer(initialState, action);
    expect(state).toEqual({});
});