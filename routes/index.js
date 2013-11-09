
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Politische Gewalt in Deutschland' });
};