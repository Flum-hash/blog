var posts=["posts/minifier.html","posts/githubsc.html","posts/hexoycwz.html","posts/hexozlj.html","posts/linuxrm.html","posts/mdyf.html","posts/alist.html","posts/TED1.html","posts/dloby.html","posts/npminstall.html","posts/chemistry.html","posts/ruanjian.html","posts/jianzhan.html","posts/githubfangwen.html","posts/huizhou.html","posts/Fengling.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };