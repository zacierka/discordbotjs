const logger = require('../../utils/logging');
module.exports = (client) => {
    logger.info(`${client.user.tag} is online`);
  };