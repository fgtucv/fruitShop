!function(){let e=document.querySelector(".list"),t=t=>{let n=t.map(e=>`        <li id="${e.id}">
            <img src="${e.photo}" alt="${e.title}">
            <h2>${e.title}</h2>
            <span>${e.price}</span>
            <button class="openUpdateButton" type="button">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
            <button class="delet" type="button">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
        </li>`).join("");e.insertAdjacentHTML("beforeend",n)},n=e=>fetch("https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()),o=document.querySelector(".openAddButton"),u=document.querySelector(".addForm"),a=document.querySelector(".addModal");o.addEventListener("click",function(){a.classList.remove("is-hidden")}),u.addEventListener("submit",function(e){e.preventDefault(),a.classList.add("is-hidden"),n({title:e.target.elements.nameInput.value,price:e.target.elements.priceInput.value,photo:e.target.elements.photoInput.value})});let i=e=>fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products?page=${e}&limit=2`).then(e=>e.json()),c=function(e,t){console.log(t);let n={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};console.log(n),fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products/${t}`,n).then(e=>e.json())},d=function(e){let n=e.target.parentNode.id;!e.target.classList.contains("openUpdateButton")&&(fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/fruits/products/${n}`,{method:"DELETE"}).then(e=>e.json()).then(e=>{}).catch(e=>e),i().then(e=>{t(e)}))},s=document.querySelector(".updateModal"),r=function(e,t){e.preventDefault(),s.classList.add("is-hidden"),c(t,t.id)},l=document.querySelector(".updateForm"),p=document.querySelector(".updateModal"),m=function(e){let t=e.target.parentNode,n=t.id;console.log(t.id),e.target.classList.contains("delet")||(p.classList.remove("is-hidden"),l.addEventListener("submit",e=>{let t={title:e.target.elements.updateNameInput.value,photo:e.target.elements.updatePhotoInput.value,price:e.target.elements.updatePriceInput.value,id:Number(n)};r(e,t)}))},h=e=>{i(e).then(e=>{t(e),document.querySelector(".list").addEventListener("click",d),document.querySelector(".list").addEventListener("click",m)})},f=document.querySelector(".moreFruit"),y=1;f.addEventListener("click",()=>{h(y+=1)}),h(y)}();
//# sourceMappingURL=index.8e9732ef.js.map
