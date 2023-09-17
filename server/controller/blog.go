package controller

import (
	"github.com/dogruvolkan/blogApp/database"
	"github.com/dogruvolkan/blogApp/model"
	"github.com/gofiber/fiber/v2"
)

func BlogList(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Blog List",
	}

	db := database.DBCon
	var records []model.Blog
	db.Find(&records)
	context["blog_records"] = records

	c.Status(200)
	return c.JSON(context)
}

func BlogCreate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Add a blog",
	}
	c.Status(201)
	return c.JSON(context)
}

func BlogUpdate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Update a blog by id",
	}

	c.Status(200)
	return c.JSON(context)
}

func BlogDelete(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Delete a blog by id",
	}

	c.Status(200)
	return c.JSON(context)
}
