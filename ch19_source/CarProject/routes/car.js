exports.carList = function(req, res){
  res.render('index', { title: 'CarList' });
};

exports.carUpdateForm = function(req, res){
  res.render('index', { title: 'CarUpdateForm' });
};

exports.carRegistForm = function(req, res){
  res.render('index', { title: 'CarRegist' });
};

exports.carInfo = function(req, res){
  res.render('index', { title: 'CarInfo' });
};