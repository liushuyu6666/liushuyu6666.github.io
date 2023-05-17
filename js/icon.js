addTechStack(
  "tech-stack-1",
  getTechStackMap([
    "ts",
    "json",
    "github",
    "vscode",
    "mongodb",
    "jest",
    "mysql",
  ])
);

addTechStack(
  "tech-stack-2",
  getTechStackMap([
    "java",
    "json",
    "github",
    "springboot",
    "intellij",
    "gradle",
    "awss3",
    "awsec2"
  ])
);

function addTechStack(id, icons) {
  const techStack = document.getElementById(id);
  icons.forEach((icon) => {
    const span = document.createElement("span");
    span.title = icon.msg;
    span.className = icon.className;
    techStack.appendChild(span);
  });
}

function getTechStackMap(aliases) {
  const json = {
    java: { msg: "Java", className: "icon-java" },
    ts: { msg: "TypeScript", className: "icon-typescript" },
    json: { msg: "Json", className: "icon-json" },
    springboot: { msg: "Spring Boot", className: "icon-springboot" },
    github: { msg: "github", className: "icon-github" },
    mongodb: { msg: "Mongodb", className: "icon-mongodb" },
    intellij: { msg: "Intellij", className: "icon-intellij" },
    gradle: { msg: "Gradle", className: "icon-gradle" },
    awss3: { msg: "AWS S3", className: "icon-awss3" },
    jest: { msg: "Jest", className: "icon-jest" },
    vscode: { msg: "VS Code", className: "icon-vscode" },
    mysql: { msg: "mySQL", className: "icon-mysql" },
    awsec2: { msg: "AWS EC2", className: "icon-awsec2" },
  };
  return aliases.map((alias) => json[alias]);
}
