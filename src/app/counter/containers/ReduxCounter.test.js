import {mapStateToProps, mapDispatchToProps} from './ReduxCounter';
 

test("mapStateToProps", () => {
    const stateStub = {
        counter: 10
    }
    const props = mapStateToProps(stateStub)
    expect(props.counter).toBe(10);
})

test("mapDispatchToProps", () => {
    const dispatch =  jest.fn(); // mock
 
    const getState = jest.fn();
    const props = mapDispatchToProps(dispatch, getState);
    expect(props.reset).toBeDefined();
    props.reset(); // this calls reset function
    expect(dispatch).toBeCalled();
    expect(dispatch).toHaveBeenCalledWith();
    
})

