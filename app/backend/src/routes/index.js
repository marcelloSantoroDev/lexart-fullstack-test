const app = require('express');
const searchesRoute = require('./searches.route')
const buscapeRoute = require('./buscape.route')

const router = app.Router();

router.use('/db', searchesRoute);
router.use('/api', buscapeRoute);

module.exports = router;