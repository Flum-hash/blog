var posts=["posts/githubsc.html","posts/hexozlj.html","posts/hexoycwz.html","posts/minifier.html","posts/linuxrm.html","posts/TED1.html","posts/mdyf.html","posts/alist.html","posts/npminstall.html","posts/dloby.html","posts/chemistry.html","posts/ruanjian.html","posts/algoliasearch.html","posts/jianzhan.html","posts/githubfangwen.html","posts/huizhou.html","posts/Fengling.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };