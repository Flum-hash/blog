var posts=["posts/githubsc.html","posts/hexoycwz.html","posts/minifier.html","posts/hexozlj.html","posts/alist.html","posts/dloby.html","posts/chemistry.html","posts/mdyf.html","posts/npminstall.html","posts/ruanjian.html","posts/huizhou.html","posts/githubfangwen.html","posts/Fengling.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };