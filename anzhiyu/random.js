var posts=["posts/githubsc.html","posts/minifier.html","posts/hexozlj.html","posts/hexoycwz.html","posts/dloby.html","posts/linuxrm.html","posts/mdyf.html","posts/TED1.html","posts/alist.html","posts/algoliasearch.html","posts/chemistry.html","posts/ruanjian.html","posts/npminstall.html","posts/githubfangwen.html","posts/jianzhan.html","posts/huizhou.html","posts/Fengling.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };