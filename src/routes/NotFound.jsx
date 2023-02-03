import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <article>
      <hgroup>
        <h2>Not found</h2>
        <h3>Subtitle for heading 2</h3>
        <Link to="/">Go to main page</Link>
      </hgroup>
    </article>
  );
};
