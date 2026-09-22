
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  Activity,
  ArrowRight,
  Bed,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartPulse,
  Hospital,
  LogIn,
  LogOut,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Stethoscope,
  User,
  UserPlus,
  X,
} from "lucide-react";

import "./App.css";

/* =========================================================
   API CONFIGURATION
========================================================= */

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================================================
   AUTH HELPERS
========================================================= */

const getToken = () => {
  return localStorage.getItem("token");
};

const authHeaders = () => {
  const token = getToken();

  return {
    Authorization: `Bearer ${token}`,
  };
};

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("patient"));
  } catch {
    return null;
  }
};

const saveUser = (user) => {
  localStorage.setItem("patient", JSON.stringify(user));
};

const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("patient");
};

/* =========================================================
   PROTECTED ROUTE
========================================================= */

function ProtectedRoute({ children }) {
  return getToken() ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = getStoredUser();

  const logout = () => {
    logoutUser();
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            <HeartPulse size={21} strokeWidth={2.3} />
          </span>

          <span className="brand-copy">
            <span className="brand-name">SwasthSewa</span>
            <span className="brand-tagline">
              Healthcare, simplified.
            </span>
          </span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={`nav-links ${open ? "nav-open" : ""}`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link
            to="/hospitals"
            onClick={() => setOpen(false)}
          >
            Hospitals
          </Link>

          {user && (
            <>
              <Link
                to="/patient/dashboard"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                to="/patient/bookings"
                onClick={() => setOpen(false)}
              >
                My Bookings
              </Link>
            </>
          )}

          {!user ? (
            <div className="nav-actions">
              <Link
                to="/login"
                className="nav-login"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="btn btn-primary btn-small"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="nav-user-area">
              <span className="nav-user">
                <User size={16} />
                {user.name}
              </span>

              <button
                className="nav-logout"
                onClick={logout}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-background" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Healthcare made easier
            </div>

            <h1>
              Find the right care,
              <span> when you need it.</span>
            </h1>

            <p>
              SwasthSewa helps patients discover hospitals,
              check bed availability and manage healthcare
              bookings from one simple platform.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary btn-large"
                onClick={() => navigate("/hospitals")}
              >
                Find a Hospital
                <ArrowRight size={18} />
              </button>

              <button
                className="btn btn-secondary btn-large"
                onClick={() =>
                  navigate(
                    getToken()
                      ? "/patient/dashboard"
                      : "/signup"
                  )
                }
              >
                {getToken()
                  ? "Open Dashboard"
                  : "Create Account"}
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <CheckCircle2 size={17} />
                Real-time availability
              </div>

              <div className="trust-item">
                <ShieldCheck size={17} />
                Secure patient access
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <div>
                <span className="small-label">
                  CARE AVAILABILITY
                </span>

                <h3>Find available beds</h3>
              </div>

              <div className="hero-card-icon">
                <Bed size={22} />
              </div>
            </div>

            <div className="hero-search">
              <Search size={19} />
              <span>Search hospitals by location</span>
            </div>

            <div className="hero-stat">
              <div>
                <strong>24/7</strong>
                <span>Healthcare access</span>
              </div>

              <div>
                <strong>Live</strong>
                <span>Bed availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">
              SIMPLE HEALTHCARE
            </span>

            <h2>Everything you need in one place.</h2>

            <p>
              Find hospitals, check availability and manage
              your bookings without unnecessary complexity.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Hospital size={24} />
              </div>

              <h3>Find hospitals</h3>

              <p>
                Discover available hospitals and their
                healthcare facilities.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Bed size={24} />
              </div>

              <h3>Check beds</h3>

              <p>
                See available beds before making a booking.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <CalendarCheck size={24} />
              </div>

              <h3>Manage bookings</h3>

              <p>
                Keep track of your hospital bookings from
                your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   LOGIN
========================================================= */

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await API.post("/login", form);

      const data = response.data;

      const token = data.token;

      if (!token) {
        throw new Error("Token was not returned by server.");
      }

      localStorage.setItem("token", token);

      const user =
        data.patient ||
        data.user ||
        data.data ||
        null;

      if (user) {
        saveUser(user);
      }

      navigate("/patient/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to login."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="container auth-container">
        <div className="auth-card">
          <div className="auth-heading">
            <div className="auth-icon">
              <LogIn size={22} />
            </div>

            <span className="section-kicker">
              PATIENT LOGIN
            </span>

            <h1>Welcome back</h1>

            <p>
              Login to manage your healthcare bookings.
            </p>
          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              className="btn btn-primary btn-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{" "}
            <Link to="/signup">Create one</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   SIGNUP
========================================================= */

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await API.post("/signup", form);

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to create account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="container auth-container">
        <div className="auth-card">
          <div className="auth-heading">
            <div className="auth-icon">
              <UserPlus size={22} />
            </div>

            <span className="section-kicker">
              CREATE ACCOUNT
            </span>

            <h1>Get started</h1>

            <p>
              Create your patient account to book hospital
              beds.
            </p>
          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <button
              className="btn btn-primary btn-full"
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Creating account..."
                : "Create Account"}
            </button>
          </form>

          <div className="auth-footer">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   HOSPITALS
========================================================= */

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const loadHospitals = async () => {
    try {
      setLoading(true);
      setError("");

      /*
        CURRENT BACKEND:
        GET /api/v1/Hospital/list
      */

      const response = await API.get("/Hospital/list");

      const data = Array.isArray(response.data)
        ? response.data
        : response.data.hospitals || [];

      setHospitals(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load hospitals."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHospitals();
  }, []);

  const filteredHospitals = hospitals.filter((hospital) => {
    const value = search.toLowerCase();

    return (
      hospital.name?.toLowerCase().includes(value) ||
      hospital.location?.toLowerCase().includes(value)
    );
  });

  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <div>
            <span className="section-kicker">
              HEALTHCARE NETWORK
            </span>

            <h1>Find a hospital</h1>

            <p>
              Explore hospitals and check available beds.
            </p>
          </div>
        </div>

        <div className="search-box">
          <Search size={19} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by hospital or location..."
          />
        </div>

        {loading && (
          <LoadingState text="Loading hospitals..." />
        )}

        {!loading && error && (
          <ErrorState
            message={error}
            onRetry={loadHospitals}
          />
        )}

        {!loading &&
          !error &&
          filteredHospitals.length === 0 && (
            <EmptyState
              icon={<Hospital size={28} />}
              title="No hospitals found"
              text="Try another hospital or location."
            />
          )}

        {!loading &&
          !error &&
          filteredHospitals.length > 0 && (
            <div className="hospital-grid">
              {filteredHospitals.map((hospital) => (
                <HospitalCard
                  key={hospital._id}
                  hospital={hospital}
                />
              ))}
            </div>
          )}
      </div>
    </main>
  );
}

/* =========================================================
   HOSPITAL CARD
========================================================= */

function HospitalCard({ hospital }) {
  return (
    <Link
      to={`/hospitals/${hospital._id}`}
      className="hospital-card"
    >
      <div className="hospital-card-top">
        <div className="hospital-card-icon">
          <Hospital size={25} />
        </div>

        <ChevronRight size={19} />
      </div>

      <span className="section-kicker">HOSPITAL</span>

      <h3>{hospital.name}</h3>

      <div className="hospital-location">
        <MapPin size={16} />

        <span>
          {hospital.location || "Location unavailable"}
        </span>
      </div>

      <div className="hospital-card-footer">
        <span>
          <Bed size={16} />
          {hospital.availableBeds ?? 0} beds available
        </span>
      </div>
    </Link>
  );
}

/* =========================================================
   HOSPITAL DETAILS
========================================================= */

function HospitalDetails() {
  const { hospitalId } = useParams();
  const navigate = useNavigate();

  const [hospital, setHospital] = useState(null);
  const [beds, setBeds] = useState([]);

  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] =
    useState(false);

  const [error, setError] = useState("");
  const [bookingMessage, setBookingMessage] =
    useState("");

  useEffect(() => {
    loadHospitalDetails();
  }, [hospitalId]);

  const loadHospitalDetails = async () => {
    try {
      setLoading(true);
      setError("");

      /*
        CURRENT BACKEND DOES NOT HAVE:
        GET /Hospital/:id

        Therefore we use:
        GET /Hospital/list

        and find the hospital locally.
      */

      const hospitalResponse =
        await API.get("/Hospital/list");

      const hospitals = Array.isArray(
        hospitalResponse.data
      )
        ? hospitalResponse.data
        : hospitalResponse.data.hospitals || [];

      const selectedHospital = hospitals.find(
        (item) => item._id === hospitalId
      );

      if (!selectedHospital) {
        throw new Error("Hospital not found.");
      }

      setHospital(selectedHospital);

      /*
        CURRENT BACKEND:
        GET /api/v1/bed

        It requires authentication.
      */

      const bedResponse = await API.get("/bed", {
        headers: authHeaders(),
      });

      const allBeds = Array.isArray(bedResponse.data)
        ? bedResponse.data
        : bedResponse.data.beds || [];

      /*
        Filter beds belonging to this hospital.
        Handles both populated and ObjectId forms.
      */

      const hospitalBeds = allBeds.filter((bed) => {
        const bedHospital =
          typeof bed.hospital === "object"
            ? bed.hospital?._id
            : bed.hospital;

        return bedHospital === hospitalId;
      });

      setBeds(hospitalBeds);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to load hospital details."
      );
    } finally {
      setLoading(false);
    }
  };

  const bookBed = async (bed) => {
    try {
      setBookingLoading(true);
      setBookingMessage("");

      const user = getStoredUser();

      if (!user?.id) {
        navigate("/login");
        return;
      }

      /*
        CURRENT BACKEND:
        POST /api/v1/BOOK
      */

      await API.post(
        "/BOOK",
        {
          patient: user.id,
          hospital: hospitalId,
          bed: bed._id,
        },
        {
          headers: authHeaders(),
        }
      );

      setBookingMessage(
        "Bed booked successfully."
      );

      await loadHospitalDetails();
    } catch (err) {
      setBookingMessage(
        err.response?.data?.message ||
          "Unable to book this bed."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="page">
        <div className="container">
          <LoadingState text="Loading hospital..." />
        </div>
      </main>
    );
  }

  if (error || !hospital) {
    return (
      <main className="page">
        <div className="container">
          <ErrorState
            message={error || "Hospital not found."}
            onRetry={loadHospitalDetails}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container">
        <button
          className="back-button"
          onClick={() => navigate("/hospitals")}
        >
          ← Back to hospitals
        </button>

        <div className="hospital-details-header">
          <div className="hospital-details-icon">
            <Hospital size={34} />
          </div>

          <div>
            <span className="section-kicker">
              HOSPITAL
            </span>

            <h1>{hospital.name}</h1>

            <p>
              <MapPin size={17} />
              {hospital.location}
            </p>
          </div>
        </div>

        {bookingMessage && (
          <div className="form-message">
            {bookingMessage}
          </div>
        )}

        <div className="hospital-info-grid">
          <div className="info-card">
            <Bed size={21} />

            <span className="section-kicker">
              TOTAL BEDS
            </span>

            <strong>
              {hospital.totalBeds ?? beds.length}
            </strong>
          </div>

          <div className="info-card">
            <CheckCircle2 size={21} />

            <span className="section-kicker">
              AVAILABLE
            </span>

            <strong>
              {hospital.availableBeds ?? 0}
            </strong>
          </div>

          <div className="info-card">
            <Phone size={21} />

            <span className="section-kicker">
              CONTACT
            </span>

            <strong>
              {hospital.contact || "Not available"}
            </strong>
          </div>
        </div>

        <div className="section-heading">
          <span className="section-kicker">
            BED AVAILABILITY
          </span>

          <h2>Available beds</h2>

          <p>
            Select an available bed to create a booking.
          </p>
        </div>

        {beds.length === 0 ? (
          <EmptyState
            icon={<Bed size={28} />}
            title="No beds found"
            text="There are currently no beds available for this hospital."
          />
        ) : (
          <div className="beds-grid">
            {beds.map((bed) => {
              const available =
                bed.status === "available";

              return (
                <div
                  key={bed._id}
                  className="bed-card"
                >
                  <div className="bed-card-icon">
                    <Bed size={23} />
                  </div>

                  <div>
                    <span className="section-kicker">
                      BED
                    </span>

                    <h3>
                      {bed.bedNumber ||
                        bed.number ||
                        bed._id}
                    </h3>
                  </div>

                  <span
                    className={`bed-status ${
                      available
                        ? "available"
                        : "occupied"
                    }`}
                  >
                    {bed.status}
                  </span>

                  {available && (
                    <button
                      className="btn btn-primary"
                      disabled={bookingLoading}
                      onClick={() => bookBed(bed)}
                    >
                      {bookingLoading
                        ? "Booking..."
                        : "Book bed"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

/* =========================================================
   PATIENT DASHBOARD
========================================================= */

function PatientDashboard() {
  const navigate = useNavigate();

  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
    IMPORTANT:
    Backend route is:

    GET /api/v1/patient/dashboard

    Therefore frontend MUST use:

    /patient/dashboard
  */

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get(
        "/patient/dashboard",
        {
          headers: authHeaders(),
        }
      );

      setDashboard(
        response.data?.dashboard ||
          response.data ||
          null
      );
    } catch (err) {
      if (err.response?.status === 401) {
        logoutUser();
        navigate("/login");
        return;
      }

      setError(
        err.response?.data?.message ||
          "Unable to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <div>
            <span className="section-kicker">
              PATIENT AREA
            </span>

            <h1>Dashboard</h1>

            <p>
              Manage your healthcare activity from one
              place.
            </p>
          </div>
        </div>

        {loading && (
          <LoadingState text="Loading dashboard..." />
        )}

        {!loading && error && (
          <ErrorState
            message={error}
            onRetry={loadDashboard}
          />
        )}

        {!loading && !error && dashboard && (
          <div className="dashboard-grid">
            <div className="dashboard-main-card">
              <div className="dashboard-card-header">
                <div>
                  <span className="section-kicker">
                    ACTIVE BOOKING
                  </span>

                  <h2>Your current booking</h2>
                </div>

                <span className="status-badge">
                  <span />
                  Active
                </span>
              </div>

              <div className="dashboard-booking">
                <div className="dashboard-hospital-icon">
                  <Hospital size={28} />
                </div>

                <div className="dashboard-booking-info">
                  <h3>
                    {dashboard.hospital?.name ||
                      "Hospital"}
                  </h3>

                  <div>
                    <User size={16} />

                    {dashboard.patient?.name ||
                      getStoredUser()?.name}
                  </div>

                  <div>
                    <Clock3 size={16} />
                    Booking confirmed
                  </div>
                </div>
              </div>

              <div className="dashboard-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    navigate("/patient/bookings")
                  }
                >
                  View all bookings
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate("/hospitals")
                  }
                >
                  Find another hospital
                </button>
              </div>
            </div>

            <div className="dashboard-side-card">
              <div className="dashboard-side-icon">
                <User size={21} />
              </div>

              <span className="section-kicker">
                PATIENT PROFILE
              </span>

              <h3>
                {dashboard.patient?.name ||
                  getStoredUser()?.name}
              </h3>

              <p>
                {dashboard.patient?.email ||
                  getStoredUser()?.email}
              </p>

              <div className="profile-divider" />

              <div className="profile-item">
                <ShieldCheck size={17} />
                <span>Account protected</span>
              </div>
            </div>
          </div>
        )}

        {!loading &&
          !error &&
          !dashboard && (
            <div className="no-booking-card">
              <div className="empty-icon">
                <CalendarCheck size={28} />
              </div>

              <span className="section-kicker">
                NO ACTIVE BOOKING
              </span>

              <h2>
                You don't have an active booking.
              </h2>

              <p>
                Explore hospitals and find an available
                bed when you need one.
              </p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  navigate("/hospitals")
                }
              >
                Explore Hospitals
                <ArrowRight size={17} />
              </button>
            </div>
          )}
      </div>
    </main>
  );
}

/* =========================================================
   MY BOOKINGS
========================================================= */

function MyBookings() {
  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const loadBookings = async () => {
    try {
      setLoading(true);
      setError("");

      /*
        CURRENT BACKEND:
        GET /api/v1/BOOK
      */

      const response = await API.get(
        "/BOOK",
        {
          headers: authHeaders(),
        }
      );

      const data = Array.isArray(
        response.data
      )
        ? response.data
        : response.data.bookings || [];

      const user = getStoredUser();

      const patientBookings = data.filter(
        (booking) => {
          const patientId =
            typeof booking.patient ===
            "object"
              ? booking.patient?._id
              : booking.patient;

          return (
            patientId === user?.id ||
            patientId === user?._id
          );
        }
      );

      setBookings(patientBookings);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load your bookings."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <div>
            <span className="section-kicker">
              PATIENT AREA
            </span>

            <h1>My bookings</h1>

            <p>
              View and manage your healthcare
              bookings.
            </p>
          </div>
        </div>

        {loading && (
          <LoadingState text="Loading bookings..." />
        )}

        {!loading && error && (
          <ErrorState
            message={error}
            onRetry={loadBookings}
          />
        )}

        {!loading &&
          !error &&
          bookings.length === 0 && (
            <EmptyState
              icon={<CalendarCheck size={28} />}
              title="No bookings yet"
              text="You haven't created any hospital bookings."
            />
          )}

        {!loading &&
          !error &&
          bookings.length > 0 && (
            <div className="bookings-list">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking._id}
                  booking={booking}
                  onRefresh={loadBookings}
                />
              ))}
            </div>
          )}
      </div>
    </main>
  );
}

/* =========================================================
   BOOKING CARD
========================================================= */

function BookingCard({
  booking,
  onRefresh,
}) {
  const [loading, setLoading] =
    useState(false);

  const updateBooking = async (
    status
  ) => {
    try {
      setLoading(true);

      /*
        CURRENT BACKEND:
        PUT /api/v1/Book/:id
      */

      await API.put(
        `/Book/${booking._id}`,
        { status },
        {
          headers: authHeaders(),
        }
      );

      await onRefresh();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to update booking."
      );
    } finally {
      setLoading(false);
    }
  };

  const hospitalName =
    typeof booking.hospital ===
    "object"
      ? booking.hospital?.name
      : "Hospital";

  const bedNumber =
    typeof booking.bed ===
    "object"
      ? booking.bed?.bedNumber ||
        booking.bed?.number
      : "Bed";

  return (
    <div className="booking-card">
      <div className="booking-card-icon">
        <Hospital size={24} />
      </div>

      <div className="booking-card-info">
        <span className="section-kicker">
          BOOKING
        </span>

        <h3>{hospitalName}</h3>

        <div className="booking-details">
          <span>
            <Bed size={16} />
            Bed {bedNumber}
          </span>

          <span>
            <Clock3 size={16} />
            {booking.status}
          </span>
        </div>
      </div>

      <div className="booking-card-actions">
        <span
          className={`booking-status ${booking.status}`}
        >
          {booking.status}
        </span>

        {booking.status === "booked" && (
          <button
            className="btn btn-danger-outline"
            disabled={loading}
            onClick={() =>
              updateBooking("cancelled")
            }
          >
            {loading
              ? "Updating..."
              : "Cancel booking"}
          </button>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   STATES
========================================================= */

function LoadingState({ text }) {
  return (
    <div className="state-card">
      <div className="loading-spinner" />

      <h3>{text}</h3>
    </div>
  );
}

function ErrorState({
  message,
  onRetry,
}) {
  return (
    <div className="state-card error-state">
      <div className="empty-icon error">
        <Activity size={27} />
      </div>

      <h3>Something went wrong</h3>

      <p>{message}</p>

      {onRetry && (
        <button
          className="btn btn-primary"
          onClick={onRetry}
        >
          Try again
        </button>
      )}
    </div>
  );
}

function EmptyState({
  icon,
  title,
  text,
}) {
  return (
    <div className="state-card">
      <div className="empty-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link
            to="/"
            className="footer-brand"
          >
            <span className="brand-mark">
              <HeartPulse size={18} />
            </span>

            SwasthSewa
          </Link>

          <p>
            A simpler way to discover hospitals and
            manage healthcare bookings.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>

          <Link to="/hospitals">
            Hospitals
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Sign up
          </Link>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SwasthSewa
          </span>

          <span>
            Healthcare management platform
          </span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/hospitals"
            element={<Hospitals />}
          />

          <Route
            path="/hospitals/:hospitalId"
            element={
              <ProtectedRoute>
                <HospitalDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/patient/dashboard"
            element={
              <ProtectedRoute>
                <PatientDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/patient/bookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
