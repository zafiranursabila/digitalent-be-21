import { Router } from 'express';
import { ElasticClient } from '../databases/elasticsearch';
const elasticClient = new ElasticClient();

const router = Router();

//@route    GET /es?size=
//@desc     Get all data
router.get('/', async (req, res, next) => {

});

//@route    GET /state/:state
//@desc     Get account by state
router.get('/state/:state', async (req, res, next) => {

});

//@route    GET /employer/:employer
//@desc     Get account by employer
router.get('/employer/:employer', async (req, res, next) => {

});

//@route    GET /account/:accNumber
//@desc     Get account by account number
router.get('/account/:accNumber', async (req, res, next) => {

});

//@route    GET /account/range/:acc1/:acc2
//@desc     Get account in account number range
router.get('/account/range/:acc1/:acc2', async (req, res, next) => {

});

//@route    GET /age/:age
//@desc     Get account with maximum age
router.get('/age/:age', async (req, res, next) => {

});

export default router;