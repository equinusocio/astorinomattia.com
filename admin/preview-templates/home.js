import { Preview } from ' ./preview';

export const Home = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/home.njk"
    context={({ title, body, postsHeading, archiveButtonText }) => ({
      title,
      content: contentParser(body),
      postsHeading,
      archiveButtonText,
      collections: {
        postFeed: [{
          url: 'javascript:void(0)',
          date: new Date(),
          data: {
            title: 'Sample Post',
          },
        }],
      },
    })}
  />
);
