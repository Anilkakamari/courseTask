const express = require('express');
const router = express.Router();
const fileupload = require('express-fileupload');
router.use(fileupload());

router.post("/", function (req, res, next) {
    console.log(req.files);
    res.send({
        success: true,
        message: "Upload files"
    });
});
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET method",
        data: [{
            id: 1,
            courseName: "CS50's Introduction to Computer Science",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 2,
            courseName: "Becoming an Effective Leader",
            providerName: "UQx",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 3,
            courseName: "CS50's Web programming with Python and Javascript",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 4,
            courseName: "Entrepreneeurship in Emerging Economies",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 5,
            courseName: "CS50's Introduction to Game Development",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 6,
            courseName: "Fundamentals of Neuroscience, Part 1: The Electrical Properties",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 7,
            courseName: "Becoming an Effective Leader",
            providerName: "UQx",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 8,
            courseName: "CS50's Web programming with Python and Javascript",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 9,
            courseName: "Entrepreneeurship in Emerging Economies",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 10,
            courseName: "CS50's Introduction to Game Development",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        },
        {
            id: 11,
            courseName: "Fundamentals of Neuroscience, Part 1: The Electrical Properties",
            providerName: "HarvardX",
            imgUrl: "",
            startDate: "16-07-2020",
            endDate: "20-07-2020"
        }
        ]
    });
});

router.post('/', (req, res, next) => {
    const products = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProdct: products
    });
});

router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Its works POST Id',
        productId: req.params.productId,
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Delete the content",
        productId: req.params.productId,
    });
});

module.exports = router;