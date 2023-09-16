package main

import (
	"github.com/dogruvolkan/blogApp/database"
	"github.com/gofiber/fiber/v2"
)

func main() {

	database.ConnectDB()

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {

		return c.JSON(fiber.Map{"message": "welcome my blog app"})
		//return c.SendString("Hello world")
	})

	app.Listen(":8000")

}
