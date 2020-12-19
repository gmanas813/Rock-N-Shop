
import dirReducer,{InitialState}  from './directory.reducer';

describe('Checking directory Reducer', () => {
    it('Working', () =>{
        expect(dirReducer(undefined, {
        })).toEqual(InitialState);
    });
});
