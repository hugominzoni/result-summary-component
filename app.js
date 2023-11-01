
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
            console.log(element);
            statusPage += `
            <div class="sections">
            <div class="sec reaction">
              <div class="sec-left">
                <img src="${element.icon}" alt="" />
                <p>${element.category}</p>
              </div>
              <div class="nums"><span class="num">${element.score}</span> / 100</div>
            </div>
          </div>
            `
        })
        sectionRight.innerHTML = statusPage
	})
	.catch(err => {
        console.log(`error ${err}`)
	});