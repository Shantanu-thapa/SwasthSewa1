const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const autoSeed = require("./autoseed");
const connectDB = require("./config/db");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const Auth = require("./routes/Patient");
const HospitalList = require("./routes/Hospital");
const Booking = require("./routes/bookingRoutes");
const Bed = require("./routes/bedRoutes");
const Dashboard = require("./routes/dashboardRoutes");

app.use("/api/v1", Auth);
app.use("/api/v1/Hospital", HospitalList);
app.use("/api/v1", Booking);
app.use("/api/v1", Bed);
app.use("/api/v1/patient", Dashboard);


// Start application
const startServer = async () => {
    try {

        // Connect MongoDB
        await connectDB();

        console.log("MongoDB connected");

        // Run auto seed
        await autoSeed();

        // Start server
        app.listen(PORT, () => {
            console.log(`APP is Running ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
