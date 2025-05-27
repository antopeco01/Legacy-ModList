//#region SearchBar
const input = document.getElementById("searchInput");
const label = document.getElementById("searchLabel");
const searchBar = document.getElementById("searchBar");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const navigator = document.getElementById("navigator");

input.addEventListener("mouseenter", () => {
  label.classList.add("fa-bounce");
  setTimeout(() => {
    label.classList.remove("fa-bounce");
  }, 1000);
});

input.addEventListener("input", () => {
  if (input.value.trim() != "") {
    label.style.display = "none";
  } else {
    label.style.display = "block";
  }
});

input.addEventListener("focus", () => {
  searchBar.classList.add("focusBar");
});

input.addEventListener("blur", () => {
  searchBar.classList.remove("focusBar");
});

let matches = [];
let currentIndex = -1;

function highlightElement(el) {
  if (el) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          el.classList.add("search-highlight");
          el.classList.add("scale-up");
          setTimeout(() => {
            el.classList.remove("scale-up");
            el.classList.add("scale-down");
            el.classList.remove("search-highlight");
            el.classList.add("search-highlight-out");
            setTimeout(() => {
              el.classList.remove("search-highlight-out");
              el.classList.remove("scale-down");
            }, 500);
          }, 500);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );
    observer.observe(el);
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function updateCounter() {
  const counter = document.getElementById("resultCounter");
  if (!counter) {
    navigator.innerHTML = `<span id="resultCounter" class="text-nowrap me-1"><span></span> of <span>0</span></span>
              <button class="customBtn btn btn-sm mb-1 " id="prevBtn" title="Previous"><i class="fas fa-chevron-up"></i></button>
              <button class="customBtn btn btn-sm mt-1 me-2" id="nextBtn" title="Next"><i class="fas fa-chevron-down"></i></button>
              <div class="border-start me-1" style="height: 20px;"></div>`;
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    nextBtn.addEventListener("click", () => {
      if (matches.length === 0) return;
      currentIndex = (currentIndex + 1) % matches.length;
      highlightElement(matches[currentIndex]);
      updateCounter();
    });

    prevBtn.addEventListener("click", () => {
      if (matches.length === 0) return;
      currentIndex = (currentIndex - 1 + matches.length) % matches.length;
      highlightElement(matches[currentIndex]);
      updateCounter();
    });

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML =
      '<button class="btn btn-sm" id="delete"><i class="fas fa-xmark"></i></button>';
    deleteBtn.addEventListener("click", () => {
      label.style.display = "block";
      input.value = "";
      updateResults();
    });
    searchBar.appendChild(deleteBtn);

    document.querySelectorAll(".customBtn").forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.add("scaled");
        setTimeout(() => {
          button.classList.remove("scaled");
        }, 200);
      });
    });

    updateCounter();
  } else {
    spans = counter.querySelectorAll("span");
    if (matches.length > 0) {
      spans[0].style.color = "#58a6ff";
      spans[0].textContent = currentIndex + 1;
      spans[1].textContent = matches.length;
    } else {
      spans[0].textContent = 0;
      spans[0].style.color = "#f6f0fc";
      spans[1].textContent = 0;
    }
  }
}

function updateResults() {
  const query = input.value.replace(/\s+/g, "").toLowerCase();
  matches = [];
  currentIndex = -1;

  if (query !== "") {
    matches = [...document.querySelectorAll('span[id^="ref-"]')].filter((el) =>
      el.id.includes(`ref-${query}`)
    );
  } else {
    while (navigator.firstChild) {
      navigator.removeChild(navigator.firstChild);
    }
    const element = document.getElementById("delete");
    if (element) {
      element.remove();
    }
    highlightElement(null);
    return;
  }

  if (matches.length > 0) {
    currentIndex = 0;
    highlightElement(matches[currentIndex]);
  } else {
    highlightElement(null);
  }
  updateCounter();
}

input.addEventListener("input", updateResults);
//#endregion SearchBar

//#region Dynamic Table
const contentContainer = document.getElementById("content");
const categoryMenu = document.getElementById("categoryMenu");
const btn = document.getElementById("categoryMenuBtn");

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target)) {
    bootstrap.Dropdown.getInstance(btn)?.hide();
  }
});

btn.addEventListener("mouseenter", () => {
  btn.querySelector("i").classList.add("fa-flip");
  setTimeout(() => {
    btn.querySelector("i").classList.remove("fa-flip");
  }, 500);
});

btn.addEventListener("shown.bs.dropdown", () => {
  btn.classList.add("active");
});
btn.addEventListener("hidden.bs.dropdown", () => {
  btn.classList.remove("active");
});

// Table width
const columnWidths = {
  name: "17%",
  info: "30%",
  addons: "30%",
  fork: "23%",
};

let totalContents = [0, 0, 0, 0];
jsonData.forEach((entry) => {
  const contents = [0, 0, 0, 0];
  const category = entry.category;
  const mods = entry.mods;
  let temp = document.createElement("div");
  temp.innerHTML = category;
  const safeId = temp.textContent.replace(/\s+/g, "_");

  // Header
  const header = document.createElement("h2");
  header.id = `header-${safeId}`;
  header.classList.add("fa");
  header.classList.add("mb-3");
  header.style.marginTop = "4.5rem";
  header.innerHTML = temp.firstChild.innerHTML;
  contentContainer.appendChild(header);

  // Table
  const table = document.createElement("table");
  table.className = "table table-dark table-bordered mb-0 custom-table";
  table.id = safeId;
  table.name = safeId;

  const columnKeys = Object.keys(mods[0]);
  const columnClasses = {};

  // Colgrup
  const colgroup = document.createElement("colgroup");
  columnKeys.forEach((key) => {
    const col = document.createElement("col");
    const width = columnWidths[key.toLowerCase()];
    if (width) {
      col.style.width = width;
    }
    colgroup.appendChild(col);
  });
  table.appendChild(colgroup);

  // th
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  columnKeys.forEach((key, index) => {
    const th = document.createElement("th");
    let iconHtml = "";

    switch (key.toLowerCase()) {
      case "name":
        iconHtml = '<i class="fa-solid fa-book-open me-2"></i> ';
        columnClasses[index] = "name-row";
        break;
      case "info":
        iconHtml = '<i class="fa-solid fa-circle-info me-2"></i> ';
        columnClasses[index] = "info-row";
        break;
      case "addons":
        iconHtml = '<i class="fa-solid fa-puzzle-piece me-2"></i> ';
        columnClasses[index] = "addon-row";
        break;
      case "fork":
        iconHtml = '<i class="fa-solid fa-code-branch me-2"></i> ';
        columnClasses[index] = "fork-row";
        break;
    }

    th.innerHTML = iconHtml + key;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // tbody
  const tbody = document.createElement("tbody");
  mods.forEach((mod) => {
    const row = document.createElement("tr");
    Object.values(mod).forEach((value, index) => {
      contents[index] += value.length;
      const td = document.createElement("td");
      td.className = columnClasses[index] || "";
      td.innerHTML = value
        .map((entry) => {
          let id = null;
          let title = "";
          const match = entry.match(
            /<em>\s*<strong>\s*<a[^>]*>(.*?)<\/a>\s*<\/strong>\s*<\/em>/
          );

          if (match) {
            title = match[0];
            const container = document.createElement("div");
            container.innerHTML = title;
            id = container.querySelector("a")?.textContent?.trim() ?? null;
          }
          if (!id || !title) return `${entry}`;

          const normalizedID = `ref-${id
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z0-9\-_]/g, "")}`;

          return `<span id="${normalizedID}">${title}${`<span>${entry
            .replace(title, "")
            .trim()}</span>`}</span>`;
        })
        .join("<br/>");

      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  const tableFooter = document.createElement("caption");
  tableFooter.style.color = "#ffffff";
  tableFooter.innerHTML = `<div class="d-flex">
          <div style="width: 17%;vertical-align: top; text-align: left; padding: 0.75rem;">
            Content : ${contents.reduce((acc, val) => {
              return acc + val;
            }, -contents[0])}
          </div>
          <div style="width: 30%;vertical-align: top; text-align: left; padding: 0.75rem;">
            Mods : ${contents[1]}
          </div>
          <div style="width: 30%;vertical-align: top; text-align: left; padding: 0.75rem;">
            Addons : ${contents[2]}
          </div>
          <div style="width: 23%;vertical-align: top; text-align: left; padding: 0.75rem;">
            Forks : ${contents[3]}
          </div>
        </div>`;
  table.appendChild(tableFooter);

  const tableResponsive = document.createElement("div");
  tableResponsive.classList.add("table-responsive");
  tableResponsive.appendChild(table);

  contentContainer.appendChild(tableResponsive);

  totalContents = totalContents.map((val, i) => val + contents[i]);

  // NavBar
  const menuItem = document.createElement("li");
  let link = document.createElement("span");
  link.innerHTML = category;
  if(window.innerWidth<=768){
    link.innerHTML = link.firstChild.innerHTML;
  }else{
    link = link.firstChild;
  }
  link.className = "dropdown-item Tooltip";
  link.addEventListener("click", () => {
    let el = document.getElementById(`header-${safeId}`);
    if (el) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            el.classList.add("fa-bounce");
            setTimeout(() => {
              el.classList.remove("fa-bounce");
            }, 500);
            observer.disconnect();
          }
        },
        {
          root: null,
          threshold: 1.0,
        }
      );
      observer.observe(el);
      window.scrollTo({
        top:
          el.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight / 2 +
          250,
        behavior: "smooth",
      });
    }
  });
  menuItem.appendChild(link);
  categoryMenu.appendChild(menuItem);
});

document
  .getElementById("tot-content")
  .querySelector(
    "span"
  ).innerHTML = `<i class="fas fa-shapes fa-2x me-2"></i>Total number of Content : ${totalContents.reduce(
  (acc, val) => {
    return acc + val;
  },
  -totalContents[0]
)}`;
document
  .getElementById("tot-mod")
  .querySelector(
    "span"
  ).innerHTML = `<i class="fa-brands fa-java fa-3x me-2" style="text-shadow: 0 0 1px currentColor, 0 0 1px currentColor, 0 0 1px currentColor;"></i>Total number of Mod : ${totalContents[1]}`;
document
  .getElementById("tot-addon")
  .querySelector(
    "span"
  ).innerHTML = `<i class="fas fa-puzzle-piece fa-2x me-2"></i>Total number of Addon : ${totalContents[2]}`;
document
  .getElementById("tot-fork")
  .querySelector(
    "span"
  ).innerHTML = `<i class="fas fa-code-branch fa-2x me-2"></i>Total number of Fork : ${totalContents[3]}`;
//#endregion Dynamic Tables

//#region Listeners
document.addEventListener("DOMContentLoaded", function () {
  const head = document.getElementById("go-to-head");
  const headIcon = head.querySelector("i");

  head.querySelector("i").addEventListener("click", () => {
    const el = document.getElementById("head");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.getElementById("source-shortcut").addEventListener("click", () => {
    const el = document.getElementById("source-section");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document
    .getElementById("source-section")
    .querySelectorAll("a")
    .forEach((el) => el.classList.add("source-link"));

  document.querySelectorAll("a[href]").forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  const target = document.getElementById("header-Redstone_&_Logistic");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const y = window.innerHeight - entry.boundingClientRect.bottom;
        if (y > 0) {
          head.classList.remove("pop-out");
          head.style.display = "block";
          head.classList.add("pop-in");
          headIcon.classList.add("fa-bounce");
          setTimeout(() => {
            headIcon.classList.remove("fa-bounce");
          }, 1000);
        } else {
          head.classList.remove("pop-in");
          head.classList.add("pop-out");
          setTimeout(() => {
            head.style.display = "none";
          }, 1000);
        }
      });
    },
    {
      threshold: 1,
    }
  );
  observer.observe(target);

  if(window.innerWidth <= 768){
    head.addEventListener('click', ()=>{
      head.style.color = "#58a6ff"
      setTimeout(() => {
        head.style.color = "#ffffff"
      }, 200);
    })
  }
});
//#endregion Listeners
