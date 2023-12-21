var posts=["posts/githubsc.html","posts/minifier.html","posts/hexoycwz.html","posts/hexozlj.html","posts/mdyf.html","posts/dloby.html","posts/alist.html","posts/npminstall.html","posts/ruanjian.html","posts/chemistry.html","posts/huizhou.html","posts/githubfangwen.html","posts/Fengling.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };