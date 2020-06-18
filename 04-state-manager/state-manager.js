
    var _currentState = undefined,
        _callbacks = [],
        _reducer = null;

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