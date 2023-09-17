package database

import (
	"log"
	"os"

	"github.com/dogruvolkan/blogApp/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DBCon *gorm.DB

func ConnectDB() {

	username := os.Getenv("USERNAME")
	password := os.Getenv("PASSWORD")
	dbname := os.Getenv("DBNAME")

	dsn := username + ":" + password + "@tcp(127.0.0.1:3306)/" + dbname + "?charset=utf8mb4&parseTime=True&loc=Local"


	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Error),
	})

	if err != nil {
		panic("Database connection failed")
	}

	log.Println("Database connection successful")

	db.AutoMigrate(new(model.Blog))

	DBCon = db
}
