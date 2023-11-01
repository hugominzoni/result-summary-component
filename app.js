
const num = document.querySelectorAll('.num')
const sectionRight = document.querySelector('.sections')

for(let i = 0; i < num.length; i++){
    const numAdd = num[i].textContent;
    const imgLink = num[i].src
    console.log(num.textContent);
}

let statusPage = ''

fetch('./data.json')
	.then(res => res.json())
	.then(data => {
		data.forEach((element)=>{
      const category = element.category;
      const icon = element.icon;
      const score = element.score;
      statusPage += `
        <div class="sections">
        <div class="sec ${category.toLowerCase()}">
          <div class="sec-left">
            <img src="${icon}" alt="" />
            <p>${category}</p>
          </div>
          <div class="nums"><span class="num">${score}</span> / 100</div>
        </div>
        </div>
      `
        })
        sectionRight.innerHTML = statusPage

	})
	.catch(err => {
        console.log(`error ${err}`)
	});