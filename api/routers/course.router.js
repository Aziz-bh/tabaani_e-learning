const express = require("express");
const Courserouter = express.Router();
const multer = require("multer");

const {
  addCourse,
  getAllcourses,
  getcourse,
  updatecourse,
  deletecourse,
  getImage,
  getCoursesByCategory
} = require("../Controllers/coursecontroller");
const {
  addchapter,
  deletechapter,
  updatechapter,
  getchapter,
  getAllChapters,
  addLesson,
  getLesson,
} = require("../Controllers/chaptercontroller");

const configureStorage = require('../multerconfig');

Courserouter.post('/course', configureStorage(), addCourse);

Courserouter.get("/courses", getAllcourses);
Courserouter.get("/courses/category/:category", getCoursesByCategory);
Courserouter.get("/course/:id", getcourse);
Courserouter.put("/course/:id", updatecourse);
Courserouter.delete("/course/:id", deletecourse);
Courserouter.post("/course/:courseId/add-chapter", addchapter);
Courserouter.delete(
  "/course/:courseId/deletechapter/:chapterId",
  deletechapter
);
Courserouter.put("/course/:courseId/updatechapter/:chapterId", updatechapter);
Courserouter.get("/course/:courseId/getchapter/:chapterId", getchapter);
Courserouter.post("/course/:courseId/chapter/:chapterId/add-lesson", addLesson);
Courserouter.get("/course/:courseId/chapter/:chapterId/getlesson", getLesson);
Courserouter.get("/course/:courseId/getchapter", getAllChapters);

module.exports = Courserouter;
