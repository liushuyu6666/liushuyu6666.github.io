insertPortfolioRow(
    "https://github.com/liushuyu6666/GitTool_TypeScript",
    "GitTool_TypeScript",
    "This application decrypts all Git objects to observe file changes along the commit timeline.",
    "tech-stack-1"
);

insertPortfolioRow(
    "https://github.com/liushuyu6666/Jupiter_Restaurant_Backend_SpringBoot",
    "Jupiter_Restaurant_Backend_SpringBoot",
    "A SpringBoot project that sets up an Uber-Eat like online dining platform, with a focus on learning SpringBoot and Reactjs.",
    "tech-stack-2"
);

insertPortfolioRow(
    "https://github.com/liushuyu6666/Jupiter_Restaurant_Frontend_Reactjs",
    "Jupiter_Restaurant_Frontend_Reactjs",
    "A SpringBoot project that sets up an Uber-Eat like online dining platform, with a focus on learning SpringBoot and Reactjs.",
    "tech-stack-3"
);

insertPortfolioRow(
    "https://github.com/liushuyu6666/ML_Python",
    "Machine Learning and Deep Learning",
    "Customize MLP, CNN, RNN network to classify MNIST and CIFAR-10. Use VAE and GAN to generate new images base on CIFAR-10.",
    "tech-stack-4"
)

function insertPortfolioRow(href, title, text, techStackId) {
  // Create the outer div with class "row"
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  // Create the column div with classes "col-md-12", "col-sm-12", and "portfolio-card"
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-md-12", "col-sm-12", "portfolio-card");

  // Create the anchor element with class "portfolio-title" and href attribute
  const anchor = document.createElement("a");
  anchor.classList.add("portfolio-title");
  anchor.href = href;
  anchor.textContent = title;

  // Create the portfolio description div with class "portfolio-description"
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("portfolio-description");
  descriptionDiv.textContent = text;

  // Create the tech stack div with class "portfolio-tech-stack" and id "tech-stack-1"
  const techStackDiv = document.createElement("div");
  techStackDiv.classList.add("portfolio-tech-stack");
  techStackDiv.id = techStackId;

  // Create the header element with class "header" and text content "tech stack:"
  const header = document.createElement("b");
  header.classList.add("header");
  header.textContent = "tech stack:";

  // Append the header element to the tech stack div
  techStackDiv.appendChild(header);

  // Append the anchor, description, and tech stack div to the column div
  colDiv.appendChild(anchor);
  colDiv.appendChild(descriptionDiv);
  colDiv.appendChild(techStackDiv);

  // Append the column div to the row div
  rowDiv.appendChild(colDiv);

  // Append the row div to the document body or any other desired element
  const portfolioBar = document.getElementById("portfolio-bar");
  portfolioBar.append(rowDiv);
}
