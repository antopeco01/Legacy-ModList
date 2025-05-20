//Icons
const ICON_CURSE = `<img style="transform: scale(1.25);" class="me-2" src="https://media.forgecdn.net/avatars/130/458/636460205549127215.png" height="18" style="max-width: 100%" alt="CurseForge" />`;
const ICON_MODRINTH = `<img style="transform: scale(1.25);" class="me-2" src="https://camo.githubusercontent.com/90b5ec53efbbb2ea275e69de963f5bf737f16cdcc51677d83da92992486e66ae/68747470733a2f2f6d6f6472696e74682e636f6d2f66617669636f6e2e69636f" height="16" data-canonical-src="https://modrinth.com/favicon.ico" style="max-width: 100%;">`;
const ICON_GITHUB = `<i style="transform: scale(1.25);" class="fa-brands fa-sm fa-github me-2"></i>`;

function wrapIconWithLink(href, iconHtml) {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${iconHtml}</a>`;
}

const jsonData = [
  {
    category: '<span><i class="fa-solid fa-sm fa-wrench mx-2"></i>Tech</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-microchip mx-2"></i>Redstone & Logistic</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-box-archive mx-2"></i>Storage & Inventory</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-hammer mx-2"></i>Tools & Weponary</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-apple-whole mx-2"></i>Food & Farming</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-hat-cowboy-side mx-2"></i>Adventure & RPG</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category: '<span><i class="fa-solid fa-sm fa-broom mx-2"></i>Magic</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-trowel-bricks mx-2"></i>Building & Decoration</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-bucket mx-2"></i>Miscellaneous</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-mountain-sun mx-2"></i>Biomes & Terrain</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-gopuram mx-2"></i>Structures</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-house-user mx-2"></i>Village & Villagers</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-moon mx-2"></i>Dimension</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-hippo mx-2"></i>Mob & Creatures</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-gem mx-2"></i>Ores & Resources</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-map mx-2"></i>Map & Information</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-screwdriver mx-2"></i>Utilities & QoL</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-cogs mx-2"></i>Configuration</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-rocket mx-2"></i>Performance & Bug Fixes</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-book mx-2"></i>Lib & API</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-rotate-left mx-2"></i>Backport</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-palette mx-2"></i>Cosmetic</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
  {
    category:
      '<span><i class="fa-solid fa-sm fa-brush mx-2"></i>Resource pack</span>',
    mods: [
      {
        Name: [
          `<em><strong> </strong></em>${wrapIconWithLink("", ICON_CURSE)}`,
        ],
        Info: [` `],
        Addons: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
        Fork: [`<em><strong><a href=""> </a></strong></em>&nbsp;:&nbsp; `],
      },
    ],
  },
];
