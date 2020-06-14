
let state;

function changeState(state = { count: 0 }, action){ 
  debugger 

    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }
function dispatch(action){  
  debugger 
    state = changeState(state, action)
    render()
}

function render() {
  document.body.textContent = state.count
}
