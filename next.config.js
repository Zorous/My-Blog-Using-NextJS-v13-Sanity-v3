/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  //this allows us to use a new app directory wallet
  experimental : {
    appDir : true
  },
  images:{
    domains: ["drive.google.com","cdn.sanity.io"]
  }
}
