const fs = require("fs");
const data = require("./lessons-config.json");
const template = fs.readFileSync("lesson-template.html", "utf8");

Object.keys(data).forEach(group => {
  data[group].forEach(lesson => {
    const content = template
      .replace(/{{TITLE}}/g, lesson.title)
      .replace("{{THEORY}}", "Nội dung lý thuyết chuẩn SGK.")
      .replace("{{EXAMPLE}}", "Ví dụ minh họa.")
      .replace("{{EXERCISES}}", "<li>Bài 1</li><li>Bài 2</li>");

    fs.writeFileSync(`lessons/${lesson.id}.html`, content);
  });
});
