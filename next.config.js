/*
  eslint-disable
  @typescript-eslint/no-var-requires,
  global-require
*/

module.exports = () => {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });

  return withBundleAnalyzer();
};
