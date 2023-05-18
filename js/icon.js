addTechStack("tech-stack-1", [
  "ts",
  "json",
  "github",
  "vscode",
  "mongodb",
  "jest",
  "mysql",
]);

addTechStack("tech-stack-2", [
  "java",
  "json",
  "github",
  "springboot",
  "intellij",
  "gradle",
  "awss3",
  "awsec2",
  "jwt"
]);

addTechStack("tech-stack-3", [
  "js",
  "github",
  "reactjs",
  "webstorm",
  "reduxjs",
  "jwt"
]);

addTechStack("tech-stack-4", [
  "python",
  "colab",
  "jupyter",
  "pytorch",
  "tensorflow"
]);

addTechStack("story-tech-stack-1", [
  "ts",
  "apollo",
  "github",
  "vscode",
  "circleci",
  "graphql",
  "nodejs",
  "reactjs",
  "nextjs",
  "jira"
]);

addTechStack("story-tech-stack-2", [
  "mysql",
  "sqlserver",
  "oracle",
  "js",
  "html",
  "css",
  "sass",
  "tomcat",
  "redhat",
  "apache"
]);

function addTechStack(id, aliases) {
  const techStack = document.getElementById(id);
  icons = getTechStackMap(aliases);
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
    apollo: { msg: "Apollo Graphql", className: "icon-apollo" },
    circleci: { msg: "Circle CI", className: "icon-circleci" },
    graphql: { msg: "Graph QL", className: "icon-graphql" },
    nodejs: { msg: "Node.Js", className: "icon-nodejs" },
    reactjs: { msg: "React.Js", className: "icon-reactjs" },
    nextjs: { msg: "Next.Js", className: "icon-nextjs" },
    sqlserver: { msg: "SQL Server", className: "icon-sqlserver" },
    oracle: { msg: "ORACLE", className: "icon-oracle" },
    js: { msg: "JavaScript", className: "icon-js" },
    html: { msg: "HTML 5", className: "icon-html" },
    css: { msg: "CSS 3", className: "icon-css" },
    sass: { msg: "SASS", className: "icon-sass" },
    tomcat: { msg: "Tomcat", className: "icon-tomcat" },
    redhat: { msg: "Red Hat", className: "icon-redhat" },
    apache: { msg: "Apache", className: "icon-apache" },
    webstorm: { msg: "Web storm", className: "icon-webstorm" },
    reduxjs: { msg: "Redux.Js", className: "icon-reduxjs" },
    jwt: { msg: "JWT", className: "icon-jwt" },
    jira: { msg: "Jira", className: "icon-jira" },
    colab: { msg: "Colab", className: "icon-colab" },
    python: { msg: "python", className: "icon-python" },
    jupyter: { msg: "jupyter", className: "icon-jupyter" },
    numpy: { msg: "numpy", className: "icon-numpy" },
    pytorch: { msg: "pytorch", className: "icon-pytorch" },
    tensorflow: { msg: "tensorflow", className: "icon-tensorflow" },
  };
  return aliases.map((alias) => json[alias]);
}
