// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log(state.getState());
//       console.log(action);
//       return next(action);
//     };
//   };
// }

const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info(state.getState());
  console.info("Prev State", state.getState());
  const result = next(action);
  console.info("Next State", state.getState());
  console.groupEnd();
  return result;
};

export default logger;
