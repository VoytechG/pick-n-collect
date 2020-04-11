export const blurOnEnter = (event) => {
  if (event.key === "Enter") {
    event.target.blur();
  }
};
