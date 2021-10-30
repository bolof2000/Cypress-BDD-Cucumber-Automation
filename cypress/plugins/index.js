
/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot')
module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
    addMatchImageSnapshotPlugin(on,config)
}
