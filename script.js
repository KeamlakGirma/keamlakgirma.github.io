const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{
  threshold:0.15
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});

// navbar shadow
window.addEventListener("scroll", ()=>{
  const header = document.querySelector("header");
  if(window.scrollY > 30){
    header.style.boxShadow = "0 10px 35px rgba(0,0,0,.25)";
  }else{
    header.style.boxShadow = "none";
  }
});
