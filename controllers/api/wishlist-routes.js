const router = require('express').Router();
const { Wishlist, Wishitem } = require('../../models');

router.get('/', (req, res) =>
{
    Wishlist.findAll(
    {
        attributes: ['listName']
    })
    .then(dbListData => res.json(dbListData))
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) =>
{
    Wishlist.findOne(
    {
        attributes: ['listName'],
        include:
        {
            model: Wishitem,
            attributes: ['itemName']
        }
    })
    .then(dbListData => res.json(dbListData))
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) =>
{
    Wishlist.update(
    {
        listName: req.body.listName
    },
    {
        where:
        {
            id: req.params.id
        }
    })
    .then(dbListData => 
    {
        if (!dbListData) 
        {
            res.status(404).json({ message: 'No list found with this id' });
            return;
        }
        res.json(dbListData);
    })
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) =>
{
    Wishlist.destroy(
    {
        where:
        {
            id: req.params.id
        }
    })
    .then(dbListData => 
    {
        if (!dbListData) 
        {
            res.status(404).json({ message: 'No list found with this id' });
            return;
        }
        res.json(dbListData);
    })
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;