/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["no"],
    defaultLocale: "no",
  },
};

module.exports = nextConfig;
