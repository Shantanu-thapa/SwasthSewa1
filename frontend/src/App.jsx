```css
/* =========================================================
   RESET / GLOBAL
========================================================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary: #087f5b;
  --primary-dark: #056044;
  --primary-light: #e8f7f1;

  --text: #17201d;
  --text-secondary: #64716c;
  --muted: #89938f;

  --background: #f7f9f8;
  --surface: #ffffff;
  --border: #e2e8e5;

  --danger: #c0392b;
  --danger-light: #fff1ef;

  --success: #087f5b;

  --shadow-sm: 0 2px 8px rgba(20, 40, 32, 0.05);
  --shadow-md: 0 8px 30px rgba(20, 40, 32, 0.08);
  --shadow-lg: 0 18px 50px rgba(20, 40, 32, 0.12);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;

  --container: 1180px;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background: var(--background);
  color: var(--text);

  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app > main {
  flex: 1;
}

.container {
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;

  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(14px);

  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  width: min(var(--container), calc(100% - 40px));
  min-height: 76px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;

  flex-shrink: 0;
}

.brand-mark {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 11px;

  background: var(--primary);
  color: white;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-name {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.3px;
}

.brand-tagline {
  margin-top: 3px;

  color: var(--muted);
  font-size: 10px;
  font-weight: 500;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;

  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 600;
}

.nav-links > a {
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.nav-links > a:hover {
  color: var(--primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 5px;
}

.nav-login {
  color: var(--text);
}

.nav-user-area {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-user {
  display: flex;
  align-items: center;
  gap: 7px;

  color: var(--text);
  font-size: 13px;
}

.nav-logout {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  border: 0;
  background: transparent;

  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 600;
}

.nav-logout:hover {
  color: var(--danger);
}

.mobile-menu {
  display: none;

  border: 0;
  background: transparent;

  color: var(--text);
}


/* =========================================================
   BUTTONS
========================================================= */

.btn {
  min-height: 44px;
  padding: 0 18px;

  border-radius: 10px;
  border: 1px solid transparent;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 700;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--primary-dark);
  box-shadow: 0 7px 18px rgba(8, 127, 91, 0.18);
}

.btn-secondary {
  background: white;
  color: var(--text);
  border-color: var(--border);
}

.btn-secondary:hover:not(:disabled) {
  border-color: #c7d2cd;
  background: #fbfcfc;
}

.btn-small {
  min-height: 38px;
  padding: 0 15px;
  font-size: 13px;
}

.btn-large {
  min-height: 50px;
  padding: 0 22px;
}

.btn-full {
  width: 100%;
}

.btn-danger-outline {
  background: transparent;
  border-color: #e4b5ae;
  color: var(--danger);
}

.btn-danger-outline:hover:not(:disabled) {
  background: var(--danger-light);
  border-color: #d89990;
}


/* =========================================================
   HERO
========================================================= */

.hero {
  position: relative;
  overflow: hidden;

  min-height: 650px;

  background: #f8fbfa;
  border-bottom: 1px solid var(--border);
}

.hero-background {
  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at 82% 25%,
      rgba(8, 127, 91, 0.11),
      transparent 28%
    ),
    radial-gradient(
      circle at 15% 85%,
      rgba(8, 127, 91, 0.07),
      transparent 25%
    );
}

.hero-content {
  position: relative;
  z-index: 1;

  min-height: 650px;

  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;

  gap: 70px;

  padding-top: 70px;
  padding-bottom: 70px;
}

.hero-copy {
  max-width: 680px;
}

.eyebrow {
  width: fit-content;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 7px 11px;

  border: 1px solid #cde8dd;
  border-radius: 999px;

  background: #eef9f4;

  color: var(--primary);
  font-size: 12px;
  font-weight: 700;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;
  background: var(--primary);
}

.hero h1 {
  max-width: 680px;

  margin-top: 22px;

  font-size: clamp(42px, 5vw, 68px);
  line-height: 1.02;
  letter-spacing: -3px;
  font-weight: 800;
}

.hero h1 span {
  display: block;
  color: var(--primary);
}

.hero-copy > p {
  max-width: 590px;

  margin-top: 24px;

  color: var(--text-secondary);

  font-size: 17px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 32px;
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 28px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 7px;

  color: var(--text-secondary);

  font-size: 12px;
  font-weight: 600;
}

.trust-item svg {
  color: var(--primary);
}

.hero-card {
  padding: 28px;

  border: 1px solid var(--border);
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.9);

  box-shadow: var(--shadow-lg);

  transform: rotate(1deg);
}

.hero-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;
}

.small-label {
  color: var(--muted);

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
}

.hero-card h3 {
  margin-top: 7px;

  font-size: 22px;
  letter-spacing: -0.5px;
}

.hero-card-icon {
  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 13px;

  background: var(--primary-light);
  color: var(--primary);
}

.hero-search {
  min-height: 58px;

  margin-top: 28px;
  padding: 0 17px;

  display: flex;
  align-items: center;
  gap: 11px;

  border: 1px solid var(--border);
  border-radius: 12px;

  background: #fafcfb;

  color: var(--muted);
  font-size: 13px;
}

.hero-stat {
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 18px;

  border-top: 1px solid var(--border);
}

.hero-stat > div {
  padding: 22px 10px 4px;
}

.hero-stat > div + div {
  border-left: 1px solid var(--border);
  padding-left: 22px;
}

.hero-stat strong {
  display: block;

  color: var(--primary);

  font-size: 25px;
  line-height: 1.1;
}

.hero-stat span {
  display: block;

  margin-top: 5px;

  color: var(--muted);

  font-size: 11px;
}


/* =========================================================
   SECTIONS
========================================================= */

.section {
  padding: 100px 0;
}

.section-heading {
  max-width: 670px;
  margin-bottom: 42px;
}

.section-kicker {
  display: block;

  color: var(--primary);

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.section-heading h2 {
  margin-top: 10px;

  font-size: clamp(30px, 4vw, 43px);
  line-height: 1.15;
  letter-spacing: -1.5px;
}

.section-heading p {
  margin-top: 13px;

  color: var(--text-secondary);
  font-size: 15px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  padding: 28px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: white;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 13px;

  background: var(--primary-light);
  color: var(--primary);
}

.feature-card h3 {
  margin-top: 22px;

  font-size: 18px;
}

.feature-card p {
  margin-top: 9px;

  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.7;
}


/* =========================================================
   GENERAL PAGE
========================================================= */

.page {
  min-height: calc(100vh - 76px);
  padding: 65px 0 90px;
}

.page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 30px;

  margin-bottom: 30px;
}

.page-header h1 {
  margin-top: 8px;

  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.1;
  letter-spacing: -1.7px;
}

.page-header p {
  margin-top: 10px;

  color: var(--text-secondary);
  font-size: 14px;
}


/* =========================================================
   SEARCH
========================================================= */

.search-box {
  max-width: 600px;

  min-height: 52px;

  display: flex;
  align-items: center;
  gap: 11px;

  margin-bottom: 35px;
  padding: 0 16px;

  border: 1px solid var(--border);
  border-radius: 11px;

  background: white;

  box-shadow: var(--shadow-sm);
}

.search-box svg {
  color: var(--muted);
  flex-shrink: 0;
}

.search-box input {
  width: 100%;

  border: 0;
  outline: 0;

  background: transparent;

  color: var(--text);
  font-size: 14px;
}

.search-box input::placeholder {
  color: #9aa49f;
}


/* =========================================================
   HOSPITAL GRID
========================================================= */

.hospital-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 18px;
}

.hospital-card {
  min-width: 0;

  padding: 24px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: white;

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.hospital-card:hover {
  transform: translateY(-4px);

  border-color: #cbdcd5;

  box-shadow: var(--shadow-md);
}

.hospital-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 22px;

  color: var(--muted);
}

.hospital-card-icon {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 13px;

  background: var(--primary-light);
  color: var(--primary);
}

.hospital-card h3 {
  margin-top: 8px;

  font-size: 19px;
  line-height: 1.3;
}

.hospital-location {
  display: flex;
  align-items: flex-start;
  gap: 7px;

  margin-top: 12px;

  color: var(--text-secondary);
  font-size: 13px;
}

.hospital-location svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--primary);
}

.hospital-card-footer {
  margin-top: 24px;
  padding-top: 16px;

  border-top: 1px solid var(--border);

  color: var(--primary);

  font-size: 12px;
  font-weight: 700;
}

.hospital-card-footer span {
  display: flex;
  align-items: center;
  gap: 7px;
}


/* =========================================================
   HOSPITAL DETAILS
========================================================= */

.back-button {
  display: inline-flex;
  align-items: center;

  border: 0;
  background: transparent;

  color: var(--text-secondary);

  font-size: 13px;
  font-weight: 600;
}

.back-button:hover {
  color: var(--primary);
}

.hospital-details-header {
  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 34px;
  padding-bottom: 35px;

  border-bottom: 1px solid var(--border);
}

.hospital-details-icon {
  width: 72px;
  height: 72px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 19px;

  background: var(--primary-light);
  color: var(--primary);
}

.hospital-details-header h1 {
  margin-top: 5px;

  font-size: clamp(30px, 4vw, 45px);
  line-height: 1.1;
  letter-spacing: -1.5px;
}

.hospital-details-header p {
  display: flex;
  align-items: center;
  gap: 7px;

  margin-top: 8px;

  color: var(--text-secondary);
  font-size: 13px;
}

.hospital-details-header p svg {
  color: var(--primary);
}

.hospital-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 15px;

  margin: 30px 0 70px;
}

.info-card {
  padding: 22px;

  border: 1px solid var(--border);
  border-radius: var(--radius-md);

  background: white;
}

.info-card svg {
  color: var(--primary);
}

.info-card .section-kicker {
  margin-top: 18px;
}

.info-card strong {
  display: block;

  margin-top: 4px;

  color: var(--text);

  font-size: 20px;
  line-height: 1.4;
}

.form-message {
  margin-top: 25px;
  padding: 13px 15px;

  border: 1px solid #cde8dd;
  border-radius: 10px;

  background: #eef9f4;

  color: var(--primary);

  font-size: 13px;
  font-weight: 600;
}


/* =========================================================
   BEDS
========================================================= */

.beds-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 16px;
}

.bed-card {
  display: flex;
  flex-direction: column;

  min-height: 230px;

  padding: 22px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: white;

  box-shadow: var(--shadow-sm);
}

.bed-card-icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: var(--primary-light);
  color: var(--primary);

  margin-bottom: 18px;
}

.bed-card h3 {
  margin-top: 5px;

  font-size: 17px;
}

.bed-status {
  width: fit-content;

  margin-top: 13px;
  padding: 5px 9px;

  border-radius: 999px;

  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}

.bed-status.available {
  background: var(--primary-light);
  color: var(--primary);
}

.bed-status.occupied {
  background: #f1f3f2;
  color: #78827e;
}

.bed-card .btn {
  width: 100%;
  margin-top: auto;
  padding-top: 12px;
}


/* =========================================================
   AUTH
========================================================= */

.auth-page {
  min-height: calc(100vh - 76px);

  display: flex;
  align-items: center;

  padding: 70px 0;

  background:
    radial-gradient(
      circle at 50% 20%,
      rgba(8, 127, 91, 0.06),
      transparent 35%
    );
}

.auth-container {
  display: flex;
  justify-content: center;
}

.auth-card {
  width: min(100%, 450px);

  padding: 36px;

  border: 1px solid var(--border);
  border-radius: 22px;

  background: white;

  box-shadow: var(--shadow-md);
}

.auth-heading {
  text-align: center;
  margin-bottom: 28px;
}

.auth-icon {
  width: 48px;
  height: 48px;

  margin: 0 auto 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background: var(--primary-light);
  color: var(--primary);
}

.auth-heading .section-kicker {
  text-align: center;
}

.auth-heading h1 {
  margin-top: 6px;

  font-size: 30px;
  letter-spacing: -1px;
}

.auth-heading p {
  margin-top: 7px;

  color: var(--text-secondary);
  font-size: 13px;
}

.auth-card form {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-group label {
  color: var(--text);

  font-size: 12px;
  font-weight: 700;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;

  min-height: 47px;

  padding: 0 13px;

  border: 1px solid var(--border);
  border-radius: 9px;

  outline: none;

  background: #fcfdfd;

  color: var(--text);

  font-size: 13px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #8ac7b2;

  box-shadow: 0 0 0 3px rgba(8, 127, 91, 0.08);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #a0aaa6;
}

.form-error {
  margin-bottom: 18px;
  padding: 11px 13px;

  border: 1px solid #e7c0ba;
  border-radius: 9px;

  background: var(--danger-light);

  color: var(--danger);

  font-size: 12px;
  font-weight: 600;
}

.auth-footer {
  margin-top: 24px;

  text-align: center;

  color: var(--text-secondary);

  font-size: 12px;
}

.auth-footer a {
  color: var(--primary);
  font-weight: 700;
}


/* =========================================================
   DASHBOARD
========================================================= */

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.75fr;

  gap: 18px;
}

.dashboard-main-card,
.dashboard-side-card {
  padding: 27px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: white;
  box-shadow: var(--shadow-sm);
}

.dashboard-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;

  padding-bottom: 23px;

  border-bottom: 1px solid var(--border);
}

.dashboard-card-header h2 {
  margin-top: 5px;

  font-size: 21px;
  letter-spacing: -0.5px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 9px;

  border-radius: 999px;

  background: var(--primary-light);

  color: var(--primary);

  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}

.status-badge > span {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: var(--primary);
}

.dashboard-booking {
  display: flex;
  align-items: center;

  gap: 18px;

  padding: 27px 0;
}

.dashboard-hospital-icon {
  width: 62px;
  height: 62px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 17px;

  background: var(--primary-light);
  color: var(--primary);
}

.dashboard-booking-info h3 {
  font-size: 19px;
}

.dashboard-booking-info > div {
  display: flex;
  align-items: center;
  gap: 7px;

  margin-top: 6px;

  color: var(--text-secondary);
  font-size: 12px;
}

.dashboard-booking-info svg {
  color: var(--primary);
}

.dashboard-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  padding-top: 20px;

  border-top: 1px solid var(--border);
}

.dashboard-side-icon {
  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: var(--primary-light);
  color: var(--primary);

  margin-bottom: 19px;
}

.dashboard-side-card h3 {
  margin-top: 6px;

  font-size: 19px;
}

.dashboard-side-card > p {
  margin-top: 4px;

  color: var(--text-secondary);
  font-size: 12px;
  word-break: break-word;
}

.profile-divider {
  height: 1px;

  margin: 25px 0 18px;

  background: var(--border);
}

.profile-item {
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--primary);

  font-size: 12px;
  font-weight: 600;
}

.no-booking-card {
  max-width: 650px;

  margin: 20px auto;
  padding: 50px 30px;

  border: 1px solid var(--border);
  border-radius: 20px;

  background: white;

  text-align: center;
}

.no-booking-card .empty-icon {
  margin: 0 auto 20px;
}

.no-booking-card h2 {
  margin-top: 8px;

  font-size: 23px;
}

.no-booking-card p {
  max-width: 450px;

  margin: 9px auto 25px;

  color: var(--text-secondary);
  font-size: 13px;
}


/* =========================================================
   BOOKINGS
========================================================= */

.bookings-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.booking-card {
  display: flex;
  align-items: center;

  gap: 18px;

  padding: 22px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: white;

  box-shadow: var(--shadow-sm);
}

.booking-card-icon {
  width: 52px;
  height: 52px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background: var(--primary-light);
  color: var(--primary);
}

.booking-card-info {
  flex: 1;
  min-width: 0;
}

.booking-card-info h3 {
  margin-top: 5px;

  font-size: 18px;
}

.booking-details {
  display: flex;
  flex-wrap: wrap;

  gap: 15px;

  margin-top: 7px;

  color: var(--text-secondary);

  font-size: 12px;
}

.booking-details span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.booking-details svg {
  color: var(--primary);
}

.booking-card-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 10px;
}

.booking-status {
  padding: 5px 9px;

  border-radius: 999px;

  background: var(--primary-light);

  color: var(--primary);

  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}

.booking-status.cancelled {
  background: var(--danger-light);
  color: var(--danger);
}


/* =========================================================
   LOADING / ERROR / EMPTY
========================================================= */

.state-card {
  min-height: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: white;

  text-align: center;
}

.state-card h3 {
  margin-top: 15px;

  font-size: 17px;
}

.state-card p {
  max-width: 450px;

  margin-top: 7px;

  color: var(--text-secondary);
  font-size: 13px;
}

.state-card .btn {
  margin-top: 18px;
}

.loading-spinner {
  width: 30px;
  height: 30px;

  border: 3px solid #dce9e4;
  border-top-color: var(--primary);

  border-radius: 50%;

  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.empty-icon {
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  background: var(--primary-light);
  color: var(--primary);
}

.empty-icon.error {
  background: var(--danger-light);
  color: var(--danger);
}


/* =========================================================
   FOOTER
========================================================= */

.footer {
  margin-top: auto;

  border-top: 1px solid var(--border);

  background: white;
}

.footer-inner {
  padding: 48px 0 25px;

  display: grid;
  grid-template-columns: 1.4fr 1fr;

  gap: 40px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  font-weight: 800;
}

.footer-brand .brand-mark {
  width: 34px;
  height: 34px;

  border-radius: 9px;
}

.footer-inner > div:first-child p {
  max-width: 400px;

  margin-top: 13px;

  color: var(--text-secondary);

  font-size: 12px;
  line-height: 1.7;
}

.footer-links {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 22px;

  color: var(--text-secondary);

  font-size: 12px;
  font-weight: 600;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  grid-column: 1 / -1;

  padding-top: 20px;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid var(--border);

  color: var(--muted);

  font-size: 10px;
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 950px) {
  .hero-content {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .hero-copy {
    max-width: 750px;
  }

  .hero-card {
    max-width: 600px;
    width: 100%;

    margin: 0 auto;
  }

  .hospital-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .beds-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}


/* =========================================================
   RESPONSIVE — MOBILE NAV
========================================================= */

@media (max-width: 780px) {
  .navbar-inner {
    min-height: 68px;
  }

  .mobile-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links {
    position: absolute;

    left: 20px;
    right: 20px;
    top: 72px;

    display: none;
    flex-direction: column;
    align-items: stretch;

    gap: 0;

    padding: 10px;

    border: 1px solid var(--border);
    border-radius: 14px;

    background: white;

    box-shadow: var(--shadow-lg);
  }

  .nav-links.nav-open {
    display: flex;
  }

  .nav-links > a {
    padding: 12px;

    border-radius: 8px;
  }

  .nav-links > a:hover {
    background: var(--background);
  }

  .nav-actions {
    flex-direction: column;
    align-items: stretch;

    gap: 5px;

    margin: 5px 0 0;
    padding-top: 8px;

    border-top: 1px solid var(--border);
  }

  .nav-login {
    padding: 12px;
  }

  .nav-user-area {
    flex-direction: column;
    align-items: stretch;

    gap: 5px;

    padding-top: 10px;
    margin-top: 5px;

    border-top: 1px solid var(--border);
  }

  .nav-user,
  .nav-logout {
    padding: 10px 12px;
  }

  .nav-logout {
    justify-content: flex-start;
  }

  .hero {
    min-height: auto;
  }

  .hero-content {
    min-height: auto;

    padding-top: 55px;
    padding-bottom: 60px;
  }

  .hero h1 {
    letter-spacing: -2px;
  }

  .hero-card {
    transform: none;
  }

  .page {
    padding-top: 45px;
  }

  .page-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .hospital-info-grid {
    grid-template-columns: 1fr;
  }
}


/* =========================================================
   RESPONSIVE — SMALL MOBILE
========================================================= */

@media (max-width: 600px) {
  .container,
  .navbar-inner {
    width: min(100% - 28px, var(--container));
  }

  .brand-tagline {
    display: none;
  }

  .brand-name {
    font-size: 16px;
  }

  .hero-content {
    padding-top: 42px;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero-copy > p {
    font-size: 14px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-trust {
    flex-direction: column;
    gap: 10px;
  }

  .hero-card {
    padding: 20px;
  }

  .section {
    padding: 70px 0;
  }

  .feature-grid,
  .hospital-grid,
  .beds-grid {
    grid-template-columns: 1fr;
  }

  .hospital-details-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .hospital-details-icon {
    width: 58px;
    height: 58px;
  }

  .auth-card {
    padding: 25px 20px;
  }

  .dashboard-main-card,
  .dashboard-side-card {
    padding: 21px;
  }

  .dashboard-booking {
    align-items: flex-start;
  }

  .dashboard-actions {
    flex-direction: column;
  }

  .dashboard-actions .btn {
    width: 100%;
  }

  .booking-card {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .booking-card-info {
    width: calc(100% - 70px);
  }

  .booking-card-actions {
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 13px;

    border-top: 1px solid var(--border);
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .footer-links {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 5px;
  }
}


/* =========================================================
   EXTRA SMALL
========================================================= */

@media (max-width: 400px) {
  .hero h1 {
    font-size: 35px;
  }

  .hero-stat {
    grid-template-columns: 1fr;
  }

  .hero-stat > div + div {
    border-left: 0;
    border-top: 1px solid var(--border);

    padding-left: 10px;
  }

  .dashboard-card-header {
    flex-direction: column;
  }

  .booking-card-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
```
