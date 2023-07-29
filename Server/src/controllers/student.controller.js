class StudentController {
    handleReceiveAndReturnData(req,res,next) {
        const { name, score } = req.body;
        return res.json({
            name: name, score: score,
        })
    }
}

export default new StudentController;