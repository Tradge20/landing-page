// <!-- build the navbar -->
document.querySelector("#nav_list").innerHTML = "";
document
  .querySelectorAll("section")
  .forEach(
    (section) =>
      (document.querySelector(
        "#nav_list"
      ).innerHTML += `<li>${section.id}</li>`)
  );
// <!-- add click event listeners on the navbar to scroll to relevant sevtions
document.querySelectorAll("li").forEach((tag) =>
  tag.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = tag.textContent;
    document
      .querySelector("#" + sectionId)
      .scrollIntoView({ behavior: "smooth" });
  })
);

//apply active styling on secyions that scroll into view

// apply highlights on navbar item for section that scrolls into view
