package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// เชื่อมต่อกับฐานข้อมูล MySQL
	dsn := "root:password@tcp(127.0.0.1:3306)/issue_tracker"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// กำหนด Gin router
	r := gin.Default()

	// Endpoint สำหรับทดสอบการเชื่อมต่อฐานข้อมูล
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Backend Connected to Database!"})
	})

	// CRUD operations

	// **Create** - เพิ่มข้อมูลใหม่
	r.POST("/issues", func(c *gin.Context) {
		var newIssue struct {
			Title       string `json:"title"`
			Description string `json:"description"`
			Status      string `json:"status"`
		}

		// Binding JSON จาก request body
		if err := c.ShouldBindJSON(&newIssue); err != nil {
			c.JSON(400, gin.H{"error": "Invalid input"})
			return
		}

		// Query เพื่อเพิ่มข้อมูล
		query := "INSERT INTO issues (title, description, status) VALUES (?, ?, ?)"
		_, err := db.Exec(query, newIssue.Title, newIssue.Description, newIssue.Status)
		if err != nil {
			log.Fatal(err)
			c.JSON(500, gin.H{"error": "Failed to insert data"})
			return
		}

		// ส่ง response ยืนยันการเพิ่มข้อมูล
		c.JSON(201, gin.H{"message": "Issue created"})
	})

	// **Read** - ดึงข้อมูลทั้งหมดจากตาราง issues
	r.GET("/issues", func(c *gin.Context) {
		rows, err := db.Query("SELECT id, title, description, status, created_at FROM issues")
		if err != nil {
			log.Fatal(err)
			c.JSON(500, gin.H{"error": "Failed to fetch data"})
			return
		}
		defer rows.Close()

		var issues []map[string]interface{}
		for rows.Next() {
			var id int
			var title, description, status string
			var createdAt string
			if err := rows.Scan(&id, &title, &description, &status, &createdAt); err != nil {
				log.Fatal(err)
				c.JSON(500, gin.H{"error": "Failed to scan data"})
				return
			}

			issue := map[string]interface{}{
				"id":          id,
				"title":       title,
				"description": description,
				"status":      status,
				"created_at":  createdAt,
			}
			issues = append(issues, issue)
		}

		if err := rows.Err(); err != nil {
			log.Fatal(err)
			c.JSON(500, gin.H{"error": "Error while reading rows"})
			return
		}

		// ส่งข้อมูลทั้งหมดในฐานข้อมูล
		c.JSON(200, issues)
	})

	// **Update** - อัปเดตข้อมูล issue ตาม ID
	r.PUT("/issues/:id", func(c *gin.Context) {
		id := c.Param("id")
		var updatedIssue struct {
			Title       string `json:"title"`
			Description string `json:"description"`
			Status      string `json:"status"`
		}

		// Binding JSON body
		if err := c.ShouldBindJSON(&updatedIssue); err != nil {
			c.JSON(400, gin.H{"error": "Invalid input"})
			return
		}

		// Query เพื่ออัปเดตข้อมูล
		query := "UPDATE issues SET title = ?, description = ?, status = ? WHERE id = ?"
		_, err := db.Exec(query, updatedIssue.Title, updatedIssue.Description, updatedIssue.Status, id)
		if err != nil {
			log.Fatal(err)
			c.JSON(500, gin.H{"error": "Failed to update data"})
			return
		}

		// ส่ง response ยืนยันการอัปเดต
		c.JSON(200, gin.H{"message": "Issue updated"})
	})

	// **Delete** - ลบข้อมูล issue ตาม ID
	r.DELETE("/issues/:id", func(c *gin.Context) {
		id := c.Param("id")

		// Query เพื่อทำการลบข้อมูล
		query := "DELETE FROM issues WHERE id = ?"
		_, err := db.Exec(query, id)
		if err != nil {
			log.Fatal(err)
			c.JSON(500, gin.H{"error": "Failed to delete data"})
			return
		}

		// ส่ง response ยืนยันการลบ
		c.JSON(200, gin.H{"message": "Issue deleted"})
	})

	// เริ่มเซิร์ฟเวอร์ที่พอร์ต 8080
	fmt.Println("Server is running on port 8080")
	r.Run(":8080")
}
