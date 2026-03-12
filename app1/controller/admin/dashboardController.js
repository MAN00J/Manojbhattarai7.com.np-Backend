const Dashcontrol = (req, res) => {
    res.status(200).json({ message: "Welcome to Dashboard!", user: req.user });
};

export default Dashcontrol;
