import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Allowed frontend origins
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://127.0.0.1:5173",
  // Vite sometimes uses 5174 when 5173 is busy
  "http://localhost:5174",
];

// Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (forms)

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Contact schema & model
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, default: "" },
    program: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
// accidental debug line removed (referencing undefined 'data')
// console.log("Server response:", data);

// POST /contact - save enquiry
app.post("/contact", async (req, res) => {
  const { name, mobile, email, city, program } = req.body || {};

  // Debug: log incoming body to help diagnose missing fields
  console.log("POST /contact body:", req.body);

  // Validate required fields
  if (!name || !mobile || !email || !program) {
    return res.status(400).json({ error: "Please fill all required fields." });
  }

  try {
    const newContact = new Contact({ name, mobile, email, city, program });
    await newContact.save();
    return res.status(201).json({ message: "Enquiry submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);

    // Handle duplicate email
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ error: "This email has already been registered." });
    }

    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
