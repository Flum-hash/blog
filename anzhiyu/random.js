var posts=["posts/githubsc.html","posts/linuxrm.html","posts/minifier.html","posts/hexozlj.html","posts/hexoycwz.html","posts/TED1.html","posts/mdyf.html","posts/alist.html","posts/dloby.html","posts/chemistry.html","posts/npminstall.html","posts/ruanjian.html","posts/jianzhan.html","posts/githubfangwen.html","posts/Fengling.html","posts/huizhou.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };