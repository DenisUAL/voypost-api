import express from "express";
const router = express.Router();
import db from "./db";

const { Trips } = db.models;

router.get("/", (req, res) => {
  res.send("hello");
});
router.get("/allTrips", (req, res) => {
  Trips.list().then(data => res.send(data));
});

export default router;
