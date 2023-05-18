insertSkillRow([
  ["TS & JS", 0.8],
  ["java", 0.75],
  ["python", 0.6],
]);

insertSkillRow([
  ["ReactJs", 0.8],
  ["Spring Boot", 0.8],
  ["Apollo", 0.9],
]);

insertSkillRow([
  ["Mongodb", 0.8],
  ["AWS", 0.3],
  ["GraphQL", 0.7],
]);

insertSkillRow([
    ["Circle CI", 0.3],
    ["Git", 0.9],
    ["Kubernetes", 0.1],
  ]);

// progress should be a float number
function insertSkillElement(skillTitle, progress) {
  // Create the outer div with class "col-4"
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-4");

  // Create the skill title div with text content "JS & TS"
  const skillTitleDiv = document.createElement("div");
  skillTitleDiv.classList.add("skill-title");
  skillTitleDiv.textContent = skillTitle;

  // Create the progress div with role, aria attributes, and inline style
  const progressDiv = document.createElement("div");
  progressDiv.classList.add("progress");
  progressDiv.setAttribute("role", "progressbar");
  progressDiv.setAttribute("aria-label", "Basic example");
  progressDiv.setAttribute("aria-valuenow", "25");
  progressDiv.setAttribute("aria-valuemin", "0");
  progressDiv.setAttribute("aria-valuemax", "100");
  progressDiv.style.height = "7px";

  // Create the progress bar div with class "progress-bar" and inline style
  const progressBarDiv = document.createElement("div");
  let proficiency;
  if (progress > 0.79) {
    proficiency = "master";
  } else if (progress > 0.39) {
    proficiency = "intermediate";
  } else {
    proficiency = "junior";
  }
  progressBarDiv.classList.add("progress-bar", proficiency);
  const percentage = (progress * 100).toFixed(2) + "%";
  progressBarDiv.style.width = percentage;
  progressBarDiv.style.height = "7px";

  // Append the progress bar div to the progress div
  progressDiv.appendChild(progressBarDiv);

  // Append the skill title div and progress div to the outer div
  colDiv.appendChild(skillTitleDiv);
  colDiv.appendChild(progressDiv);

  // Append the outer div to the document body or any other desired element
  return colDiv;
}

/*
skillMap = [
    [skillTitle, progress],
    [skillTitle, progress],
    [skillTitle, progress]
] */
function insertSkillRow(skillMap) {
  // Create the outer div with class "col-4"
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  skillMap.forEach((skillSet) => {
    rowDiv.appendChild(insertSkillElement(skillSet[0], skillSet[1]));
  });

  const skillBar = document.getElementById("skill-bar");
  skillBar.appendChild(rowDiv);
}
