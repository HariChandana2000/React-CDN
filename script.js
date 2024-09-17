const rootDiv = document.getElementById("root");

const heading = React.createElement("h1", null, "Learn web development");
const firstParagraph = React.createElement(
  "p",
  null,
  "Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites."
);

const span1 = React.createElement(
  "span",
  null,
  'The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from '
);
const span2 = React.createElement(
  "span",
  null,
  ", and other intermediate to advanced resources that assume a lot of previous knowledge."
);
const link = React.createElement(
  "a",
  { href: "https://developer.mozilla.org/en-US/" },
  "the rest of MDN"
);
const secondParagraph = React.createElement("p", null, span1, link, span2);

const thirdParagraph = React.createElement(
  "p",
  null,
  "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
);

const div = React.createElement(
  "div",
  null,
  heading,
  firstParagraph,
  secondParagraph,
  thirdParagraph
);

const root = ReactDOM.createRoot(rootDiv);
root.render(div);
