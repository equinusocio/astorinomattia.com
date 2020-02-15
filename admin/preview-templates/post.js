import { Preview } from ' ./preview';

export const Post = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/post.njk"
    context={({ title, date, body }) => ({
      title,
      date,
      content: contentParser(body || ''),
    })}
  />
);
