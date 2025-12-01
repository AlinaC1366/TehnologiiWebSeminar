const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    // get all
    try {
      const employees = await Employee.findAll({});
      return res.status(200).json(employees);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    // create
    // console.log("req.body :>> ", req.body);
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json(newEmployee);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
 
router
  .route("/employees/:id")
  .get(async (req, res) => {
    // get by id
    // filtrarea dupa un camp
    const employee = await Employee.findOne({
      where: { id: req.params.id },
    });
    if (employee) {
      return res.status(200).json(employee);
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exists` });
    }
  })
  .put(async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        return res.status(200).json(await employee.update(req.body));
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exists` });
    }
  })
  .delete(async (req, res) => {
    try {
      const id = req.params.id;
      
      const deletedRows = await Employee.destroy({
        where: { id: id }
      });

      if (deletedRows === 0) {
        return res.status(404).json({ error: `Employee with id ${id} was not found.` });
      }

      res.status(204).send(); 
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "ERR DELETE." });
    }
  });

module.exports = router;
