const User = require("./../Models/userModel");
// get all the users
exports.getUserStats = async (req, res) => {
  try {
    const top=req.query.top
    if (!top){
    const doc=await User.aggregate([
        {
            $match : { score : { $gte: 0}},
        },
        {
            $sort : {score: -1}
        },
        {
            $project : {
                password: 0,
                email: 0,
                createdAt: 0,
                __v: 0,
                active: 0,
                _id: 0
            }
        }
    ])
    }
    const doc=await User.aggregate([
        {
            $match : { score : { $gte: 0}},
        },
        {
            $sort : {score: -1}
        },
        {
            $project : {
                password: 0,
                email: 0,
                createdAt: 0,
                __v: 0,
                active: 0,
                _id: 0
            }
        },
        {
            $limit : top * 1
        }
    ])
    res.status(200).json({
      message: "success",
      results: doc.length,
      data: doc,
    });

  } catch (err) {
    res.status(400).json({
      message: "fail",
      err: err.message,
    });
  }
};

