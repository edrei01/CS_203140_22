import { Router } from 'express';
import { getUser } from '../models/Users.js'
Servidorimport { getProfile } from '../models/Profile.js'

const router = Router();

router.get('/users', async function (reg,res){
    getUser.findAll({attributes:['username','email','password','phone_number']})
        .then(users => {
            res.send(users)
        })
        .catch(err =>{
            console.log(err)
        })
    });

router.post('/register', async function (req, res)  {

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

   getUser.create({username: username, email: email, password: password, phone_number: phone_number});
})


router.delete('/eliminar', async function (req, res) {
    await getUser.destroy({
        where: {
            id: req.query.id
        }
    });
    console.log("Eliminado")
})

router.put('/actualizar', async function (req, res) {

    const client = await getConnection();

    let id = req.query.id;
    let newData = req.query;

    getUser.findOne({where:{id:id}})
    .then((r) => {
        r.update(newDatas)
        success(req, res, r, 200);
      })
      .catch((e) => {
        success(req, res, e, 400);
      });
  })

router.patch('/name', async function (req, res) {

    let id= req.query.id;
    let username= req.query.username;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({username:username})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/email', async function (req, res) {

    let id= req.query.id;
    let email= req.query.email;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({email:email})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/pass', async function (req, res) {

    let id= req.query.id;
    let password= req.query.password;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({password:password})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/phone', async function (req, res) {

    let id= req.query.id;
    let phone_number= req.query.phone_number;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({phone_number:phone_number})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});


export default router;