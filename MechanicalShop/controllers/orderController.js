const Order = require('../models/order');



// GET all orders
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.render('order-list', { orders: orders, req });
  } catch (err) {
    next(err);
  }
};

// GET a single order by ID
exports.getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.render('order-detail', { req, order });
  } catch (err) {
    return next(err);
  }
};

// POST a new order
exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        order
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
};

// PATCH an existing order by ID
exports.updateOrder = async (req, res, next) => {
  try {
    const { status } = req.body;
    const createdAt = Date.now();
    const order = await Order.findByIdAndUpdate(req.params.id, {
      status,
      createdAt
    });
    if (!order) {
      return res.redirect('/admin/order');
    }
    res.redirect('/admin/detail-order/'+req.params.id);
  } catch (err) {
    next(err);
  }
};

// DELETE an existing order by ID
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({
        status: 'fail',
        message: 'Order not found'
      });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
};



