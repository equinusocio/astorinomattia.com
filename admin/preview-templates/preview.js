const {
  htmlDate,
  contentParser,
  dateFilter,
} = previewUtil;

const env = nunjucks.configure();

env.addFilter('htmlDate', htmlDate);
env.addFilter('contentParser', contentParser);
env.addFilter('dateFilter', dateFilter);

export const Preview = ({ entry, path, context }) => {
  const data = context(entry.get('data').toJS());
  const html = env.render(path, { ...data, helpers });
  return <div dangerouslySetInnerHTML={{ __html: html }}/>
};
