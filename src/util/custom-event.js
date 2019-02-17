/**
 * 
 * @param {function} callback 
 */
function userDataEventListener(callback) {
  document.addEventListener('userLoginData', function(event) {
    const { action } = event.detail; // login or logout
    callback(action);    
  }, false);
}

/**
 * 
 * @param {string} action login or logout
 */
function emitUserDataEvent(action) {
  var event = new CustomEvent('userLoginData', {
    detail: {
      action
    }
  });
  document.dispatchEvent(event);
}

export {
  userDataEventListener,
  emitUserDataEvent
};
