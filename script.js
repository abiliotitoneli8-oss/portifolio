(function(){
  var root=document.documentElement, btn=document.getElementById('tema');
  function salvo(){try{return localStorage.getItem('tema')}catch(e){return null}}
  function inicial(){
    var s=salvo(); if(s==='dark'||s==='light') return s;
    return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  }
  function aplicar(t){
    root.setAttribute('data-theme',t);
    btn.setAttribute('aria-pressed',t==='dark');
    btn.textContent=t==='dark'?'Modo claro':'Modo escuro';
  }
  aplicar(inicial());
  btn.addEventListener('click',function(){
    var novo=root.getAttribute('data-theme')==='dark'?'light':'dark';
    aplicar(novo);
    try{localStorage.setItem('tema',novo)}catch(e){}
  });
  document.getElementById('ano').textContent=new Date().getFullYear();
})();
