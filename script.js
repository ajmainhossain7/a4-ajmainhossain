let currentTab = "all";

let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "not"
  },
  {
    id: 2,
    companyName: "WebPro Agency",
    position: "Vue.js Developer",
    location: "New York",
    type: "Part-time",
    salary: "$90,000 - $120,000",
    description: "Develop modern web apps using Vue.js.",
    status: "not"
  },
  {
    id: 3,
    companyName: "CloudRise Inc",
    position: "DevOps Engineer",
    location: "Texas",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Maintain CI/CD pipelines and cloud systems.",
    status: "not"
  },
  {
    id: 4,
    companyName: "StartupX",
    position: "Full Stack Engineer",
    location: "Boston",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Build scalable full-stack web applications.",
    status: "not"
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "not"
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY ",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "not"
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote ",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "not"
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA ",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "not"
  },
];
function renderJobs() {

  const container = document.getElementById("jobsContainer");
  const noJobs = document.getElementById("noJobs");
  container.innerHTML = "";

  let filtered = jobs.filter(job => {
    if (currentTab === "all") return true;
    if (currentTab === "interview") return job.status === "interview";
    if (currentTab === "rejected") return job.status === "rejected";
  });

  const totalJobs = jobs.length;
  const filteredJobs = filtered.length;

  if (currentTab === "all") {
    document.getElementById("tabCount").innerText =
      `${totalJobs} Jobs`;
  } else {
    document.getElementById("tabCount").innerText =
      `${filteredJobs} of ${totalJobs} Jobs`;
  }

  if (filtered.length === 0) {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }

  filtered.forEach(job => {

    container.innerHTML += `
      <div class="bg-white p-6 rounded-lg shadow-sm">

        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-semibold text-lg">${job.companyName}</h3>
            <p class="text-gray-600">${job.position}</p>
            <p class="text-sm text-gray-500">
              ${job.location} • ${job.type} • ${job.salary}
            </p>
          </div>

          <button onclick="deleteJob(${job.id})"
            class="hover:text-red-600 cursor-pointer"><i class="fa-regular fa-trash-can"></i></button>
        </div>
        <div class="flex justify-between items-center mt-4">
          <span class="
            px-3 py-1 rounded-xs font-medium
            ${job.status === "interview" ? "bg-green-100 text-green-700" :
        job.status === "rejected" ? "bg-red-100 text-red-700" :
          "bg-gray-200 text-gray-700"}
          ">
            ${job.status === "interview" ? "Interview" :
        job.status === "rejected" ? "Rejected" :
          "Not Applied"}
          </span>

        </div>

        <p class="my-3 text-gray-600 text-sm">
          ${job.description}
        </p>
        <div class="flex gap-2">
            <button onclick="updateStatus(${job.id}, 'interview')"
              class="px-3 py-1  border-2 border-green-600 font-semibold text-green-600 hover:bg-green-300 cursor-pointer rounded">
              Interview
            </button>

            <button onclick="updateStatus(${job.id}, 'rejected')"
              class="px-3 py-1  border-2 border-red-600 font-semibold text-red-600 hover:bg-red-300 cursor-pointer rounded">
              Rejected
            </button>
          </div>


      </div>
    `;
  });

  updateDashboard();
}

function updateStatus(id, status) {

  jobs = jobs.map(job => {
    if (job.id === id) {
      if (job.status === status) {
        return job;
      }
      job.status = status;
    }

    return job;
  });

  renderJobs();
}

function deleteJob(id) {
  jobs = jobs.filter(job => job.id !== id);
  renderJobs();
}

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;

  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

function changeTab(tab, btn) {
  currentTab = tab;

  document.querySelectorAll(".tabBtn")
    .forEach(b => b.classList.remove("activeTab"));

  btn.classList.add("activeTab");

  renderJobs();
}

renderJobs();