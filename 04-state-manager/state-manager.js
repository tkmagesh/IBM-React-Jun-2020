var StateManager = (function(){
    var _currentState = undefined,
        _callbacks = [],
        _reducer = null,
        _init_action = { type : '@@INIT/ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _callbacks.push(callback);
    }

    function triggerChange(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('Invalid arguments');
        _reducer = reducer;

        //to initialize the current state with a valid default state
        _currentState = _reducer(undefined, _init_action)
        
        var store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();