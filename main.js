const nudge_visa = () => {
  const self = "https://hasvisareleasedhisbookyet.com";
  const tweetText = 'hey @visakanv have you released your book yet?';
  document.querySelector(".twitter-btn").addEventListener("click", (event) => {
    event.preventDefault();
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${self}`, "_blank");
  });
};

document.addEventListener("DOMContentLoaded", (event) => {
  nudge_visa();
});
