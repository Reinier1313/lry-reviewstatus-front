"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState(""); // Correct placement of useState
  const data = [
    {
      id: 1,
      name: "Reinier Mariscotes",
      email: "reineir@mariscotes.com",
      phone: "555-1234",
    },
    {
      id: 2,
      name: "Levai Young",
      email: "Levai@example.com",
      phone: "555-5678",
    },
    {
      id: 3,
      name: "Harvy Tan",
      email: "Harvy@Tan.com",
      phone: "555-9012",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      phone: "555-3456",
    },
    {
      id: 5,
      name: "Tom Davis",
      email: "tom@example.com",
      phone: "555-7890",
    },
    {
      id: 6,
      name: "Sarah Lee",
      email: "sarah@example.com",
      phone: "555-2345",
    },
    {
      id: 7,
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "555-6789",
    },
    {
      id: 8,
      name: "Emily Wilson",
      email: "emily@example.com",
      phone: "555-0123",
    },
    {
      id: 9,
      name: "David Martinez",
      email: "david@example.com",
      phone: "555-4567",
    },
    {
      id: 10,
      name: "Olivia Hernandez",
      email: "olivia@example.com",
      phone: "555-8901",
    },
  ];

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) => typeof value === 'string' ? value.toLowerCase().includes(searchTerm.toLowerCase()) : false)
  );
  

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button size="sm">Add New</Button>
      </div>
      <div className="mb-4">
        <Input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Additional Info</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>Placeholder Address</TableCell>
                <TableCell>Placeholder Date Joined</TableCell>
                <TableCell>Placeholder Role</TableCell>
                <TableCell>Placeholder Status</TableCell>
                <TableCell>Placeholder Additional Info</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="danger">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
