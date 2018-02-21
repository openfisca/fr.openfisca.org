const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  assetPrefix: isProd ? 'https://fr.openfisca.org/beta' : ''
}
