import { Preview } from ' ./preview';

export const Page = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/page.njk"
    context={({ title, body }) => ({
      title,
      content: contentParser(body || ''),
    })}
  />
);
