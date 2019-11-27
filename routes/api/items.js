const express = require('express');
const router = express.Router();

// Item Model 
const Item = require('../../models/item');

// console.log(Item.model('item'))

// @route   GET api/items
// @desc    Get All items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1})
    .then(items => res.json(items));
});

// @route   GET api/items/:id
// @desc    Get All items
// @access  Public
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create a item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
      sku: req.body.sku,
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      pricing: {
        purchase_price: req.body.pricing.purchase_price,
        sale_price: req.body.pricing.sale_price,
      }
    });

    newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete a item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => 
            item.remove()
                .then(() => res.json({success: true}))
        ).catch(err => res.status(404).json({ success: false}))
});

module.exports = router;