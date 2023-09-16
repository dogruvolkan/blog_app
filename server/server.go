package main

import (
	"github.com/dogruvolkan/blogApp/database"
	"github.com/gofiber/fiber/v2"
)

func init() {
	database.ConnectDB()
}

func main() {

	sqlDb, err := database.DBCon.DB()

	if err != nil {
		panic("Error in sql connection")
	}

	defer sqlDb.Close()

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {

		return c.JSON(fiber.Map{"message": "welcome my blog app"})
		//return c.SendString("Hello world")
	})

	app.Listen(":8000")

}
