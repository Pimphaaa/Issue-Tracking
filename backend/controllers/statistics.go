package controllers

import (
	"encoding/json"
	"net/http"
)

type Statistics struct {
	TicketsTotal    int     `json:"tickets_total"`
	UsersTotal      int     `json:"users_total"`
	TicketsResolved float64 `json:"tickets_resolved"`
	ResponseTime    float64 `json:"response_time"`
}

func GetStatistics(w http.ResponseWriter, r *http.Request) {
	// ตัวอย่างข้อมูล (สามารถดึงข้อมูลจริงจากฐานข้อมูลได้)
	stats := Statistics{
		TicketsTotal:    123,
		UsersTotal:      1452,
		TicketsResolved: 85.0,
		ResponseTime:    4.2,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(stats)
}
