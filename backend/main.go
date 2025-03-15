package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	dsn := "root:password@tcp(127.0.0.1:3306)/issue_tracker"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Backend Connected to Database!"})
	})

	fmt.Println("Server is running on port 8080")
	r.Run(":8080")
}
