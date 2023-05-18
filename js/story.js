addStoryLine(3);

addStoryJobCard(1, 1, "Foxquilt Insurance Services Inc", "08/2021 - 03/2023");

addStoryJobCard(5, 2, "FineReport Reporting Software", "07/2017 - 10/2018");

addStorySchoolCard(
  3,
  "University of Ottawa",
  "09/2019 - 06/2021",
  "Electrical and Computer Engineering",
  "Master Degree"
);

addStorySchoolCard(
  7,
  "China University of Geosciences",
  "09/2013 - 06/2017",
  "Electronic Information Engineering",
  "Bachelor Degree"
);

function addStoryLine(length) {
  const story = document.getElementById("story");
  for (let i = 1; i <= length; i++) {
    const row = i * 2;
    const next = row + 1;

    const storyLineLeft1 = document.createElement("div");
    storyLineLeft1.className = `story-line-left-${row} story-dot`;

    const storyLineRight1 = document.createElement("div");
    storyLineRight1.className = `story-line-right-${row}`;

    const storyLineLeft2 = document.createElement("div");
    storyLineLeft2.className = `story-line-left-${next}`;

    const storyLineRight2 = document.createElement("div");
    storyLineRight2.className = `story-line-right-${next}`;

    story.appendChild(storyLineLeft1);
    story.appendChild(storyLineRight1);
    story.appendChild(storyLineLeft2);
    story.appendChild(storyLineRight2);
  }

  const endDot = document.createElement("div");
  endDot.className = "end-story-dot story-dot";

  story.appendChild(endDot);
}

function addStoryJobCard(row, id, companyName, timeDuration) {
  // Create a div element
  const storyCardLeft = document.createElement("div");
  storyCardLeft.className = `story-card-left-${row}`;

  // Create the container element
  const container = document.createElement("div");
  container.className = "container";

  // Create the row element
  const rowElement = document.createElement("div");
  rowElement.className = "row";

  // Create the story-job-title element
  const jobTitle = document.createElement("div");
  jobTitle.className = "col-sm-12 story-job-title";
  jobTitle.textContent = companyName;

  // Create the story-job-time element
  const jobTime = document.createElement("div");
  jobTime.className = "col-sm-12 story-job-time";
  jobTime.textContent = timeDuration;

  // Create the story-tech-stack element
  const techStack = document.createElement("div");
  techStack.className = "col-sm-12 story-tech-stack";
  techStack.id = `story-tech-stack-${id}`;

  // Create the story-tech-stack-header element
  const techStackHeader = document.createElement("b");
  techStackHeader.className = "story-tech-stack-header";
  techStackHeader.textContent = "tech stack:";

  // Append the elements in the proper hierarchy
  techStack.appendChild(techStackHeader);
  rowElement.appendChild(jobTitle);
  rowElement.appendChild(jobTime);
  rowElement.appendChild(techStack);
  container.appendChild(rowElement);
  storyCardLeft.appendChild(container);

  // Insert the storyCardLeft element into the desired location in the DOM
  const story = document.getElementById("story");
  story.appendChild(storyCardLeft);
}

function addStorySchoolCard(row, schoolName, timeDuration, major, degree) {
  // Create a div element
  const storyCardRight = document.createElement("div");
  storyCardRight.className = `story-card-right-${row}`;

  // Create the container element
  const container = document.createElement("div");
  container.className = "container";

  // Create the row element
  const rowElement = document.createElement("div");
  rowElement.className = "row";

  // Create the story-school-title element
  const schoolTitle = document.createElement("div");
  schoolTitle.className = "col-sm-12 story-school-title";
  schoolTitle.textContent = schoolName;

  const timeAndDegree = document.createElement("div");
  timeAndDegree.className = "col-sm-12 story-school-time-and-degree";

  // Create the story-school-time element
  const schoolTime = document.createElement("div");
  schoolTime.className = "col-sm-12 story-school-time";
  schoolTime.textContent = timeDuration;

  // Create the story-school-degree element
  const schoolDegree = document.createElement("div");
  schoolDegree.className = "col-sm-12 story-school-degree";
  schoolDegree.textContent = degree;

  // Create the story-school-major element
  const schoolMajor = document.createElement("div");
  schoolMajor.className = "col-sm-12 story-school-major";
  schoolMajor.textContent = major;

  // Append the elements in the proper hierarchy
  timeAndDegree.appendChild(schoolTime);
  timeAndDegree.appendChild(schoolDegree);
  rowElement.appendChild(schoolTitle);
  rowElement.appendChild(timeAndDegree);
  rowElement.appendChild(schoolMajor);
  container.appendChild(rowElement);
  storyCardRight.appendChild(container);

  // Insert the storyCardLeft element into the desired location in the DOM
  const story = document.getElementById("story");
  story.appendChild(storyCardRight);
}
