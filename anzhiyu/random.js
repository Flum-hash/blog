var posts=["posts/e732d5f6.html","posts/minifier.html","posts/869eb1f7.html","posts/36679002.html","posts/7dfef69c.html","posts/df7635ee.html","posts/99c9062b.html","posts/5d36ff15.html","posts/113bdaa7.html","posts/npminstall.html","posts/a5115977.html","posts/3464e4f.html","posts/22966c79.html","posts/35aa5673.html","posts/596431e6.html","posts/Fengling.html","posts/714d1047.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };