const btnOpen=document.querySelector("#btn3")
const btnClose=document.querySelector("#btn")
const maninMenu=document.querySelector(".mainMenu")

btnOpen.addEventListener('click', function(e){
    maninMenu.classList.add('active')
    e.preventDefault()
}
)

btnClose.addEventListener('click', function(e){
    maninMenu.classList.remove('active')
})



const albumCloseBtn=document.querySelector('.close')
const photoAlbum=document.querySelector('.photoAlbum')
const openAlbumBtn=document.querySelector('.openAlbumBtn')
const openAlbumBtn1=document.querySelector('.openAlbumBtn1')
const photoAlbum1=document.querySelector('.photoAlbum1')
const albumCloseBtn1=document.querySelector('.close')
albumCloseBtn.addEventListener('click', closeAlbum)
openAlbumBtn.addEventListener('click',openAlbum)
openAlbumBtn1.addEventListener('click',openAlbum1)
albumCloseBtn1.addEventListener('click',closeAlbum1)

function closeAlbum(e){
    photoAlbum.classList.remove('active1')
}
function openAlbum(e){
    photoAlbum.classList.add('active1')
    e.preventDefault()
}
function closeAlbum1(e){
    photoAlbum1.classList.remove('active2')
}
function openAlbum1(e){
    photoAlbum1.classList.add('active2')
    e.preventDefault()
}



// valid form 
const btn=document.querySelector('#btn2')

btn2.onclick=()=>{
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const phone=document.querySelector('#phone').value;
    if(name.length>=1 && email.includes("@") && phone.length>=0){
        confirm("Seçtiğiniz tarihlerden emin misiniz?")
     alert("Rezervasyonunuz Alınmııştır.\n\r Sizinle İletişime Geçilecektir..")
      
    }else{alert("hatalı giriş")}
}

const closeRes=document.querySelector('.closeRes')
const rezervasyon=document.querySelector('.rezervasyon')
const resBtn=document.querySelector('.resBtn')
const resBtn1=document.querySelector('.resBtn1')
const resBtn2=document.querySelector('.resBtn2')
const resBtn3=document.querySelector('.resBtn3')
const resBtn4=document.querySelector('.resBtn4')
const resBtn5=document.querySelector('.resBtn5')
const resBtn6=document.querySelector('.resBtn6')
const resBtn7=document.querySelector('.resBtn7')
const resBtn8=document.querySelector('.resBtn8')
const resBtn9=document.querySelector('.resBtn9')
const resBtn10=document.querySelector('.resBtn10')
const resBtn11=document.querySelector('.resBtn11')
const resBtn12=document.querySelector('.resBtn12')

closeRes.addEventListener('click',closeRese)
resBtn.addEventListener('click',openRes)
resBtn1.addEventListener('click',openRes)
resBtn2.addEventListener('click',openRes)
resBtn3.addEventListener('click',openRes)
resBtn4.addEventListener('click',openRes)
resBtn5.addEventListener('click',openRes)
resBtn6.addEventListener('click',openRes)
resBtn7.addEventListener('click',openRes)
resBtn8.addEventListener('click',openRes)
resBtn9.addEventListener('click',openRes)
resBtn10.addEventListener('click',openRes)
resBtn11.addEventListener('click',openRes)
resBtn12.addEventListener('click',openRes)





function closeRese(){
    rezervasyon.style.visibility='hidden'
}
function openRes(){
    rezervasyon.style.visibility='visible'
}