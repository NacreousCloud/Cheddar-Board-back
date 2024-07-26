import express from 'express';

const router = express.Router();

router.get('*/', (req, res) => {
  res.send('Board list');
});

/**
 * @param req asdf
 */
router.post('*/', (req, res) => {
  console.log('req', req.body);

  res.send('check');
});

router.patch('*/', (req, res) => {
  res.send('Board list');
});

export default router;
