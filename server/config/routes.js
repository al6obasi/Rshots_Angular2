var userController = require ('../database/controllers/userController.js');
var imageController = require ('../database/controllers/imageController.js');


module.exports = function (app, express) {

 /*								Api User route
 / ============================================================================== */
		app.post('/api/login', userController.login);

 /*								Api Image route
 / ============================================================================== */
		app.get('/api/getall', imageController.getall);
		app.post('/api/addImage', imageController.addImage);
		app.get('/api/getAllById', imageController.getAllById);
		app.get('/api/getImgById/:id', imageController.getAllById);
	};
	