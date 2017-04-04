var userController = require ('../database/controllers/userController.js');
var imageController = require ('../database/controllers/imageController.js');
var commentController = require ('../database/controllers/commentController.js')

module.exports = function (app, express) {

 /*								Api User route
 / ============================================================================== */
		app.post('/api/login', userController.login);

 /*								Api Image route
 / ============================================================================== */
		app.get('/api/getall', imageController.getall);
		app.post('/api/addImage', imageController.addImage);
		app.get('/api/getAllById/:id', imageController.getAllById);
		app.get('/api/getImgById/:id', imageController.getImgById);
		app.delete('/api/removeImgeById/:id', imageController.removeImgeById);

/*								Comment  route									 */
//=============================================================================
		app.post('/api/insertComment', commentController.insertComment);
		app.put('/api/editComment',commentController.editComment);
		app.delete('/api/removeCommentById/delete/:_id',commentController.removeCommentById);
		app.get('/api/getCommentsById/:advId',commentController.getCommentsById);		

	};
	