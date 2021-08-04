import html from "html-literal";

export default () => html`
  <form id="register" method="POST" action="">
    <div>
      <label for="url">Photo URL:</label>
      <input
        type="text"
        name="url"
        id="photoURL"
        placeholder="Enter Photo URL"
        required
      />
    </div>
    <div>
      <label for="title">Photo Title/Description:</label>
      <input type="text" name="title" id="title" />
    </div>
    <input type="submit" name="submit" value="Submit Photo" />
  </form>
`;
