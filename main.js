/*=============== G00GLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Montserrat:

/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3.5rem;

/*========== Colors ==========*/
/*Color mode HSL(hue, saturation, lightness)*/
--first-color: hsl(166, 80%, 40%);
--first-color-alt: hsl(166, 78%, 38%);
--title-color: hsl(166, 95%, 15%);
--text-color: hsl(166, 12%, 40%);
--white-color: hsl(166, 100%, 99%);
--dark-color: hsl(166, 95%, 12%);
--body-color: hsl(166, 56%, 18%);
--body-white-color: hsl(0, 0%, 100%);
--body-first-color: hsl(166, 80%, 40%);

/*========== Font and typography ==========*/
/*.5rem = 8px | 1rem = 16px ...*/
--body-font: "Montserrat", serif;
--second-font: "saira", serif;
--biggest-font-size 4.5rem;
--big-font-size 2.5rem;
--h1-font-size 1.5rem;
--h2-font-size 1.25rem;
--h3-font-size 1rem;
--normal-font-size 938rem;
--small-font-size 813rem;
 
/*========== Font weight ==========*/
--font-regulat: 400;
--font-medium: 500;
--font-semo-bold: 600;

/*========== z index ==========*/
--z-tooltip: 10;
--z-fixed: 100;
}

/*========== Responsive typography ==========*/
@media screen and (min-width: 1150px) {
  :root {
    --biggest-font-size: 9.5rem;
    --big-font-size: 4rem;
    --h1-font-size: 2rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 875rem;
 }
}

/*=============== BASE ===============*/
* {
box-sizing: border-box;
padding: 0;
margin: 0;
}

html {
  scrool-behavior: smooth;
}

input,
button,
body {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

body {
  background-color: var(--body-color);
  color: var(--text-color);
}

input,
button {
  outline: none;
  border: none;
}

h1, h2, h3, h4 {
  font-family: var(--second-font);
  font-weight: var(--font-medium);
  line-height: 110%;
}

ul { 
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*=============== REUSABLE CSS CLASSES ===============*/
.container {
  max-width: 1120px;
  margin-inline 1.5rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.section {
  padding-block: 5rem 4rem;
}

.section__title {
  text-align: center;
  font-size: var(--big-font-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: 2.5rem;
}

.main {
  overflow: hidden;
}

/*=============== HEADER & NAV ===============*/


/* Navigation for mobile devices */


/* Show menu */


/* Add shadow header */


/* Active link */


/*=============== HOME ===============*/


/*=============== BUTTON ===============*/







































































