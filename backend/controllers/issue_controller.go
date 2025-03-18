package controllers

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// HomeHandler เป็น API สำหรับทดสอบการเชื่อมต่อ
func HomeHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Backend Connected to Database!"})
}

// CreateIssue - เพิ่มข้อมูลใหม่
func CreateIssue(c *gin.Context, db *sql.DB) {
	var newIssue struct {
		Title       string `json:"title"`
		Description string `json:"description"`
		Status      string `json:"status"`
	}

	if err := c.ShouldBindJSON(&newIssue); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	query := "INSERT INTO issues (title, description, status) VALUES (?, ?, ?)"
	_, err := db.Exec(query, newIssue.Title, newIssue.Description, newIssue.Status)
	if err != nil {
		log.Println("Error inserting issue:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Issue created"})
}

// GetIssues - ดึงข้อมูลทั้งหมด
func GetIssues(c *gin.Context, db *sql.DB) {
	rows, err := db.Query("SELECT id, title, description, status, created_at FROM issues")
	if err != nil {
		log.Println("Error fetching issues:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch data"})
		return
	}
	defer rows.Close()

	var issues []map[string]interface{}
	for rows.Next() {
		var id int
		var title, description, status string
		var createdAt string
		if err := rows.Scan(&id, &title, &description, &status, &createdAt); err != nil {
			log.Println("Error scanning issue:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan data"})
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

	c.JSON(http.StatusOK, issues)
}

// UpdateIssue - อัปเดตข้อมูลตาม ID
func UpdateIssue(c *gin.Context, db *sql.DB) {
	id := c.Param("id")
	var updatedIssue struct {
		Title       string `json:"title"`
		Description string `json:"description"`
		Status      string `json:"status"`
	}

	if err := c.ShouldBindJSON(&updatedIssue); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	query := "UPDATE issues SET title = ?, description = ?, status = ? WHERE id = ?"
	_, err := db.Exec(query, updatedIssue.Title, updatedIssue.Description, updatedIssue.Status, id)
	if err != nil {
		log.Println("Error updating issue:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update data"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Issue updated"})
}

// DeleteIssue - ลบข้อมูลตาม ID
func DeleteIssue(c *gin.Context, db *sql.DB) {
	id := c.Param("id")

	query := "DELETE FROM issues WHERE id = ?"
	_, err := db.Exec(query, id)
	if err != nil {
		log.Println("Error deleting issue:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete data"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Issue deleted"})
}
