const Hospital = require("./model/hospital");
const Bed = require("./model/bedModel")

const hospitals = [
  {
    name: "Swasthya Care Hospital",
    location: "Civil Lines, Agra",
    totalBeds: 10,
    availableBeds: 7,
    contactNumber: "9876501001",
  },
  {
    name: "City General Hospital",
    location: "Sanjay Place, Agra",
    totalBeds: 10,
    availableBeds: 6,
    contactNumber: "9876501002",
  },
  {
    name: "LifeCare Hospital",
    location: "Kamla Nagar, Agra",
    totalBeds: 8,
    availableBeds: 5,
    contactNumber: "9876501003",
  },
  {
    name: "Shanti Medical Hospital",
    location: "Fatehabad Road, Agra",
    totalBeds: 8,
    availableBeds: 4,
    contactNumber: "9876501004",
  },
  {
    name: "CarePoint Hospital",
    location: "Sikandra, Agra",
    totalBeds: 10,
    availableBeds: 7,
    contactNumber: "9876501005",
  },
];

const autoSeed = async () => {
  try {
    const hospitalCount = await Hospital.countDocuments();

    // Database already has hospitals
    if (hospitalCount > 0) {
      console.log("Hospital data already exists. Skipping seed.");
      return;
    }

    // Create hospitals
    const createdHospitals = await Hospital.insertMany(hospitals);

    console.log(`${createdHospitals.length} hospitals seeded.`);

    // Create beds for each hospital
    const beds = [];

    for (const hospital of createdHospitals) {
      for (let i = 1; i <= hospital.totalBeds; i++) {
        beds.push({
          hospital: hospital._id,
          bedNumber: `${hospital._id.toString().slice(-4)}-${i}`,
          status:
            i <= hospital.availableBeds
              ? "available"
              : "occupied",
        });
      }
    }

    await Bed.insertMany(beds);

    console.log(`${beds.length} beds seeded.`);
    console.log("Auto-seeding completed successfully.");
  } catch (error) {
    console.error("Auto-seeding failed:", error.message);
  }
};

module.exports = autoSeed;