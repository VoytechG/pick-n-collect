export function collapseItemCard(itemId) {
  const element = document.getElementById(itemId);

  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = "";

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + "px";
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function () {
      element.style.height = 0 + "px";
      element.style.padding = 0 + "px";
      element.style.margin = 0 + "px";
      element.style.overflow = "hidden";
      element.style.opacity = 0;
      element.style.transform = "scale(0)";
    });
  });
}
