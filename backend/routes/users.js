import express from "express";
const router = express.Router();
import User from "../model/User.js";

// for testing
// router.get('/', (req, res) => {
//     res.json([
//         {
//             username: 'Alex',
//             age: 21
//         },
//         {
//             username: 'Mike',
//             age: 19
//         }
//     ])
// });
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(204).json({ 'message': 'No users found.'});
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;