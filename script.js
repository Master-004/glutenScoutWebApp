const restaurantData = [
  {
    id: "solstice-table",
    name: "Solstice Table",
    neighborhood: "Downtown Arts District",
    distance: "0.4 mi",
    totalEntrees: 4,
    verifiedBy: "Glen Eden Dietitian",
    lastVerified: "Today",
    summary: "4 full entrees confirmed safe, dedicated prep area, and no shared fryer.",
    crossContamination: [
      "Dedicated prep area for gluten-free meals.",
      "No shared fryer on site.",
      "Kitchen staff can mark GF modifications on every order."
    ],
    allergens: [
      { dish: "Grilled salmon", status: "safe", note: "Kitchen verified" },
      { dish: "Roasted chicken", status: "safe", note: "GF prep area" },
      { dish: "Lentil bowl", status: "safe", note: "No wheat sauce" },
      { dish: "Sweet potato fries", status: "caution", note: "Dedicated fryer" },
      { dish: "Cobb salad", status: "warn", note: "Crouton separate" }
    ],
    picks: [
      {
        name: "Grilled salmon",
        description: "Order with the lemon-herb drizzle and a side of the roasted greens. The kitchen confirmed this is a full gluten-free plate.",
        note: "Best bet"
      },
      {
        name: "Roasted chicken bowl",
        description: "Ask for the GF dressing on the side and skip any breading or croutons. This is one of the safest options on the menu.",
        note: "Most filling"
      },
      {
        name: "Sweet potato fries",
        description: "The fries are cooked in a dedicated fryer, but confirm the fryer basket is clean before ordering.",
        note: "Caution"
      }
    ]
  },
  {
    id: "mountain-elm",
    name: "Mountain Elm",
    neighborhood: "North End",
    distance: "1.1 mi",
    totalEntrees: 3,
    verifiedBy: "Celiac Community Review",
    lastVerified: "2 days ago",
    summary: "3 full entrees confirmed safe with clear prep notes and a dedicated fryer.",
    crossContamination: [
      "Dedicated prep surface used for GF orders.",
      "Shared fryer is limited to GF fries only during peak hours.",
      "Manager verifies all sauces before service."
    ],
    allergens: [
      { dish: "Citrus salmon", status: "safe", note: "GF verified" },
      { dish: "Herbed quinoa bowl", status: "safe", note: "Separate dressing" },
      { dish: "Marinated steak", status: "safe", note: "No soy glaze" },
      { dish: "House salad", status: "caution", note: "No croutons" },
      { dish: "Rice pilaf", status: "warn", note: "Cross-contact risk" }
    ],
    picks: [
      {
        name: "Citrus salmon",
        description: "This is the cleanest option: grilled, clearly labeled, and prepared without any shared surface contact.",
        note: "Strongest pick"
      },
      {
        name: "Herbed quinoa bowl",
        description: "Ask for the dressing on the side. The bowl is naturally gluten-free if you keep the sauce separate.",
        note: "Light & safe"
      },
      {
        name: "Marinated steak",
        description: "This dish holds up well with a gluten-free request, but server should confirm sauce ingredients before sending.",
        note: "Good backup"
      }
    ]
  },
  {
    id: "willow-bistro",
    name: "Willow Bistro",
    neighborhood: "Riverside",
    distance: "1.7 mi",
    totalEntrees: 5,
    verifiedBy: "Local Allergy Network",
    lastVerified: "4 days ago",
    summary: "5 full entrees confirmed safe and a consistent staff training process in place.",
    crossContamination: [
      "Dedicated gluten-free prep tray available.",
      "Core sauces are labeled and checked before service.",
      "Kitchen uses separate utensils when needed."
    ],
    allergens: [
      { dish: "Chicken pesto bowl", status: "safe", note: "GF prep tray" },
      { dish: "Miso tofu salad", status: "safe", note: "No gluten dressing" },
      { dish: "Baked cod", status: "safe", note: "Separate pan" },
      { dish: "Vegetable tacos", status: "caution", note: "Corn tortillas only" },
      { dish: "Mac & cheese", status: "warn", note: "Not safe" }
    ],
    picks: [
      {
        name: "Baked cod",
        description: "This plate is a dependable option with clear prep instructions and no breading or flour-based sauces.",
        note: "Most reliable"
      },
      {
        name: "Chicken pesto bowl",
        description: "Ask them to hold the pesto dressing or confirm it is a gluten-free version before ordering.",
        note: "High confidence"
      },
      {
        name: "Miso tofu salad",
        description: "A good choice when you want something lighter and are careful about dressing ingredients.",
        note: "Good lighter pick"
      }
    ]
  }
];

const state = {
  screen: "landing",
  activeRestaurantId: restaurantData[0].id
};

const navHome = document.getElementById("nav-home");
const navSearch = document.getElementById("nav-search");
const searchResults = document.getElementById("search-results");
const detailView = document.getElementById("detail-view");
const picksView = document.getElementById("picks-view");

function getActiveRestaurant() {
  return restaurantData.find((restaurant) => restaurant.id === state.activeRestaurantId) || restaurantData[0];
}

function updateTopActions() {
  if (navHome) navHome.classList.toggle("is-muted", state.screen === "landing");
  if (navSearch) navSearch.classList.toggle("is-muted", state.screen === "search");
}

function renderSearchResults() {
  if (!searchResults) return;

  searchResults.innerHTML = restaurantData
    .map(
      (restaurant) => `
        <article class="result-card" data-restaurant-id="${restaurant.id}">
          <div class="result-header">
            <div>
              <h3 class="result-title">${restaurant.name}</h3>
            </div>
            <span class="stamp">Verified GF-Safe</span>
          </div>

          <div class="meta-row">
            <span>${restaurant.neighborhood}</span>
            <span>${restaurant.distance}</span>
          </div>

          <p class="summary">${restaurant.summary}</p>

          <div class="result-stats">
            <div class="stat-box">
              <span class="stat-value">${restaurant.totalEntrees}</span>
              <span class="stat-label">Safe dishes</span>
            </div>
            <div class="stat-box">
              <span class="stat-value">${restaurant.lastVerified}</span>
              <span class="stat-label">Last verified</span>
            </div>
            <div class="stat-box">
              <span class="stat-value">${restaurant.verifiedBy.split(" ")[0]}</span>
              <span class="stat-label">Verified by</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  searchResults.querySelectorAll(".result-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.activeRestaurantId = card.dataset.restaurantId;
      state.screen = "detail";
      renderScreens();
    });
  });
}

function renderDetailScreen() {
  if (!detailView) return;

  const restaurant = getActiveRestaurant();

  detailView.innerHTML = `
    <div class="detail-panel">
      <div class="detail-head">
        <div>
          <h2>${restaurant.name}</h2>
          <div class="neighborhood">${restaurant.neighborhood}</div>
        </div>
        <span class="stamp">Verified GF-Safe</span>
      </div>

      <div class="detail-summary">
        <div class="metric">
          <strong>${restaurant.totalEntrees}</strong>
          <span>Safe dishes</span>
        </div>
        <div class="metric">
          <strong>${restaurant.lastVerified}</strong>
          <span>Last checked</span>
        </div>
        <div class="metric">
          <strong>${restaurant.verifiedBy}</strong>
          <span>Verified by</span>
        </div>
      </div>

      <div class="section-label">Verified allergen breakdown</div>
      <div class="allergen-table">
        ${restaurant.allergens
          .map(
            (item) => `
              <div class="row">
                <strong>${item.dish}</strong>
                <span>${item.note}</span>
                <span class="${item.status === "safe" ? "safe-tag" : item.status === "caution" ? "caution-tag" : "warn-tag"}">${item.status === "safe" ? "Safe" : item.status === "caution" ? "Caution" : "Avoid"}</span>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="notes">
        <span class="section-label">Cross-contamination notes</span>
        <ul>
          ${restaurant.crossContamination.map((note) => `<li>${note}</li>`).join("")}
        </ul>
      </div>

      <div class="audit-box">
        <div>
          <div class="section-label">Verified by</div>
          <div class="subtle-copy">${restaurant.verifiedBy}</div>
        </div>
        <div class="subtle-copy">Updated ${restaurant.lastVerified}</div>
      </div>

      <div class="button-row">
        <button class="primary-button" data-action="show-picks">View safe picks</button>
        <button class="secondary-button" data-action="show-search">Back to search</button>
      </div>
    </div>
  `;

  const picksButton = detailView.querySelector('[data-action="show-picks"]');
  const searchButton = detailView.querySelector('[data-action="show-search"]');

  if (picksButton) {
    picksButton.addEventListener("click", () => {
      state.screen = "picks";
      renderScreens();
    });
  }

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      state.screen = "search";
      renderScreens();
    });
  }
}

function renderPicksScreen() {
  if (!picksView) return;

  const restaurant = getActiveRestaurant();

  picksView.innerHTML = `
    <div class="picks-panel">
      <div class="picks-header">
        <div>
          <div class="section-label">What to order</div>
          <h2>${restaurant.name}</h2>
        </div>
        <span class="stamp">Verified GF-Safe</span>
      </div>

      ${restaurant.picks
        .map(
          (pick) => `
            <article class="pick-item">
              <div class="pick-meta">
                <span>${pick.note}</span>
                <span>Order this</span>
              </div>
              <h3>${pick.name}</h3>
              <p>${pick.description}</p>
            </article>
          `
        )
        .join("")}

      <div class="footer-nav">
        <button class="secondary-button" data-action="show-detail">Back to details</button>
        <button class="link-button" data-action="show-search">Search again</button>
      </div>
    </div>
  `;

  const detailButton = picksView.querySelector('[data-action="show-detail"]');
  const searchButton = picksView.querySelector('[data-action="show-search"]');

  if (detailButton) {
    detailButton.addEventListener("click", () => {
      state.screen = "detail";
      renderScreens();
    });
  }

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      state.screen = "search";
      renderScreens();
    });
  }
}

function renderScreens() {
  const landingScreen = document.getElementById("screen-landing");
  const searchScreen = document.getElementById("screen-search");
  const detailScreen = document.getElementById("screen-detail");
  const picksScreen = document.getElementById("screen-picks");

  if (landingScreen) landingScreen.classList.toggle("active", state.screen === "landing");
  if (searchScreen) searchScreen.classList.toggle("active", state.screen === "search");
  if (detailScreen) detailScreen.classList.toggle("active", state.screen === "detail");
  if (picksScreen) picksScreen.classList.toggle("active", state.screen === "picks");

  renderSearchResults();
  renderDetailScreen();
  renderPicksScreen();
  updateTopActions();
}

document.body.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;

  if (action === "go-search") {
    state.screen = "search";
    renderScreens();
  }

  if (action === "go-landing") {
    state.screen = "landing";
    renderScreens();
  }
});

if (navHome) {
  navHome.addEventListener("click", () => {
    state.screen = "landing";
    renderScreens();
  });
}

if (navSearch) {
  navSearch.addEventListener("click", () => {
    state.screen = "search";
    renderScreens();
  });
}

renderScreens();
