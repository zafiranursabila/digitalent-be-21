import { Router } from 'express';
import { FirebaseClient } from '../databases/firebase';
const firebaseClient = new FirebaseClient();

const router = Router();

//@route    POST /fb/account
//@desc     Add account data
router.post('/account', async (req, res, next) => {

});

//@route    GET /fb/account
//@desc     Get all account data
router.get('/account', async (req, res, next) => {
  
});

//@route    GET /fb/account/:id
//@desc     Get account by Id
router.get('/account/:id', async (req, res, next) => {
  
});

//@route    PUT /fb/account/:id
//@desc     Update account by id
router.put('/account/:id', async (req, res, next) => {
  
});

//@route    DELETE /fb/account/:id
//@desc     Delete accoubt by id
router.delete('/account/:id', async (req, res, next) => {
  
});

//@route    GET /fb/account/number/:accNum
//@desc     Get account by account number
router.get('/account/number/:accNum', async (req, res, next) => {
  
});

//@route    GET /fb/account/age/:age
//@desc     Get account by age
router.get('/account/age/:age', async (req, res, next) => {
  
});

export default router;