import express from "express";
const app = express();

let movies = [
  { id: 1, title: "Inception", rating: 9 },
  { id: 2, title: "Interstellar", rating: 8.5 },
  { id: 3, title: "Dangal", rating: 8.4 }
];

// SEARCH ROUTE
app.get("/movies/search", (req, res) => {
  const query = req.query.title;

  if (!query) {
    return res.status(400).json({ error: "title query is required" });
  }

  const result = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
