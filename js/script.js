


const body = document.body;

body.style.background = '#202C36';
body.style.margin = '0';
body.style.padding = '0';

body.style.width = '100vw'

const search = document.createElement('div')
search.innerText = 'Search for a country…'
body.append(search)
search.style.width = '480px'
// search.style.height = '56px'
search.style.background = '#2B3844'
search.style.color= '#fff'
search.style.borderRadius = '5px'
search.style.marginTop = '48px'
search.style.marginBottom = '48px'
search.style.marginLeft = '80px'
search.style.textAlign = 'center'
search.style.padding = '15px 18px'



const bigDiv = document.createElement('div')
body.appendChild(bigDiv)

bigDiv.style.display = 'flex'
bigDiv.style.flexWrap = 'wrap'
bigDiv.style.width = '1336px'
bigDiv.style.gap = '75px'
bigDiv.style.padding = '10px 80px'
bigDiv.style.marginBottom = '30px'



const div = document.createElement('div')
const navbar = document.createElement('div')
body.prepend(div);
div.prepend(navbar)
navbar.innerHTML = '<p>Where in the world?</p> <p>Dark Mode</p>'
navbar.style.background= '#2B3844'
navbar.style.color= '#fff'
navbar.style.padding = '0px 81px'
navbar.style.fontSize= '22px'
// navbar.style.width = '100vw'



navbar.style.display = 'flex'
navbar.style.justifyContent = 'space-between'




// ################################################## 1
const div5 = document.createElement('div')
div5.style.background = '#2B3844'
div5.style.height = '336px'
div5.style.width = '275px'
bigDiv.appendChild(div5)

const img = document.createElement('img')
img.src = "img/flag.png"
img.width = 275;
img.height = 160;
img.alt = 'super man'
div5.appendChild(img)

const ol = document.createElement('ol')
ol.innerHTML = `<p>Germany</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol.style.color = '#fff'
div5.appendChild(ol)

// ################################################## 2
const div52 = document.createElement('div')
div52.style.background = '#2B3844'
div52.style.height = '336px'
div52.style.width = '275px'
bigDiv.appendChild(div52)

const img2 = document.createElement('img')
img2.src = "img/usa.png"
img2.width = 275;
img2.height = 160;
img2.alt = 'super man'
div52.appendChild(img2)

const ol2 = document.createElement('ol')
ol2.innerHTML = `<p>United States of America</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol2.style.color = '#fff'
div52.appendChild(ol2)

// ################################################## 3
const div53 = document.createElement('div')
bigDiv.appendChild(div53)
div53.style.background = '#2B3844'
div53.style.height = '336px'
div53.style.width = '275px'
bigDiv.appendChild(div53)

const img3 = document.createElement('img')
img3.src = "img/brazil.png"
img3.width = 275;
img3.height = 160;
img3.alt = 'super man'
div53.appendChild(img3)

const ol3 = document.createElement('ol')
ol3.innerHTML = `<p>Brazil</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol3.style.color = '#fff'
div53.appendChild(ol3)

// ################################################## 4

const div54 = document.createElement('div')
div54.style.background = '#2B3844'
div54.style.height = '336px'
div54.style.width = '275px'
bigDiv.appendChild(div54)

const img4 = document.createElement('img')
img4.src = "img/icland.png"
img4.width = 275;
img4.height = 160;
img4.alt = 'super man'
div54.appendChild(img4)

const ol4 = document.createElement('ol')
ol4.innerHTML = `<p>Iceland</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol4.style.color = '#fff'
div54.appendChild(ol4)

// ################################################## 5

const div56 = document.createElement('div')
div56.style.background = '#2B3844'
div56.style.height = '336px'
div56.style.width = '275px'
bigDiv.appendChild(div56)

const img6 = document.createElement('img')
img6.src = "img/afganistan.png"
img6.width = 275;
img6.height = 160;
img6.alt = 'super man'
div56.appendChild(img6)

const ol6 = document.createElement('ol')
ol6.innerHTML = `<p>Afghanistan</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol6.style.color = '#fff'
div56.appendChild(ol6)

// ################################################## 7

const div57 = document.createElement('div')
div57.style.background = '#2B3844'
div57.style.height = '336px'
div57.style.width = '275px'
bigDiv.appendChild(div57)

const img7 = document.createElement('img')
img7.src = "img/aland.png"
img7.width = 275;
img7.height = 160;
img7.alt = 'super man'
div57.appendChild(img7)

const ol7 = document.createElement('ol')
ol7.innerHTML = `<p>Åland Islands</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol7.style.color = '#fff'
div57.appendChild(ol7)

// ################################################## 8

const div58 = document.createElement('div')
div58.style.background = '#2B3844'
div58.style.height = '336px'
div58.style.width = '275px'
bigDiv.appendChild(div58)

const img8 = document.createElement('img')
img8.src = "img/albaniya.png"
img8.width = 275;
img8.height = 160;
img8.alt = 'super man'
div58.appendChild(img8)


const ol8 = document.createElement('ol')
ol8.innerHTML = `<p>Albania</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol8.style.color = '#fff'
div58.appendChild(ol8)


// ################################################## 9

const div59 = document.createElement('div')
div59.style.background = '#2B3844'
div59.style.height = '336px'
div59.style.width = '275px'
bigDiv.appendChild(div59)

const img9 = document.createElement('img')
img9.src = "img/algeriya.png"
img9.width = 275;
img9.height = 160;
img9.alt = 'super man'
div59.appendChild(img9)

const ol9 = document.createElement('ol')
ol9.innerHTML = `<p>Algeriya</p> <label>Population 81.770.900</label> <p>Region:Europa</p> <p>Capital:Berlin</p>`
ol9.style.color = '#fff'
div59.appendChild(ol9)





