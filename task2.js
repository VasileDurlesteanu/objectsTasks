// Check for emptiness

function isEmpty() {
  alert(true);
} else {
  alert(false);
};

// solution

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}