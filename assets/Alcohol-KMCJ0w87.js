import{r as l,j as e}from"./index-DBMYfH6Y.js";const p=()=>{const[s,i]=l.useState(0),[a,n]=l.useState(1e3),t={background:`linear-gradient(to right, 
		  rgba(96, 97, 97, 0.6) 0%, 
		  rgba(96, 97, 97, 0.6) ${s/10}%, 
		  rgba(255, 0, 20, 1) ${s/10}%, 
		  rgba(255, 0, 20, 1) ${a/10}%, 
		  rgba(96, 97, 97, 0.6) ${a/10}%, 
		  rgba(96, 97, 97, 0.6) 100%)`};l.useEffect(()=>{document.documentElement.style.setProperty("--min-price",`${s/10}%`),document.documentElement.style.setProperty("--max-price",`${a/10}%`)},[s,a]);const d=r=>{const c=Number(r.target.value);c<=a&&i(c)},o=r=>{const c=Number(r.target.value);c>=s&&n(c)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"catalogWrapper",children:[e.jsx("h2",{className:"catalogTitle",children:"Алкоголь"}),e.jsxs("div",{className:"catalogBody",children:[e.jsxs("div",{className:"catalogLeftSide",children:[e.jsxs("div",{className:"catalogSearchWrap",children:[e.jsx("input",{type:"text",className:"catalogFirstInput",placeholder:"Поиск"}),e.jsx("img",{src:"/duty-free/Sources/realSearchIcon.png",alt:"",className:"catalogSearchIcon"})]}),e.jsxs("div",{className:"catalogSelectWrap",children:[e.jsx("select",{name:"",id:"",className:"catalogFirstSelect",children:e.jsx("option",{value:"",children:"Сортировать по"})}),e.jsx("img",{src:"/duty-free/Sources/arrowOpen.svg",alt:"",className:"arrowOpenCatalog"})]}),e.jsxs("div",{className:"catalogSelectWrap",children:[e.jsx("select",{name:"",id:"",className:"catalogFirstSelect",children:e.jsx("option",{value:"",children:"Бренд"})}),e.jsx("img",{src:"/duty-free/Sources/arrowOpen.svg",alt:"",className:"arrowOpenCatalog"})]}),e.jsxs("div",{className:"catalogSelectWrap",children:[e.jsx("select",{name:"",id:"",className:"catalogFirstSelect",children:e.jsx("option",{value:"",children:"Тип"})}),e.jsx("img",{src:"/duty-free/Sources/arrowOpen.svg",alt:"",className:"arrowOpenCatalog"})]}),e.jsxs("div",{className:"catalogSelectWrap",children:[e.jsx("select",{name:"",id:"",className:"catalogFirstSelect",children:e.jsx("option",{value:"",children:"Страна происхождения"})}),e.jsx("img",{src:"/duty-free/Sources/arrowOpen.svg",alt:"",className:"arrowOpenCatalog"})]}),e.jsxs("div",{className:"rangeSliderWrapper",children:[e.jsxs("div",{className:"sliderContainer",children:[e.jsx("input",{type:"range",min:"0",max:"1000",step:"10",className:"rangeSlider",value:s,onChange:d,style:t}),e.jsx("input",{type:"range",min:"0",max:"1000",step:"10",className:"rangeSlider",value:a,onChange:o,style:t})]}),e.jsxs("p",{className:"sliderPrice",children:["Цена: $",s," - $",a]})]}),e.jsxs("div",{className:"discountProduct",children:[e.jsx("p",{className:"discountDesc",children:"Товар со скидкой"}),e.jsx("input",{checked:!0,type:"checkbox",id:"performCheck",className:"performSwitchInput"}),e.jsx("label",{htmlFor:"performCheck",className:"performSwitchBtn"})]})]}),e.jsx("div",{className:"catalogRightSide",children:e.jsxs("div",{className:"popular-products-body",children:[e.jsxs("div",{className:"popular-product",children:[" ",e.jsx("div",{className:"grayBack",children:e.jsx("img",{src:"/duty-free/Sources/pProductImg4.png",alt:"",className:"product-img"})}),e.jsx("h4",{className:"p-product-name",children:"Jagermeister 1L"}),e.jsxs("p",{className:"p-product-price",children:["$17 ",e.jsx("span",{className:"formerPrice",children:"$18"})]}),e.jsx("p",{className:"discount",children:"7%"})]}),e.jsxs("div",{className:"popular-product",children:[" ",e.jsx("div",{className:"grayBack",children:e.jsx("img",{src:"/duty-free/Sources/pProductImg5.png",alt:"",className:"product-img"})}),e.jsx("h4",{className:"p-product-name",children:"The Claymore whisky 1L"}),e.jsxs("p",{className:"p-product-price",children:["$9",e.jsx("span",{className:"formerPrice",children:" $10"})]}),e.jsx("p",{className:"discount",children:"7%"})]}),e.jsxs("div",{className:"popular-product",children:[" ",e.jsx("div",{className:"grayBack",children:e.jsx("img",{src:"/duty-free/Sources/pProductImg6.png",alt:"",className:"product-img"})}),e.jsxs("h4",{className:"p-product-name",children:["Bushmills original irish whiskey 1L"," "]}),e.jsxs("p",{className:"p-product-price",children:["$17",e.jsx("span",{className:"formerPrice",children:" $18"})]}),e.jsx("p",{className:"discount",children:"7%"})]})]})})]})]}),e.jsx("div",{className:"alcoholLimit",children:e.jsxs("div",{className:"eighteenRelative",children:[e.jsx("img",{src:"/duty-free/Sources/18PlusImg.png",alt:"",className:"eighteenPlusImg"}),e.jsx("p",{className:"alcoLimitDesc",children:"Сайт содержит информацию, которая не рекомендована лицам, не достигшим совершеннолетия. Для входа на сайт, подтвердите свой возраст."}),e.jsxs("div",{className:"eighteenPlusBtns",children:[e.jsx("button",{className:"eighteenPlusBtn redBack18Plus",children:"Подтверждаю, мне есть 18 лет"}),e.jsx("button",{className:"eighteenPlusBtn",children:"Мне не 18 лет"})]}),e.jsx("img",{src:"/duty-free/Sources/18PlusCloseImg.png",alt:"",className:"eighteenPlusClose"})]})}),e.jsx("div",{className:"overlayAlcohol"})]})};export{p as default};
