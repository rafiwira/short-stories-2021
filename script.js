document.getElementsByTagName("body").onLoad = loadPage();

function loadPage() {
  let newestChapter = Array.from(chapters()).length - 1;
  readTextFile(newestChapter);
}

function findChapter(n) {
  let convertChapter = Array.from(chapters())[n];
  console.log(convertChapter);
  return convertChapter;
}

// code by https://stackoverflow.com/a/14446538
function readTextFile(n) {
  var rawFile = new XMLHttpRequest();
  console.log(findChapter(n));
  rawFile.open("GET", "stories/" + findChapter(n), false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        // console.log("rTF pass");
        let display = document.getElementById("story");
        let convertText = parseMarkdown(allText);

        display.innerHTML = `${convertText}`;
      }
    }
  };
  rawFile.send(null);
}

// code by https://www.bigomega.dev/markdown-parser
function parseMarkdown(markdownText) {
  const htmlText = markdownText
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, "<br><br>");

  return htmlText.trim();
}
