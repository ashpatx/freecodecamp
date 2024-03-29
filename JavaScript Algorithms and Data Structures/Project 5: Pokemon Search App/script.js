<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokémon Library</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=VT323:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="header">
      <h1 class="title">Pokémon Library</h1>
      <form id="search-form" role="search">
        <input
          id="search-input"
          type="text"
          role="search"
          placeholder="Search Pokemon"
          class="searchBar"
          required
        />
        <button id="search-button" class="searchBtn">Search</button>
      </form>
    </div>

    <!--Pokemon Library-->
    <div id="results">
      <div id="pokemon-container">
        <div class="titleInfo">
          <span id="pokemon-name"></span>
          <span id="pokemon-id"></span>
        </div>

        <div id="avatar-container" class="avatarContainer"></div>

        <div id="categories">
          <div id="category"></div>
        </div>
      </div>

      <!--Eight Item Bento-->
      <div class="bento">
        <div id="weight"></div>
        <div id="height"></div>
        <div id="hp"></div>
        <div id="defense"></div>
        <div id="attack"></div>
        <div id="special-attack"></div>
        <div id="special-defense"></div>
        <div id="speed"></div>
      </div>
    </div>
    <!--Mesh Gradient SVG Layer-->
    <svg>
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.9"
          stitchTiles="stitch"
        />
        <feColorMatrix
          in="colorNoise"
          type="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
        />
        <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
        <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
      </filter>
    </svg>

    <script src="script.js"></script>
  </body>
</html>
