package controller

import (
	"fmt"
	"log"
	"time"

	"github.com/dogruvolkan/blogApp/database"
	"github.com/dogruvolkan/blogApp/model"
	"github.com/gofiber/fiber/v2"
)

// list all blog
func BlogList(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Blog List",
	}

	time.Sleep(time.Millisecond * 500)

	db := database.DBCon
	var records []model.Blog
	db.Find(&records)
	context["blog_record"] = records

	c.Status(200)
	return c.JSON(context)
}

// blog read by id
func BlogRead(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Read a blog by id",
	}

	time.Sleep(time.Millisecond * 500)

	db := database.DBCon

	id := c.Params("id")

	var record model.Blog

	db.Find(&record, id)

	if record.ID == 0 {
		log.Println("Record not found")
		context["statusText"] = ""
		context["msg"] = "Record not found"
		c.Status(404)
		return c.JSON(context)
	}

	context["blog_record"] = record

	c.Status(200)
	return c.JSON(context)
}

// blog create
func BlogCreate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Add a blog",
	}

	record := new(model.Blog)

	if err := c.BodyParser(&record); err != nil {
		log.Println("Error in parsing request.")
		context["statusText"] = ""
		context["msg"] = "something went wrong"
	}

	result := database.DBCon.Create(record)

	if result.Error != nil {
		log.Println("Error in saving data.")
		context["statusText"] = ""
		context["msg"] = "something went wrong"
	}

	context["msg"] = "Record is saved successfully"
	context["data"] = record

	c.Status(201)
	return c.JSON(context)
}

// blog update by id
func BlogUpdate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Update a blog by id",
	}

	id := c.Params("id")

	var record model.Blog

	database.DBCon.First(&record, id)

	if record.ID == 0 {
		log.Println("Record not found")
		context["statusText"] = ""
		context["msg"] = "Record not found"
		c.Status(400)
		return c.JSON(context)
	}

	if err := c.BodyParser(&record); err != nil {
		log.Println("Error in parsing request")
	}

	result := database.DBCon.Save(record)

	if result.Error != nil {
		log.Println("Error in saving data")
	}

	context["msg"] = "Record updated successfully"
	context["data"] = record

	c.Status(200)
	fmt.Println(record)
	return c.JSON(context)
}

// blog delete by id
func BlogDelete(c *fiber.Ctx) error {
	c.Status(400)
	context := fiber.Map{
		"statusText": "",
		"msg":        "",
	}

	db := database.DBCon

	id := c.Params("id")

	var record model.Blog

	db.First(&record, id)

	if record.ID == 0 {
		log.Println("Record not found")
		context["statusText"] = ""
		context["msg"] = "Record not found"
		return c.JSON(context)
	}

	result := db.Delete(record)

	if result.Error != nil {
		context["msg"] = "Something went wrong"
		return c.JSON(context)
	}

	context["statusText"] = "Ok"
	context["msg"] = "Record deleted successfullly"

	c.Status(200)
	return c.JSON(context)
}
