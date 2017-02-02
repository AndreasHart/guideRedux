export const loadState = () => {
  console.log('loading state');
  try {
    const serializedState = localStorage.getItem('state');
    console.log('loading', serializedState);
    if (serializedState === null) {
      console.log('localstorage has nothing');
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  console.log('Saving state', state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('err');
  }
};